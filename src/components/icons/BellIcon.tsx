import { motion } from 'motion/react';

interface BellIconProps {
  size?: number;
  className?: string;
}

export function BellIcon({ size = 64, className = '' }: BellIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <motion.circle
        cx="32"
        cy="32"
        r="26"
        fill="#FEF3C7"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Bell Body */}
      <motion.path
        d="M 32 18 C 32 18 26 18 26 24 L 26 32 C 26 32 24 36 20 36 L 44 36 C 40 36 38 32 38 32 L 38 24 C 38 18 32 18 32 18 Z"
        fill="#F59E0B"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ scale: 0, y: -10 }}
        animate={{ 
          scale: 1, 
          y: 0,
        }}
        transition={{ 
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      />

      {/* Bell Top */}
      <motion.rect
        x="30"
        y="16"
        width="4"
        height="4"
        rx="2"
        fill="#D97706"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      />

      {/* Bell Clapper */}
      <motion.circle
        cx="32"
        cy="34"
        r="2"
        fill="#D97706"
        animate={{
          x: [-1, 1, -1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      {/* Bell Bottom Curve */}
      <motion.path
        d="M 20 36 Q 22 40 26 40 L 38 40 Q 42 40 44 36"
        stroke="#D97706"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      />

      {/* Bell Ringing Animation - Bell itself */}
      <motion.g
        animate={{
          rotate: [0, -8, 8, -8, 8, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: '32px 18px' }}
      >
        {/* This creates the ringing effect */}
      </motion.g>

      {/* Sound Waves - Left */}
      {[0, 1, 2].map((index) => (
        <motion.path
          key={`left-${index}`}
          d={`M ${18 - index * 4} ${24 + index * 2} Q ${14 - index * 4} ${28 + index * 2} ${18 - index * 4} ${32 + index * 2}`}
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Sound Waves - Right */}
      {[0, 1, 2].map((index) => (
        <motion.path
          key={`right-${index}`}
          d={`M ${46 + index * 4} ${24 + index * 2} Q ${50 + index * 4} ${28 + index * 2} ${46 + index * 4} ${32 + index * 2}`}
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Notification Badge */}
      <motion.circle
        cx="44"
        cy="20"
        r="6"
        fill="#EF4444"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3, type: "spring" }}
      />

      <motion.text
        x="44"
        y="23"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.2 }}
      >
        3
      </motion.text>

      {/* Pulsing Ring */}
      <motion.circle
        cx="44"
        cy="20"
        r="6"
        fill="none"
        stroke="#EF4444"
        strokeWidth="2"
        animate={{
          scale: [1, 1.8, 1.8],
          opacity: [0.8, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
