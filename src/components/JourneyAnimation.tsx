import { motion } from 'motion/react';

interface JourneyAnimationProps {
    step: string;
}

export function JourneyAnimation({ step }: JourneyAnimationProps) {
    if (step === '01') {
        return (
            <div className="w-full h-full min-h-[160px] flex items-center justify-center">
                <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Calendar Background */}
                    <rect x="50" y="30" width="100" height="100" rx="12" fill="white" stroke="#3B82F6" strokeWidth="2" />
                    <rect x="50" y="30" width="100" height="25" rx="12" fill="#3B82F6" />

                    {/* Calendar Spirals */}
                    <circle cx="70" cy="30" r="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="130" cy="30" r="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />

                    {/* Grid Dots */}
                    {[...Array(9)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={75 + (i % 3) * 25}
                            cy={75 + Math.floor(i / 3) * 20}
                            r="4"
                            fill={i === 4 ? "#3B82F6" : "#E5E7EB"}
                            initial={i === 4 ? { scale: 1 } : {}}
                            animate={i === 4 ? { scale: [1, 1.4, 1] } : {}}
                            transition={i === 4 ? { duration: 1.5, repeat: Infinity } : {}}
                        />
                    ))}

                    {/* Cursor Pointer */}
                    <motion.path
                        d="M 140 130 L 120 110 L 125 105 L 140 108 L 140 130"
                        fill="#1E40AF"
                        initial={{ x: 20, y: 20, opacity: 0 }}
                        animate={{ x: -10, y: -10, opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                    />
                </svg>
            </div>
        );
    }

    if (step === '02') {
        return (
            <div className="w-full h-full min-h-[160px] flex items-center justify-center">
                <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Token Ticket */}
                    <motion.g
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <path
                            d="M 60 40 L 140 40 L 140 120 L 60 120 Z"
                            fill="white"
                            stroke="#3B82F6"
                            strokeWidth="2"
                        />
                        {/* Ticket Notches */}
                        <circle cx="60" cy="80" r="8" fill="#F9FAFB" stroke="#3B82F6" strokeWidth="2" />
                        <circle cx="140" cy="80" r="8" fill="#F9FAFB" stroke="#3B82F6" strokeWidth="2" />
                        <line x1="70" y1="80" x2="130" y2="80" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />
                    </motion.g>

                    {/* Token Text */}
                    <motion.text
                        x="100"
                        y="70"
                        textAnchor="middle"
                        fill="#3B82F6"
                        fontSize="10"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        TOKEN ID
                    </motion.text>
                    <motion.text
                        x="100"
                        y="110"
                        textAnchor="middle"
                        fill="#1E40AF"
                        fontSize="24"
                        fontWeight="bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    >
                        A-42
                    </motion.text>

                    {/* Particles */}
                    {[...Array(4)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={i < 2 ? 50 : 150}
                            cy={i % 2 === 0 ? 30 : 130}
                            r="3"
                            fill="#3B82F6"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                            transition={{ delay: 1 + i * 0.2, duration: 2, repeat: Infinity }}
                        />
                    ))}
                </svg>
            </div>
        );
    }

    if (step === '03') {
        return (
            <div className="w-full h-full min-h-[160px] flex items-center justify-center">
                <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Lounge Chair Silhouette */}
                    <motion.path
                        d="M 60 120 L 140 120 M 70 120 L 70 80 Q 70 60 90 60 L 130 60 Q 150 60 150 80 L 150 120"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    {/* Coffee Cup / Comfort Symbol */}
                    <motion.g
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <rect x="110" y="85" width="20" height="15" rx="4" fill="#3B82F6" opacity="0.2" />
                        <path d="M 130 90 Q 138 90 138 95 Q 138 100 130 100" stroke="#3B82F6" strokeWidth="2" opacity="0.4" />
                    </motion.g>

                    {/* Pulse Signal (Remote tracking) */}
                    <motion.circle
                        cx="100"
                        cy="40"
                        r="10"
                        fill="#10B981"
                        opacity="0.1"
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.circle
                        cx="100"
                        cy="40"
                        r="4"
                        fill="#10B981"
                    />

                    {/* Progress Indicator */}
                    <rect x="60" y="135" width="80" height="6" rx="3" fill="#E5E7EB" />
                    <motion.rect
                        x="60"
                        y="135"
                        width="60"
                        height="6"
                        rx="3"
                        fill="#10B981"
                        initial={{ width: 0 }}
                        animate={{ width: 60 }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </svg>
            </div>
        );
    }

    return null;
}
