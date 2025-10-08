"use client"; //very important! motion is invoked in the client
//install motion

//import the motion element

import { motion } from "motion/react";

export default function Headings() {
  return (
    // gave the motion element to one of our DOM elements
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 5 }}
      className="flex flex-col items-center"
    >
      <h1>Manny&apos;s Rollercoasters</h1>
      <h2>Have fun!</h2>
    </motion.div>
  );
}
