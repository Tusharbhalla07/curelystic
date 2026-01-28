import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HeroAnimation() {
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCycle((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="180"
          fill="#EFF6FF"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Stage 1: QR Code Scanning */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: animationCycle === 0 ? 1 : 0,
            y: animationCycle === 0 ? 0 : -20
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Phone Outline */}
          <motion.rect
            x="140"
            y="100"
            width="120"
            height="200"
            rx="15"
            fill="white"
            stroke="#3B82F6"
            strokeWidth="3"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          
          {/* Phone Screen */}
          <rect
            x="150"
            y="120"
            width="100"
            height="160"
            rx="5"
            fill="#DBEAFE"
          />

          {/* QR Code */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: animationCycle === 0 ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <rect x="170" y="150" width="60" height="60" rx="5" fill="#3B82F6" opacity="0.3" />
            <rect x="175" y="155" width="10" height="10" fill="#3B82F6" />
            <rect x="195" y="155" width="10" height="10" fill="#3B82F6" />
            <rect x="215" y="155" width="10" height="10" fill="#3B82F6" />
            <rect x="175" y="175" width="10" height="10" fill="#3B82F6" />
            <rect x="215" y="175" width="10" height="10" fill="#3B82F6" />
            <rect x="175" y="195" width="10" height="10" fill="#3B82F6" />
            <rect x="195" y="195" width="10" height="10" fill="#3B82F6" />
            <rect x="215" y="195" width="10" height="10" fill="#3B82F6" />
          </motion.g>

          {/* Scanning Lines */}
          <motion.line
            x1="170"
            y1="180"
            x2="230"
            y2="180"
            stroke="#2563EB"
            strokeWidth="2"
            initial={{ y: 150 }}
            animate={{ 
              y: animationCycle === 0 ? [150, 210, 150] : 150 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />

          {/* "Scan QR" Text */}
          <text
            x="200"
            y="240"
            textAnchor="middle"
            fill="#3B82F6"
            fontSize="14"
            fontWeight="600"
          >
            Scan QR Code
          </text>
        </motion.g>

        {/* Stage 2: Booking Confirmation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: animationCycle === 1 ? 1 : 0,
            y: animationCycle === 1 ? 0 : 20
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Confirmation Card */}
          <motion.rect
            x="100"
            y="120"
            width="200"
            height="160"
            rx="20"
            fill="white"
            stroke="#3B82F6"
            strokeWidth="3"
            initial={{ scale: 0.5 }}
            animate={{ scale: animationCycle === 1 ? 1 : 0.5 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          />

          {/* Checkmark Circle */}
          <motion.circle
            cx="200"
            cy="160"
            r="30"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: animationCycle === 1 ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
          />

          {/* Checkmark */}
          <motion.path
            d="M 185 160 L 195 170 L 215 150"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: animationCycle === 1 ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />

          {/* Confirmation Lines */}
          <motion.rect
            x="130"
            y="210"
            width="140"
            height="8"
            rx="4"
            fill="#DBEAFE"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: animationCycle === 1 ? 1 : 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          />
          <motion.rect
            x="130"
            y="230"
            width="100"
            height="8"
            rx="4"
            fill="#DBEAFE"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: animationCycle === 1 ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />
          <motion.rect
            x="130"
            y="250"
            width="120"
            height="8"
            rx="4"
            fill="#DBEAFE"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: animationCycle === 1 ? 1 : 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          />

          {/* "Confirmed" Text */}
          <text
            x="200"
            y="310"
            textAnchor="middle"
            fill="#10B981"
            fontSize="14"
            fontWeight="600"
          >
            Booking Confirmed
          </text>
        </motion.g>

        {/* Stage 3: Queue Progress */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: animationCycle === 2 ? 1 : 0,
            y: animationCycle === 2 ? 0 : 20
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Queue Progress Card */}
          <motion.rect
            x="100"
            y="100"
            width="200"
            height="200"
            rx="20"
            fill="white"
            stroke="#3B82F6"
            strokeWidth="3"
            initial={{ scale: 0.5 }}
            animate={{ scale: animationCycle === 2 ? 1 : 0.5 }}
            transition={{ duration: 0.6 }}
          />

          {/* Token Number Display */}
          <motion.circle
            cx="200"
            cy="150"
            r="40"
            fill="#EFF6FF"
            stroke="#3B82F6"
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: animationCycle === 2 ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <text
            x="200"
            y="145"
            textAnchor="middle"
            fill="#3B82F6"
            fontSize="12"
            fontWeight="600"
          >
            Token
          </text>
          
          <text
            x="200"
            y="165"
            textAnchor="middle"
            fill="#3B82F6"
            fontSize="24"
            fontWeight="700"
          >
            A42
          </text>

          {/* Progress Bar Background */}
          <rect
            x="130"
            y="220"
            width="140"
            height="12"
            rx="6"
            fill="#E5E7EB"
          />

          {/* Progress Bar Fill */}
          <motion.rect
            x="130"
            y="220"
            width="140"
            height="12"
            rx="6"
            fill="#3B82F6"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: animationCycle === 2 ? [0, 0.7] : 0 
            }}
            transition={{ 
              delay: 0.4, 
              duration: 2,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: 'left' }}
          />

          {/* People Icons in Queue */}
          {[0, 1, 2].map((i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: animationCycle === 2 ? 1 : 0,
                y: animationCycle === 2 ? 0 : 10
              }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              {/* Person Icon */}
              <circle
                cx={140 + i * 40}
                cy="255"
                r="8"
                fill={i === 0 ? "#3B82F6" : "#CBD5E1"}
              />
              <rect
                x={140 + i * 40 - 6}
                y="265"
                width="12"
                height="15"
                rx="3"
                fill={i === 0 ? "#3B82F6" : "#CBD5E1"}
              />
            </motion.g>
          ))}

          {/* "Please Wait" Text */}
          <text
            x="200"
            y="310"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="14"
            fontWeight="600"
          >
            Your turn soon...
          </text>
        </motion.g>

        {/* Floating Particles for ambient effect */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + Math.random() * 200}
            cy={100 + Math.random() * 200}
            r="3"
            fill="#3B82F6"
            opacity="0.2"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Stage Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((stage) => (
          <motion.div
            key={stage}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: animationCycle === stage ? '#3B82F6' : '#CBD5E1',
              scale: animationCycle === stage ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
