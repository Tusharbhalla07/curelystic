import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface Token {
  id: number;
  number: string;
  status: 'waiting' | 'serving' | 'done';
}

export function TokenQueueAnimation() {
  const [tokens, setTokens] = useState<Token[]>([
    { id: 1, number: 'A45', status: 'serving' },
    { id: 2, number: 'A46', status: 'waiting' },
    { id: 3, number: 'A47', status: 'waiting' },
  ]);
  
  const [newToken, setNewToken] = useState<Token | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => {
        const nextPhase = (prev + 1) % 4;
        
        // Phase 0: Show new token appearing
        if (nextPhase === 0) {
          const tokenNumber = String.fromCharCode(65) + (48 + Math.floor(Math.random() * 5));
          setNewToken({
            id: Date.now(),
            number: tokenNumber,
            status: 'waiting',
          });
        }
        
        // Phase 1: Add token to queue
        if (nextPhase === 1) {
          if (newToken) {
            setTokens((prev) => [...prev, newToken]);
            setNewToken(null);
          }
        }
        
        // Phase 2: Move queue forward
        if (nextPhase === 2) {
          setTokens((prev) => {
            const updated = prev.slice(1).map((token, index) => ({
              ...token,
              status: index === 0 ? ('serving' as const) : ('waiting' as const),
            }));
            return updated;
          });
        }
        
        return nextPhase;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [newToken]);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
      <div className="w-full max-w-md">
        {/* Now Serving Display */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-blue-500"
          animate={{
            boxShadow: animationPhase === 2 
              ? ['0 10px 30px rgba(59, 130, 246, 0.3)', '0 20px 50px rgba(59, 130, 246, 0.5)', '0 10px 30px rgba(59, 130, 246, 0.3)']
              : '0 10px 30px rgba(59, 130, 246, 0.3)',
          }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center"
            animate={{
              scale: animationPhase === 2 ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider"
              animate={{
                opacity: animationPhase === 2 ? [1, 0.7, 1] : 1,
              }}
              transition={{ duration: 0.6, repeat: animationPhase === 2 ? 2 : 0 }}
            >
              Now Serving
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tokens[0]?.id || 'empty'}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="text-5xl font-bold text-gray-900"
              >
                {tokens[0]?.number || '--'}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Pulse Ring Effect */}
          {animationPhase === 2 && (
            <>
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 1, repeat: 2 }}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-blue-300"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.15, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2, repeat: 2 }}
              />
            </>
          )}
        </motion.div>

        {/* Queue List */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Waiting Queue
            </span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <AnimatePresence>
            {tokens.slice(1).map((token, index) => (
              <motion.div
                key={token.id}
                layout
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                animate={{ 
                  x: 0, 
                  opacity: 1, 
                  scale: 1,
                  backgroundColor: index === 0 ? '#EFF6FF' : '#FFFFFF',
                }}
                exit={{ x: 100, opacity: 0, scale: 0.8 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                className="bg-white rounded-xl shadow-sm p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
                      animate={{
                        scale: index === 0 && animationPhase === 2 ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-lg font-bold text-blue-600">
                        {token.number}
                      </span>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Token {token.number}
                      </div>
                      <div className="text-sm text-gray-500">
                        {index === 0 ? 'Next in line' : `Position ${index + 1}`}
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{
                      scale: index === 0 && animationPhase === 2 ? [1, 1.2, 1] : 1,
                    }}
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      animate={{
                        opacity: index === 0 ? [1, 0.3, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* New Token Appearing */}
          <AnimatePresence>
            {newToken && (
              <motion.div
                layout
                initial={{ y: 50, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 0, opacity: 0, scale: 0.8 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-4 border-2 border-green-400"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-lg font-bold text-white">
                        {newToken.number}
                      </span>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        New Token Generated
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        Joining queue...
                      </div>
                    </div>
                  </div>

                  {/* Sparkle Effect */}
                  <motion.div
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                        fill="#10B981"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Animation Phase Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((phase) => (
            <motion.div
              key={phase}
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor: animationPhase === phase ? '#3B82F6' : '#CBD5E1',
                scale: animationPhase === phase ? 1.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
