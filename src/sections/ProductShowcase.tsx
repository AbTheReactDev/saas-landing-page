"use client";

import Image from "next/image";
import ProductImage from "../assets/product-image.png";
import PyramidImage from "../assets/pyramid.png";
import TubeImage from "../assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container text-center">
        <div className="max-w-[540px] mx-auto">
          <div className="tag">Boost your productivity</div>
          <h2 className="gradient-heading  py-3">
            {" "}
            A more effective way to track progress
          </h2>
          <p className="description mb-2">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" />
          <motion.img
            src={PyramidImage.src}
            alt="Pyramid Image"
            className="absolute -top-32 -right-36 hidden md:block"
            height={262}
            width={262}
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={TubeImage.src}
            alt="Tube Image"
            className="absolute bottom-10 -left-36 hidden md:block"
            height={252}
            width={252}
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
