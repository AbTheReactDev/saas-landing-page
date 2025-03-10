"use client";
import ArrowIcon from "../assets/arrow-right.svg";
import StarImage from "../assets/star.png";
import SpringImage from "../assets/spring.png";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 relative overflow-x-clip"
    >
      <motion.img
        src={StarImage.src}
        alt="Star image"
        width={360}
        height={360}
        style={{
          translateY,
        }}
        className="absolute top-0 lg:left-0 md:-left-[220px] md:block hidden"
      />
      <div className="container">
        <h2 className="gradient-heading text-center">Sign up for free today</h2>
        <p className="description my-4 max-w-[350px] mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.{" "}
        </p>
        <div className="flex gap-1 items-center justify-center mt-[30px]">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <motion.img
        src={SpringImage.src}
        alt="Spring image"
        width={360}
        height={360}
        style={{
          translateY,
        }}
        className="absolute bottom-0 lg:right-0 md:-right-[220px]  hidden md:block"
      />
    </section>
  );
};
