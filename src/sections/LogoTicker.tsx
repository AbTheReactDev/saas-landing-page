"use client";

import acmeLogo from "../assets/logo-acme.png";
import QuantumLogo from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";
import apexLogo from "../assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Logos = [
  {
    src: acmeLogo,
    title: "Acme Logo",
  },
  {
    src: QuantumLogo,
    title: "Quantum Logo",
  },
  {
    src: echoLogo,
    title: "Echo Logo",
  },
  {
    src: pulseLogo,
    title: "Pulse Logo",
  },
  {
    src: celestialLogo,
    title: "Celestial Logo",
  },
  {
    src: apexLogo,
    title: "Apex Logo",
  },
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-14 flex-none"
          >
            {[...new Array(3)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {Logos.map((logo, index) => (
                  <Image
                    key={index}
                    className="logo-ticker"
                    src={logo.src}
                    alt={logo.title}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
