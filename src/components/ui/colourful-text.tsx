"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ColourfulText({ text }: { text: string }) {
  const colors = [
    "#e43f5a", // main theme color
    "#ff6f91", // lighter pink
    "#ffb3c6", // very light pink
    "#ff8c42", // orange accent
    "#ffd6e0", // pale pink
    "#f9ed69", // yellow accent
    "#a28089", // muted purple
    "#6a0572", // deep purple
    "#ff3c6f", // vibrant pink
    "#fcb900", // gold accent
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
  className="inline-block whitespace-pre font-sans tracking-tight mx-[0.08em]"
    >
      {char}
    </motion.span>
  ));
}
