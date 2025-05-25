import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const sections = [
  {
    title: 'Why LumiOS?',
    body: 'Intuitive. Minimal. Personal. Your OS should reflect you — not a collection of ads, settings, or noise.',
  },
  {
    title: 'Built with Intention',
    body: 'Handcrafted using modern web technologies — fast, responsive, and optimized for focus.',
  },
  {
    title: 'Join the Movement',
    body: 'Open-source, community-driven. LumiOS is more than a product — it’s a philosophy.',
  },
];

export default function Dynamic() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const index = Math.floor(v * sections.length);
      setActiveIndex(Math.min(sections.length - 1, Math.max(0, index)));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-20 px-6 text-center pointer-events-none">
      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={activeIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute max-w-3xl pointer-events-none"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-snug mb-4">
            {section.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {section.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
