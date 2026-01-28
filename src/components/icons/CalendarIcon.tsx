import { motion } from 'framer-motion';

interface CalendarIconProps {
  size?: number;
  className?: string;
}

export function CalendarIcon({ size = 64, className = '' }: CalendarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Calendar Body */}
      <motion.rect
        x="12"
        y="16"
        width="40"
        height="40"
        rx="4"
        fill="white"
        stroke="#3B82F6"
        strokeWidth="2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
      />

      {/* Calendar Header */}
      <motion.rect
        x="12"
        y="16"
        width="40"
        height="12"
        rx="4"
        fill="#3B82F6"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Binding Rings */}
      {[0, 1].map((index) => (
        <motion.g key={index}>
          <motion.rect
            x={22 + index * 20}
            y="12"
            width="3"
            height="8"
            rx="1.5"
            fill="#60A5FA"
            initial={{ y: 8 }}
            animate={{ y: 12 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
          />
          <motion.circle
            cx={23.5 + index * 20}
            cy="12"
            r="2"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
          />
        </motion.g>
      ))}

      {/* Calendar Grid - Days */}
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3, 4, 5, 6].slice(0, row === 0 ? 7 : 6).map((col) => {
          const isHighlighted = row === 2 && col === 3;
          const delay = 0.6 + (row * 7 + col) * 0.02;
          
          return (
            <motion.rect
              key={`${row}-${col}`}
              x={16 + col * 5.5}
              y={32 + row * 5}
              width="4"
              height="4"
              rx="1"
              fill={isHighlighted ? '#10B981' : '#DBEAFE'}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isHighlighted ? [1, 1.2, 1] : 1,
                opacity: 1 
              }}
              transition={{ 
                delay,
                duration: 0.3,
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }
              }}
            />
          );
        })
      )}

      {/* Checkmark on highlighted date */}
      <motion.path
        d="M 33 46 L 35 48 L 39 44"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />

      {/* Notification Pulse */}
      <motion.circle
        cx="48"
        cy="20"
        r="4"
        fill="#EF4444"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [0, 1, 1],
        }}
        transition={{ 
          delay: 1.5,
          duration: 0.4,
        }}
      />

      <motion.circle
        cx="48"
        cy="20"
        r="4"
        fill="#EF4444"
        opacity="0.4"
        animate={{ 
          scale: [1, 1.8, 1.8],
          opacity: [0.4, 0, 0],
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
