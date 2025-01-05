"use client";

import ArrowIcon from "../assets/arrow-right.svg";
import CogImage from "../assets/cog.png";
import CylinderImage from "../assets/cylinder.png";
import NoodleImage from "../assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // useMotionValueEvent(translateY, "change", (latestValue) => {
  //   console.log(latestValue);
  // });

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter gradient-heading my-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 md:relative">
            <motion.img
              src={CogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:-left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={CylinderImage.src}
              alt="Cylinder image"
              width={220}
              height={220}
              className="hidden md:block md:absolute md:-top-8 md:-left-32"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={NoodleImage.src}
              alt="Cylinder image"
              width={220}
              height={220}
              className="hidden lg:block lg:absolute md:-bottom-32 md:-right-24"
              style={{
                translateY: translateY,
                rotate: 30,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
