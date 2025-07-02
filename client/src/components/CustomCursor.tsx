import { useCustomCursor } from '../hooks/useCustomCursor';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const { position, isHovered } = useCustomCursor();

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: position.x - 8,
          y: position.y - 8,
          willChange: 'transform',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.9 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
      />
      
      {/* Trailing glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-blue-300 rounded-full pointer-events-none z-40 opacity-20 blur-sm"
        style={{
          x: position.x - 16,
          y: position.y - 16,
          willChange: 'transform',
        }}
        animate={{
          scale: isHovered ? 2 : 1.2,
          opacity: isHovered ? 0.3 : 0.15,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          mass: 0.8,
        }}
      />
    </>
  );
};