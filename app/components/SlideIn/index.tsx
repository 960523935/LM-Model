"use client";

import React, { useEffect, useRef } from "react";

interface SlideInProps {
  children: React.ReactNode;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 添加 Tailwind 的类来触发动画
        entry.target.children[0].classList.remove(
          "opacity-0",
          "translate-y-full"
        );
        entry.target.children[0].classList.add("opacity-100", "translate-y-0");
      } else {
        // 移除 Tailwind 的类来取消动画
        entry.target.children[0].classList.remove(
          "opacity-100",
          "translate-y-0"
        );
        entry.target.children[0].classList.add("opacity-0", "translate-y-full");
      }
    });
  },
  {
    threshold: 0.1, // 触发的可见比例
  }
);

export default function SlideIn({ children }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="h-fit">
      <div className="transition-all duration-500 opacity-0 translate-y-full">
        {children}
      </div>
    </div>
  );
}
