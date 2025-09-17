"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Header = () => {
  const profileRef = useRef(null);
  const nameRef = useRef(null);
  const handIconRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef([]);
  const containerRef = useRef(null);

  const addToButtonsRef = useCallback((el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && ScrollTrigger) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          markers: false,
        },
        defaults: { ease: "power2.out" },
      });

      tl.fromTo(
        profileRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 },
        0
      );

      tl.fromTo(
        nameRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.2
      );

      tl.fromTo(
        handIconRef.current,
        { rotation: -15, scale: 0, opacity: 0 },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.5)",
        },
        0.3
      );

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.4
      );

      tl.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.6
      );

      tl.fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
        0.7
      );

      return () => {
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-11/12 flex flex-col justify-center items-center gap-3 mx-auto relative top-10 text-center pt-20 md:pt-10 pb-10"
      id="top"
    >
      <div className="md:pt-10" ref={profileRef}>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32 md:w-40 border-4 border-white shadow-lg"
          width={160}
          height={160}
          priority
        />
      </div>

      <h3
        ref={nameRef}
        className="flex items-end gap-2 text-xl md:text-2xl mb-2 font-Ovo"
      >
        Hi! I'm Mahmoud Aldeeb
        <span ref={handIconRef}>
          <Image
            src={assets.hand_icon}
            alt="icon"
            className="w-6 md:w-7"
            loading="lazy"
          />
        </span>
      </h3>

      <h1
        ref={titleRef}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo flex flex-col text-center leading-tight"
      >
        Frontend web developer <br /> based in Alexandria.
      </h1>

      <p
        ref={descRef}
        className="max-w-2xl text-center mx-auto font-Outfit opacity-80 text-lg mt-4"
      >
        Junior Frontend Engineer | Building responsive web apps with React &
        Tailwind | Actively building real-world projects and sharing progress
        publicly.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-8">
        <a
          ref={addToButtonsRef}
          href="#contact"
          className="px-10 py-3 border rounded-full font-Outfit bg-black text-white border-white flex items-center gap-2 transition-all hover:bg-gray-800 hover:scale-105 shadow-md"
          aria-label="Connect with me"
          style={{ transitionDuration: "200ms" }}
        >
          Connect with me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4"
            aria-hidden="true"
            loading="lazy"
          />
        </a>

        <a
          ref={addToButtonsRef}
          href="/Mahmoud-Elsebaei-Eldeeb.pdf"
          download
          className="px-10 py-3 border rounded-full font-Outfit border-gray-500 flex items-center gap-2 transition-all hover:bg-gray-100 hover:scale-105"
          aria-label="Download my resume"
          style={{ transitionDuration: "200ms" }}
        >
          My resume
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4"
            aria-hidden="true"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
