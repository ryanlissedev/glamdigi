"use client";

import React, { ReactNode, useEffect, useRef } from "react";
interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add("animate-slideUpCubiBezier");
            }
          });
        },
        { rootMargin: offset },
      );
      observer.observe(ref.current);
    }
  }, [offset]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
