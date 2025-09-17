"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Work = ({ currentTheme = "light" }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const portfolioItemsRef = useRef([]);
  const buttonRef = useRef(null);

  const addToPortfolioRefs = useCallback((el, index) => {
    if (el && !portfolioItemsRef.current.includes(el)) {
      portfolioItemsRef.current[index] = el;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none none reset",
          },
        }
      );

      portfolioItemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "restart none none reset",
            },
          }
        );
      });

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "restart none none reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="mywork"
      ref={sectionRef}
      className="w-full px-[12%] py-10 scroll-mt-20 relative top-20"
    >
      <h4 ref={subtitleRef} className="text-center mb-2 text-lg font-Ovo">
        My portfolio
      </h4>
      <h2 ref={titleRef} className="text-center text-5xl font-Ovo">
        My latest work
      </h2>
      <p
        ref={descriptionRef}
        className="mb-10 max-w-2xl font-Ovo text-center mx-auto mt-5"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {workData.map((work, index) => (
          <div
            key={index}
            ref={(el) => addToPortfolioRefs(el, index)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            <div className="aspect-video bg-no-repeat bg-cover bg-center relative  overflow-hidden">
              <Image
                src={work.bgImage}
                alt={work.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-b-2xl">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {work.description}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <Link
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-md"
                    aria-label={`View ${work.title} project`}
                  >
                    <Image
                      src={assets.send_icon}
                      alt="View project"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {work.date || "Recent"}
                  </span>
                  <Link
                    href="https://fanciful-tarsier-64e8c2.netlify.app/"
                    className="flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Web App
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/pages/projects"
          ref={buttonRef}
          className="inline-flex items-center justify-center px-8 py-4 border-2 rounded-full font-medium group font-Outfit bg-black text-white border-white gap-3 transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-md"
        >
          <span>View Full Projects</span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              currentTheme === "dark" ? "bg-lime-400/20" : "bg-gray-800/10"
            }`}
          >
            <Image
              src={
                currentTheme === "dark"
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="Right arrow"
              width={16}
              height={16}
              className="w-4 transform group-hover:translate-x-1 transition-transform"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Work;
