import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  // Sizing mapping for flexibility between header, mobile menu, and footer
  const sizeClasses = {
    sm: 'h-10 w-auto',
    md: 'h-12 md:h-14 w-auto',
    lg: 'h-20 w-auto',
  };

  return (
    <motion.div
      className={`relative select-none flex items-center justify-center shrink-0 ${className}`}
      // Idle premium effects: floating floating loop
      animate={{
        y: [-3, 3, -3],
      }}
      transition={{
        y: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Outer Premium Shadow Glow Ring (Idle Effect) */}
      <div className="absolute inset-0 bg-transparent rounded-full pointer-events-none animate-premium-glow" />

      {/* Main Interactive Logo Image Frame */}
      <motion.div
        className="relative overflow-hidden rounded-2xl flex items-center justify-center"
        // Interactive animations (Hover and click/touch)
        whileHover={{ 
          scale: 1.12, 
          rotate: [0, -6, 6, -3, 3, 0],
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }}
        whileTap={{ 
          scale: 0.92, 
          rotate: -2,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 15
          }
        }}
      >
        {/* The Real Burger Films WebP Logo */}
        <img
          src="https://img.burgerfilms.com.br/logo.webp"
          alt="Burger Films"
          referrerPolicy="no-referrer"
          className={`${sizeClasses[size]} object-contain relative z-10 transition-transform`}
        />

        {/* Glossy Diagonal Shimmer Overlays (Idle Premium Effect) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay animate-premium-shimmer" />
        </div>
      </motion.div>
    </motion.div>
  );
}
