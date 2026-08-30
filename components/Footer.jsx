import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ currentTheme = "light" }) => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <Image
          key={currentTheme}
          src={currentTheme === "dark" ? assets.white_logo : assets.logo_dark}
          alt="icon"
          className="w-36 mx-auto"
          width={144}
          height={40}
        />
        <div className="w-max flex items-center gap-2 mx-auto mt-2 text-gray-600 dark:text-slate-400">
          <Image
            src={currentTheme === "dark" ? assets.mail_icon_dark : assets.mail_icon}
            alt="email"
            className="w-6"
            width={24}
            height={24}
          />
          mahmoudalden125@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-slate-700 mx-[10%] mt-12 py-6">
        <p className="text-gray-500 dark:text-slate-400 text-sm">
          © 2025 Mahmoud Aldeeb. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/Mahmoud-Aldeeb"
              className="text-gray-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mahmoud-aldeeb/"
              className="text-gray-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://wa.me/201116199664"
              className="text-gray-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
