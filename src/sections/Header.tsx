"use client";
import Image from "next/image";
import ArrowRight from "../assets/arrow-right.svg";
import Logo from "../assets/logosaas.png";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="top-0 backdrop-blur-sm z-20 sticky">
      <div className="flex items-center justify-center py-3 bg-black text-white text-sm gap-3">
        <p className=" text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex gap-1 items-center ">
          <p>Get started for free</p>
          <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <MenuIcon onClick={handleMenuOpen} className="h-5 w-5 md:hidden " />
            <nav className="hidden md:flex gap-6 items-center  text-black/60">
              <a href="/#">About</a>
              <a href="/#">Features</a>
              <a href="/#">Customers</a>
              <a href="/#">Updates</a>
              <a href="/#">Help</a>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="bg-black absolute text-white top-0 left-0 h-screen w-screen "
        >
          <div className="container">
            <div className="flex justify-between items-center py-10">
              <div className="inline-flex relative before:content-[''] before:absolute before:blur before:top-2 before:-bottom-0 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
                <Image
                  src={Logo}
                  alt="Logo"
                  height={40}
                  width={40}
                  className="relative"
                />
              </div>
              <CloseIcon
                onClick={handleMenuClose}
                className="h-12 w-12 md:hidden  "
              />
            </div>
            <nav className="flex flex-col items-center gap-16 justify-center h-[80vh] overflow-hidden">
              <a className=" text-3xl font-black" href="/#">
                About
              </a>
              <a className=" text-3xl font-black" href="/#">
                Features
              </a>
              <a className=" text-3xl font-black" href="/#">
                Customers
              </a>
              <a className=" text-3xl font-black" href="/#">
                Updates
              </a>
              <a className=" text-3xl font-black" href="/#">
                Help
              </a>
              <button className="btn btn-primary bg-white text-black">
                Get for free
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};
