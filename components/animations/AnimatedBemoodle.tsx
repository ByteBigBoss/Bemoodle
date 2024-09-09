import React from 'react'
import { motion } from "framer-motion";

const AnimatedBemoodle = ({ className, width, height }: IconProps) => {
  return (
    <motion.svg
      width={width ? width : "390"}
      height={height ? height : "412"}
      viewBox="0 0 390 412"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M184.044 0H233.255V51.304C258.715 48.9722 281.187 51.4011 300.803 58.1774C328.019 67.5796 347.889 84.7247 361.708 105.311C388.546 145.289 392.372 197.63 388.934 234.943C387.1 254.849 370.195 268.348 351.949 268.348H233.255V374.49C233.255 395.206 216.455 412 195.732 412H37.524C16.8001 412 0 395.206 0 374.49V256.664C0 235.948 16.8 219.154 37.524 219.154H184.044V0ZM233.255 219.154H340.655C341.748 189.439 336.585 156.17 320.845 132.723C312.362 120.086 300.806 110.227 284.729 104.673C271.926 100.251 255.153 98.1858 233.255 100.761V219.154ZM184.044 268.348H49.2118V362.806H184.044V268.348Z"
        strokeWidth="2"
        className={className}
        fillOpacity="0"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={{
          pathLength: [0, 1], // Draw the path
          fillOpacity: [0, 1], // Fill the path after drawing
        }}
        transition={{
          pathLength: {
            duration: 2, // Duration for line drawing
            ease: "easeInOut",
          },
          fillOpacity: {
            delay: 1, // Start filling after the line drawing completes
            duration: 0.5, // Duration for fill animation
            ease: "easeInOut",
          },
          repeat: 1, // Infinite loop
          repeatDelay: 1, // Wait a bit before repeating the animation
        }}
      />
    </motion.svg>
  )
}

export default AnimatedBemoodle
