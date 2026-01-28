import { motion } from 'motion/react';

interface QueueIconProps {
  size?: number;
  className?: string;
}

export function QueueIcon({ size = 64, className = '' }: QueueIconProps) {
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
        r="28"
        fill="#EFF6FF"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Person 1 (Front - Active) */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.circle
          cx="32"
          cy="26"
          r="6"
          fill="#3B82F6"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="26"
          y="34"
          width="12"
          height="16"
          rx="3"
          fill="#3B82F6"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      {/* Person 2 (Behind) */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <circle cx="20" cy="22" r="4.5" fill="#93C5FD" opacity="0.8" />
        <rect x="16" y="28" width="8" height="12" rx="2" fill="#93C5FD" opacity="0.8" />
      </motion.g>

      {/* Person 3 (Back) */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <circle cx="12" cy="20" r="3.5" fill="#BFDBFE" opacity="0.6" />
        <rect x="9" y="24" width="6" height="10" rx="1.5" fill="#BFDBFE" opacity="0.6" />
      </motion.g>

      {/* Person 4 (Behind Right) */}
      <motion.g
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <circle cx="44" cy="22" r="4.5" fill="#93C5FD" opacity="0.8" />
        <rect x="40" y="28" width="8" height="12" rx="2" fill="#93C5FD" opacity="0.8" />
      </motion.g>

      {/* Person 5 (Back Right) */}
      <motion.g
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <circle cx="52" cy="20" r="3.5" fill="#BFDBFE" opacity="0.6" />
        <rect x="49" y="24" width="6" height="10" rx="1.5" fill="#BFDBFE" opacity="0.6" />
      </motion.g>

      {/* Arrow Indicator */}
      <motion.g
        animate={{
          y: [0, 3, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M 32 52 L 32 56 M 28 54 L 32 56 L 36 54"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* Flowing Dots */}
      {[0, 1, 2].map((index) => (
        <motion.circle
          key={index}
          cx="32"
          cy="10"
          r="1.5"
          fill="#3B82F6"
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, 45, 45],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 1,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
