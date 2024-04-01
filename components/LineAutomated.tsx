"use client";
import { motion, useScroll } from "framer-motion";
export default function LineAutomated() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
  );
}
