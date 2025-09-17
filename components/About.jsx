"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);
  const toolsRef = useRef([]);

  const addToCardsRef = useCallback((el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  }, []);

  const addToToolsRef = useCallback((el) => {
    if (el && !toolsRef.current.includes(el)) {
      toolsRef.current.push(el);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const allElements = [
        imageRef.current,
        textRef.current,
        ...cardsRef.current,
        ...toolsRef.current,
      ].filter(Boolean);

      gsap.set(allElements, { autoAlpha: 0, y: 50 });
      gsap.set(imageRef.current, {
        scale: 0.8,
        rotationX: 10,
        transformPerspective: 1000,
      });

      const enterTimeline = gsap.timeline({ paused: true });
      enterTimeline
        .to(imageRef.current, {
          autoAlpha: 1,
          scale: 1,
          rotationX: 0,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
        })
        .to(
          textRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1.0"
        )
        .to(
          cardsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .to(
          toolsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.1,
            rotation: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.6"
        );

      const backTimeline = gsap.timeline({ paused: true });
      backTimeline.to(allElements, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "elastic.out(1, 0.3)",
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => enterTimeline.restart(),
        onEnterBack: () => backTimeline.restart(),
        onLeave: () =>
          gsap.to(allElements, { autoAlpha: 0, y: 50, duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to(allElements, { autoAlpha: 0, y: -50, duration: 0.5 }),
        invalidateOnRefresh: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      ref={containerRef}
      className="w-full px-[12%] py-10 relative top-20 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div ref={imageRef} className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="Mahmoud Aldeeb"
            className="w-full rounded-3xl"
            width={320}
            height={320}
            priority
          />
        </div>
        <div ref={textRef} className="flex-1">
          <p className="mb-10 max-w2xl font-Ovo">
            I’m a frontend developer from Egypt with a solid foundation in
            React, Next.js, and Tailwind CSS. As a recent graduate, I’ve built
            and documented real-world projects that reflect my focus on clean
            design and scalable code. You can explore my latest projects below,
            each built with attention to detail and a focus on usability.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map((info, index) => (
              <li
                key={index}
                ref={addToCardsRef}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer lightHover hover:-translate-y-1 duration-500 shadow-darks"
              >
                <Image
                  src={info.icon}
                  alt={info.title}
                  className="w-7 mt-3"
                  width={28}
                  height={28}
                />
                <h3 className="my-4 font-semibold text-gray-700 ">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                ref={addToToolsRef}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer lightHover hover:-translate-y-1 duration-500"
              >
                <Image
                  src={tool}
                  alt="Development tool"
                  className="w-5 sm:w-7"
                  width={28}
                  height={28}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
