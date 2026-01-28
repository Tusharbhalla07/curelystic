import { motion } from 'motion/react';

interface BookingIconProps {
  size?: number;
  className?: string;
}

export function BookingIcon({ size = 64, className = '' }: BookingIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Clipboard Background */}
      <motion.rect
        x="14"
        y="12"
        width="36"
        height="44"
        rx="4"
        fill="#DBEAFE"
        stroke="#3B82F6"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Clipboard Top Clip */}
      <motion.rect
        x="24"
        y="8"
        width="16"
        height="8"
        rx="2"
        fill="#3B82F6"
        initial={{ y: 4 }}
        animate={{ y: 8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {/* Checkboxes */}
      {[0, 1, 2].map((index) => (
        <motion.g key={index}>
          {/* Checkbox */}
          <motion.rect
            x="20"
            y={24 + index * 10}
            width="6"
            height="6"
            rx="1"
            fill="white"
            stroke="#3B82F6"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
          />
          
          {/* Checkmark */}
          <motion.path
            d={`M 21 ${27 + index * 10} L 22.5 ${28.5 + index * 10} L 25 ${25.5 + index * 10}`}
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
          />

          {/* Text Lines */}
          <motion.line
            x1="30"
            y1={27 + index * 10}
            x2="44"
            y2={27 + index * 10}
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.g>
      ))}

      {/* Pencil/Pen */}
      <motion.g
        animate={{
          x: [0, 2, 0],
          y: [0, -2, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <rect x="38" y="40" width="3" height="12" rx="1.5" fill="#F59E0B" />
        <path d="M 38 40 L 39.5 37 L 41 40 Z" fill="#FCD34D" />
        <rect x="38" y="49" width="3" height="3" rx="1.5" fill="#1F2937" />
      </motion.g>

      {/* Floating Plus Sign */}
      <motion.g
        animate={{
          y: [0, -3, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="48" cy="18" r="6" fill="#10B981" />
        <path
          d="M 48 15 L 48 21 M 45 18 L 51 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
}
