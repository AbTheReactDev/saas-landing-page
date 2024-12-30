import Image from "next/image";
import Logo from "../assets/logosaas.png";
import XLogo from "@/assets/social-x.svg";
import InstaLogo from "@/assets/social-insta.svg";
import LinkedinLogo from "@/assets/social-linkedin.svg";
import PinterestLogo from "@/assets/social-pin.svg";
import YoutubeLogo from "@/assets/social-youtube.svg";

const FooterLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Features",
    path: "/about",
  },
  {
    title: "Customers",
    path: "/about",
  },
  {
    title: "Pricing",
    path: "/about",
  },
  {
    title: "Updates",
    path: "/about",
  },
  {
    title: "Help",
    path: "/about",
  },
];

export const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white/60">
      <div className="container">
        <div className="flex flex-col text-center justify-center items-center ">
          <div className="inline-flex relative before:content-[''] before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute before:blur before:top-2 before:-bottom-0 ">
            <Image
              src={Logo}
              alt="Logo"
              height={40}
              width={40}
              className="relative"
            />
          </div>
          <nav className="flex flex-col gap-3 md:flex-row py-5">
            {FooterLinks?.map((link, index) => (
              <a className="text-sm" href="#">
                {link.title}
              </a>
            ))}
          </nav>
          <nav className="flex justify-center gap-3">
            <XLogo className="social-icon" />
            <InstaLogo className="social-icon" />
            <LinkedinLogo className="social-icon" />
            <PinterestLogo className="social-icon" />
            <YoutubeLogo className="social-icon" />
          </nav>
          <p className="text-sm pt-4">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
