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
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "restart none none reset",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="mywork"
      ref={sectionRef}
      className="w-full px-[8%] lg:px-[12%] py-10 scroll-mt-20 relative top-20"
    >
      <h4 ref={subtitleRef} className="text-center mb-2 text-lg font-Ovo">
        My portfolio
      </h4>
      <h2 ref={titleRef} className="text-center text-4xl sm:text-5xl font-Ovo">
        Featured Projects
      </h2>
      <p
        ref={descriptionRef}
        className="mb-10 max-w-2xl font-Ovo text-center mx-auto mt-5 text-gray-600 dark:text-slate-300"
      >
        Explore my full stack web applications. Each project is crafted with
        clean architecture, modern tech stacks, and production-ready code.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {workData.map((work, index) => (
          <div
            key={index}
            ref={(el) => addToPortfolioRefs(el, index)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:shadow-lg dark:hover:border-cyan-500/50 hover:border-cyan-400"
          >
            <div>
              <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-slate-800">
                <Image
                  src={work.bgImage}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-slate-100 font-Outfit group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {work.title}
                  </h3>
                  {work.date && (
                    <span className="text-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-slate-400 font-mono">
                      {work.date}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {work.description}
                </p>

                {work.technologies && work.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {work.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-gray-200 dark:border-slate-700/80 bg-gray-50 dark:bg-slate-800/80 text-gray-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-gray-100 dark:border-slate-800/80 mt-auto pt-4">
              <Link
                href={work.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-gray-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 text-gray-800 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-slate-800 transition-colors"
                aria-label={`Live Demo of ${work.title}`}
              >
                <span>Live Demo</span>
                <svg
                  className="w-3.5 h-3.5 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>

              <Link
                href={work.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gray-900 dark:bg-slate-800 text-white hover:bg-gray-800 dark:hover:bg-slate-700 transition-colors"
                aria-label={`GitHub Code for ${work.title}`}
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Code</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
