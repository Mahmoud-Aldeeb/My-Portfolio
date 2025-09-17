"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { assets } from "@/assets/assets";
import { gsap } from "gsap";

const NavbarClient = ({ currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sideMenuRef = useRef();
  const menuButtonRef = useRef();
  const navUlRef = useRef(null);
  const navItemsRefs = useRef([]);
  const router = useRouter();
  const pathname = usePathname();

  const openMenu = useCallback(() => {
    if (sideMenuRef.current) {
      gsap.to(sideMenuRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      setIsOpen(true);
    }
  }, []);

  const closeMenu = useCallback(() => {
    if (sideMenuRef.current) {
      gsap.to(sideMenuRef.current, {
        x: "16rem",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navUlRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );

      navItemsRefs.current.forEach((item) => {
        if (item) {
          const underline = item.querySelector(".underline");
          if (underline) {
            const mouseEnter = () => {
              gsap.to(underline, {
                width: "100%",
                duration: 0.2,
                ease: "power1.out",
              });
            };

            const mouseLeave = () => {
              gsap.to(underline, {
                width: "0%",
                duration: 0.2,
                ease: "power1.out",
              });
            };

            item.addEventListener("mouseenter", mouseEnter);
            item.addEventListener("mouseleave", mouseLeave);

            return () => {
              item.removeEventListener("mouseenter", mouseEnter);
              item.removeEventListener("mouseleave", mouseLeave);
            };
          }
        }
      });
    });

    return () => ctx.revert();
  }, [currentTheme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const handleNavClick = useCallback(
    (item, index) => {
      const sectionId =
        index === 0 ? "/" : `/#${item.toLowerCase().replace(" ", "")}`;
      router.push(sectionId);
      closeMenu();
      if (sectionId !== "/" && pathname === "/") {
        setTimeout(() => {
          const element = document.getElementById(
            item.toLowerCase().replace(" ", "")
          );
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    },
    [router, closeMenu, pathname]
  );

  const addToNavItemsRefs = useCallback((el, index) => {
    if (el && !navItemsRefs.current.includes(el)) {
      navItemsRefs.current[index] = el;
    }
  }, []);

  return (
    <>
      <button
        ref={menuButtonRef}
        className="md:hidden cursor-pointer pl-4"
        onClick={openMenu}
        aria-label="Open menu"
      >
        <Image
          src={currentTheme === "dark" ? assets.menu_white : assets.menu_black}
          alt="Menu icon"
          width={24}
          height={24}
          className="w-6"
        />
      </button>
      <div
        ref={sideMenuRef}
        className={`flex md:hidden flex-col gap-4 py-16 px-8 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-[var(--background)] transition-transform duration-300 ${
          isOpen ? "" : "translate-x-64"
        }`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <Image
            src={
              currentTheme === "dark" ? assets.close_white : assets.close_black
            }
            alt="Close icon"
            width={20}
            height={20}
            className="w-5 cursor-pointer"
          />
        </button>
        <ul ref={navUlRef}>
          {["Home", "About Me", "Services", "My Work", "Contact Me"].map(
            (item, index) => (
              <li
                key={index}
                ref={(el) => addToNavItemsRefs(el, index)}
                className="list-none relative"
              >
                <a
                  className={`font-Ovo text-lg ${
                    currentTheme === "dark" ? "text-white" : "text-gray-800"
                  } block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200`}
                  onClick={() => handleNavClick(item, index)}
                  href={
                    index === 0
                      ? "/"
                      : `/#${item.toLowerCase().replace(" ", "")}`
                  }
                  aria-current={
                    (index === 0 && pathname === "/") ||
                    (index !== 0 &&
                      pathname === "/" &&
                      window.location.hash ===
                        `#${item.toLowerCase().replace(" ", "")}`)
                      ? "page"
                      : undefined
                  }
                >
                  {item}
                  <div className="underline absolute bottom-0 left-0 h-[2px] bg-[var(--foreground)] w-0"></div>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default NavbarClient;
