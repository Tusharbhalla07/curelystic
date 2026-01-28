import { motion } from 'framer-motion';

interface HospitalIconProps {
  size?: number;
  className?: string;
}

export function HospitalIcon({ size = 64, className = '' }: HospitalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Ground */}
      <motion.rect
        x="8"
        y="54"
        width="48"
        height="2"
        fill="#E5E7EB"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Main Building */}
      <motion.rect
        x="16"
        y="28"
        width="32"
        height="26"
        fill="#DBEAFE"
        stroke="#3B82F6"
        strokeWidth="2"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 28, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
      />

      {/* Building Top/Roof */}
      <motion.path
        d="M 14 28 L 32 18 L 50 28 Z"
        fill="#3B82F6"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      />

      {/* Cross Circle Background */}
      <motion.circle
        cx="32"
        cy="36"
        r="8"
        fill="white"
        stroke="#EF4444"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
      />

      {/* Red Cross */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
      >
        <rect x="30" y="32" width="4" height="8" rx="0.5" fill="#EF4444" />
        <rect x="28" y="34" width="8" height="4" rx="0.5" fill="#EF4444" />
      </motion.g>

      {/* Windows Row 1 */}
      {[0, 1].map((col) => (
        <motion.rect
          key={`win1-${col}`}
          x={20 + col * 12}
          y="46"
          width="4"
          height="4"
          rx="0.5"
          fill="#60A5FA"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0.3, 1],
            scale: 1 
          }}
          transition={{ 
            delay: 1 + col * 0.1,
            duration: 0.4,
            opacity: {
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }
          }}
        />
      ))}

      {[0, 1].map((col) => (
        <motion.rect
          key={`win1-right-${col}`}
          x={36 + col * 4}
          y="46"
          width="4"
          height="4"
          rx="0.5"
          fill="#60A5FA"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0.3, 1, 1],
            scale: 1 
          }}
          transition={{ 
            delay: 1.2 + col * 0.1,
            duration: 0.4,
            opacity: {
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 1,
            }
          }}
        />
      ))}

      {/* Door */}
      <motion.rect
        x="28"
        y="48"
        width="8"
        height="6"
        rx="1"
        fill="#3B82F6"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Door Handle */}
      <motion.circle
        cx="34"
        cy="51"
        r="0.8"
        fill="#DBEAFE"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.6, duration: 0.2 }}
      />

      {/* Ambulance/Emergency Indicator */}
      <motion.g
        animate={{
          opacity: [1, 0.3, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M 52 20 L 56 20 L 56 16 L 52 16 Z"
          fill="#EF4444"
          opacity="0.8"
        />
        <circle cx="54" cy="18" r="1.5" fill="white" />
      </motion.g>

      {/* Side Wing - Left */}
      <motion.rect
        x="10"
        y="40"
        width="6"
        height="14"
        fill="#BFDBFE"
        stroke="#3B82F6"
        strokeWidth="1.5"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 10, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      />

      {/* Side Wing - Right */}
      <motion.rect
        x="48"
        y="40"
        width="6"
        height="14"
        fill="#BFDBFE"
        stroke="#3B82F6"
        strokeWidth="1.5"
        initial={{ x: 58, opacity: 0 }}
        animate={{ x: 48, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      />

      {/* Floating Pulse/Heartbeat */}
      <motion.path
        d="M 8 12 L 10 12 L 11 10 L 12 14 L 13 12 L 15 12"
        stroke="#EF4444"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        animate={{
          x: [0, 44, 44],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Clouds */}
      {[0, 1].map((index) => (
        <motion.g
          key={`cloud-${index}`}
          animate={{
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2,
          }}
        >
          <circle
            cx={12 + index * 30}
            cy={10 + index * 2}
            r="2"
            fill="#E0E7FF"
            opacity="0.6"
          />
          <circle
            cx={14 + index * 30}
            cy={9 + index * 2}
            r="2.5"
            fill="#E0E7FF"
            opacity="0.6"
          />
          <circle
            cx={16 + index * 30}
            cy={10 + index * 2}
            r="2"
            fill="#E0E7FF"
            opacity="0.6"
          />
        </motion.g>
      ))}
    </svg>
  );
}
