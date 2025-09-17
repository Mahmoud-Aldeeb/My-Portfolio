"use client";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = ({ currentTheme = "light" }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const servicesRef = useRef([]);

  const addToServicesRef = useCallback((el) => {
    if (el && !servicesRef.current.includes(el)) {
      servicesRef.current.push(el);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 1.5,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        subheadingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        descriptionRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: 1.2,
          },
        }
      );

      servicesRef.current.forEach((service, index) => {
        if (!service) return;

        gsap.fromTo(
          service,
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotationX: -15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: service,
              start: "top 90%",
              end: "top 50%",
              scrub: 1.5,
            },
          }
        );

        const hoverAnimation = gsap.to(service, {
          y: -10,
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          duration: 0.4,
          ease: "power2.out",
          paused: true,
        });

        const mouseEnter = () => hoverAnimation.play();
        const mouseLeave = () => hoverAnimation.reverse();

        service.addEventListener("mouseenter", mouseEnter);
        service.addEventListener("mouseleave", mouseLeave);

        service._mouseEnter = mouseEnter;
        service._mouseLeave = mouseLeave;
      });

      gsap.to(sectionRef.current, {
        backgroundColor: "rgba(0,0,0,0.02)",
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();

      servicesRef.current.forEach((service) => {
        if (service && service._mouseEnter && service._mouseLeave) {
          service.removeEventListener("mouseenter", service._mouseEnter);
          service.removeEventListener("mouseleave", service._mouseLeave);
        }
      });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 relative top-20 bg-transparent"
    >
      <h4
        ref={subheadingRef}
        className="text-center mb-2 text-lg font-Ovo opacity-0"
      >
        What I offer
      </h4>
      <h2 ref={headingRef} className="text-center text-5xl font-Ovo opacity-0">
        My services
      </h2>
      <p
        ref={descriptionRef}
        className="mb-10 max-w-2xl font-Ovo text-center mx-auto mt-5 opacity-0"
      >
        As a passionate frontend developer, I focus on building clean,
        responsive, and user-friendly web interfaces using modern technologies
        like React, Next.js, TypeScript, and Tailwind CSS.
        <br /> Here's what I offer:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service, index) => (
          <div
            ref={addToServicesRef}
            className="border border-gray-300 rounded-xl p-6 cursor-pointer lightHover shadow-sm service-card opacity-0 transition-all duration-300 hover:shadow-md"
            key={index}
          >
            <div className="bg-[#FF388B] rounded-lg w-14 h-14 flex items-center justify-center mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </div>
            <h4 className="my-4 font-semibold text-gray-700 ">
              {service.title}
            </h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
