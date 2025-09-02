'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Scroll Container Component
const ScrollContainer: React.FC<{ children: React.ReactNode; scrollsNeeded: number }> = ({ children, scrollsNeeded }) => {
  const sections = useRef<HTMLDivElement[]>([]);
  const scrollIndex = useRef(0);
  const scrollCounter = useRef(0);

  const setSectionRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      sections.current[index] = el;
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      scrollCounter.current += 1;

      if (scrollCounter.current < scrollsNeeded) {
        return;
      }

      scrollCounter.current = 0;

      if (event.deltaY > 0) {
        scrollIndex.current = Math.min(scrollIndex.current + 1, sections.current.length - 1);
      } else if (event.deltaY < 0) {
        scrollIndex.current = Math.max(scrollIndex.current - 1, 0);
      }

      if (sections.current[scrollIndex.current]) {
        sections.current[scrollIndex.current]?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollsNeeded]);

  return (
    <motion.div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {React.Children.map(children, (child, index) => (
        <section ref={(el) => setSectionRef(el as HTMLDivElement, index)} key={index} className="w-full min-h-screen snap-start">
          {child}
        </section>
      ))}
    </motion.div>
  );
};

export default ScrollContainer;