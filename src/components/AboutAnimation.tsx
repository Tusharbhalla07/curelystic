import { motion } from 'motion/react';

export function AboutAnimation() {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-blue-50/50 rounded-2xl overflow-hidden border border-blue-100">
            <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-sm"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Decorative Background Elements */}
                <motion.circle
                    cx="300"
                    cy="100"
                    r="60"
                    fill="#DBEAFE"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.circle
                    cx="80"
                    cy="320"
                    r="40"
                    fill="#EFF6FF"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* The Connection - Central Hub */}
                <motion.rect
                    x="150"
                    y="150"
                    width="100"
                    height="100"
                    rx="20"
                    fill="white"
                    stroke="#3B82F6"
                    strokeWidth="4"
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Pulse effect on the hub */}
                <motion.rect
                    x="150"
                    y="150"
                    width="100"
                    height="100"
                    rx="20"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Patient Side (Left) */}
                <motion.g
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <circle cx="80" cy="200" r="30" fill="#3B82F6" opacity="0.1" />
                    <path
                        d="M 65 200 L 95 200 M 80 185 L 80 215"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <text x="80" y="250" textAnchor="middle" fill="#1E40AF" fontSize="12" fontWeight="600">Patient</text>
                </motion.g>

                {/* Provider Side (Right) */}
                <motion.g
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <circle cx="320" cy="200" r="30" fill="#10B981" opacity="0.1" />
                    <path
                        d="M 305 190 L 335 190 M 305 200 L 335 200 M 305 210 L 325 210"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <text x="320" y="250" textAnchor="middle" fill="#065F46" fontSize="12" fontWeight="600">Hospital</text>
                </motion.g>

                {/* Data Flow Lines */}
                <motion.path
                    d="M 110 200 Q 150 200 150 200"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1, repeat: Infinity }}
                />
                <motion.path
                    d="M 250 200 Q 290 200 290 200"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.5, duration: 1, repeat: Infinity }}
                />

                {/* Floating Icons */}
                <motion.g
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <circle cx="200" cy="180" r="15" fill="#3B82F6" />
                    <path d="M 195 180 L 205 180 M 200 175 L 200 185" stroke="white" strokeWidth="2" />
                </motion.g>

                <motion.g
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <rect x="185" y="210" width="30" height="20" rx="4" fill="#10B981" />
                    <rect x="190" y="215" width="20" height="2" fill="white" />
                    <rect x="190" y="222" width="12" height="2" fill="white" />
                </motion.g>

            </svg>
        </div>
    );
}
