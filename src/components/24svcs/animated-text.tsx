"use client";
import type React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const TextHoverEffect = ({ text }: { text: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const maskAnimation = useAnimation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setHovered(true);
      const animateMask = async () => {
        while (true) {
          await maskAnimation.start({ cx: "0%", cy: "0%" }, { duration: 2 });
          await maskAnimation.start({ cx: "100%", cy: "0%" }, { duration: 2 });
          await maskAnimation.start(
            { cx: "100%", cy: "100%" },
            { duration: 2 },
          );
          await maskAnimation.start({ cx: "0%", cy: "100%" }, { duration: 2 });
          await maskAnimation.start({ cx: "50%", cy: "50%" }, { duration: 2 });
        }
      };
      animateMask();
    } else {
      maskAnimation.start(
        { cx: `${cursor.x}%`, cy: `${cursor.y}%` },
        { duration: 0.5 },
      );
    }
  }, [isMobile, maskAnimation, cursor]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (svgRef.current && !isMobile) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const x = ((e.clientX - svgRect.left) / svgRect.width) * 100;
      const y = ((e.clientY - svgRect.top) / svgRect.height) * 100;
      setCursor({ x, y });
    }
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onMouseMove={handleMouseMove}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          {(hovered || isMobile) && (
            <>
              <stop offset="0%" stopColor="var(--yellow-500)">
                <animate
                  attributeName="offset"
                  values="0;1;0"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="25%" stopColor="var(--red-500)">
                <animate
                  attributeName="offset"
                  values="0.25;1.25;0.25"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="var(--blue-500)">
                <animate
                  attributeName="offset"
                  values="0.5;1.5;0.5"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="var(--cyan-500)">
                <animate
                  attributeName="offset"
                  values="0.75;1.75;0.75"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="var(--violet-500)">
                <animate
                  attributeName="offset"
                  values="1;2;1"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          animate={maskAnimation}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="60%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered || isMobile ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
