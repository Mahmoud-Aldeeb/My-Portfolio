"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = ({ currentTheme = "light" }) => {
  const [result, setResult] = useState("");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const inputRefs = useRef([]);
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);
  const resultRef = useRef(null);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "149b3d18-bb0f-44d4-b141-6a977b6a6dce");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred. Please try again.");
    }
  }, []);

  const addToInputRefs = useCallback((el, index) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        subtitleRef.current,
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
        titleRef.current,
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

      inputRefs.current.forEach((input, index) => {
        if (!input) return;

        gsap.fromTo(
          input,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: input,
              start: "top 85%",
              toggleActions: "restart none none reset",
            },
          }
        );
      });

      gsap.fromTo(
        textareaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textareaRef.current,
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );

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

      gsap.fromTo(
        resultRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: resultRef.current,
            start: "top 90%",
            toggleActions: "restart none none reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="contactme"
      ref={sectionRef}
      className="w-full contact relative top-20  px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center"
    >
      <h4 ref={subtitleRef} className="text-center mb-2 text-lg font-Ovo">
        Connect with me
      </h4>
      <h2 ref={titleRef} className="text-center text-5xl font-Ovo">
        Get in touch
      </h2>
      <p
        ref={descriptionRef}
        className="mb-10 max-w-2xl font-Ovo text-center mx-auto mt-5"
      >
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid gridTemplateCol gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Your Name"
            required
            name="name"
            ref={(el) => addToInputRefs(el, 0)}
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              currentTheme === "dark"
                ? "border-gray-600 text-white placeholder-gray-400 "
                : "border-gray-400 text-black placeholder-gray-500 "
            }`}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            ref={(el) => addToInputRefs(el, 1)}
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              currentTheme === "dark"
                ? "border-gray-600 text-white placeholder-gray-400 "
                : "border-gray-400 text-black placeholder-gray-500 "
            }`}
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your Message"
          required
          name="message"
          ref={textareaRef}
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${
            currentTheme === "dark"
              ? "border-gray-600 text-white placeholder-gray-400 "
              : "border-gray-400 text-black placeholder-gray-500 "
          }`}
        />
        <button
          type="submit"
          ref={buttonRef}
          className="w-max px-8 py-3 border rounded-full font-Outfit flex items-center justify-center gap-2 bg-black/80 text-white mx-auto hover:bg-black duration-500 transition-colors"
        >
          Send Message
          <Image
            src={assets.right_arrow_white}
            className="w-4"
            alt="Send icon"
            width={16}
            height={16}
          />
        </button>
        <p ref={resultRef} className="mt-4 text-center">
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
