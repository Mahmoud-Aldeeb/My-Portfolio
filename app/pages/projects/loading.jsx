"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Loading = ({ isLoading }) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      gsap.to(loadingRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // أنيميشن الإخفاء
      gsap.to(loadingRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isLoading]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      style={{ visibility: isLoading ? "visible" : "hidden" }}
    >
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-4 border-white border-opacity-50 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
