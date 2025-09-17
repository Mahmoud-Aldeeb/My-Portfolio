import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ currentTheme = "light" }) => {
  return (
    <footer className="mt-20">
      <div className="text-center ">
        <Image
          key={currentTheme}
          src={currentTheme === "dark" ? assets.white_logo : assets.logo_dark}
          alt="icon"
          className="w-36 mx-auto"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="logo" className="w-6" />
          mahmoudalden125@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Mahmoud Aldeeb. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Mahmoud-Aldeeb">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mahmoud-aldeeb/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/201116199664">
              WathsApp
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
