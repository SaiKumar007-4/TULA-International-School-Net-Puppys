import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export function CustomCursor() {
  const { mousePosition, isHovered, isClicking, isVisible, isTouchDevice } = useMousePosition();

  // Smooth spring physics for fluid movement at 60 FPS
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  const dotConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(mousePosition.x, dotConfig);
  const dotY = useSpring(mousePosition.y, dotConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
    dotX.set(mousePosition.x);
    dotY.set(mousePosition.y);
  }, [mousePosition, cursorX, cursorY, dotX, dotY]);

  // If mobile or touch device, do not render custom cursor
  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer interactive ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-amber-500/60 dark:border-amber-400/80 bg-amber-500/10 dark:bg-amber-400/15 backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 56 : isClicking ? 28 : 36,
          height: isHovered ? 56 : isClicking ? 28 : 36,
          scale: isClicking ? 0.9 : 1,
          borderColor: isHovered ? 'rgba(217, 119, 6, 0.9)' : 'rgba(217, 119, 6, 0.4)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-amber-600 dark:bg-amber-400"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 10 : isClicking ? 6 : 8,
          height: isHovered ? 10 : isClicking ? 6 : 8,
          opacity: isHovered ? 0.9 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
