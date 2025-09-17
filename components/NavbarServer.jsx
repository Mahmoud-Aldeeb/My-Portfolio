import Image from "next/image";
import { assets } from "@/assets/assets";
import { setTheme } from "@/app/actions/theme";
import NavbarClient from "./NavbarClient";

export default function NavbarServer({ currentTheme = "light" }) {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        {currentTheme !== "dark" && (
          <Image
            src={assets.header_bg_color}
            alt="background"
            width={1200}
            height={400}
            className="w-full"
            loading="lazy"
          />
        )}
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-[var(--background)]`}
      >
        <a href="/">
          <Image
            src={currentTheme === "dark" ? assets.white_logo : assets.logo_dark}
            alt="Logo"
            width={140}
            height={40}
            className="w-35 cursor-pointer"
            priority
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 py-3 m-auto bg-[var(--background)]/20 shadow-sm`}
        >
          {["Home", "About Me", "Services", "My Work", "Contact me"].map(
            (item, index) => (
              <li key={index} className="relative">
                <a
                  className={`font-Ovo text-lg ${
                    currentTheme === "dark" ? "text-white" : "text-gray-800"
                  } relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200`}
                  href={
                    index === 0
                      ? "/"
                      : `/#${item.toLowerCase().replace(" ", "")}`
                  }
                >
                  {item}
                  <div className="underline absolute bottom-0 left-0 h-[2px] bg-[var(--foreground)] w-0"></div>
                </a>
              </li>
            )
          )}
        </ul>
        <div className="flex items-center gap-4">
          <form action={setTheme.bind(null, currentTheme)}>
            <button
              type="submit"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              <Image
                src={
                  currentTheme === "dark" ? assets.sun_icon : assets.moon_icon
                }
                alt="Theme icon"
                width={24}
                height={24}
                className="w-6 cursor-pointer"
              />
            </button>
          </form>
          <NavbarClient currentTheme={currentTheme} />
        </div>
      </nav>
    </>
  );
}
