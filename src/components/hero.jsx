import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: "The future isn’t bloated.\nIt’s intentional.\nIt’s personal.\nIt starts with one input.",
    description: "LumiOS is a new kind of personal operating system — minimal, powerful, and driven by your intent.",
  },
  {
    title: "Why LumiOS?",
    description: "Intuitive. Minimal. Personal. Your OS should reflect you — not a collection of ads, settings, or noise.",
  },
  {
    title: "Built with Intention",
    description: "Handcrafted using modern web technologies — fast, responsive, and optimized for focus.",
  },
  {
    title: "Join the Movement",
    description: "Open-source, community-driven. LumiOS is more than a product — it’s a philosophy.",
  },
];

export default function Hero() {
  const [isDark, setIsDark] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => setIsDark(media.matches);
    updateTheme();
    media.addEventListener('change', updateTheme);
    return () => media.removeEventListener('change', updateTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.round(window.scrollY / window.innerHeight);
      setActiveIndex(Math.max(0, Math.min(sections.length - 1, index)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const orbGradient = isDark
    ? 'radial-gradient(circle at center, rgba(148, 87, 255, 0.85), rgba(255, 236, 170, 0.55), transparent)'
    : 'radial-gradient(circle at center, rgba(244, 210, 255, 0.6), rgba(250, 230, 180, 0.4), transparent)';

  return (
    <section className="relative w-full" style={{ height: `${sections.length * 100}vh` }}>
      {/* ORB */}
      <motion.div
        className="fixed top-1/2 left-1/2 w-[950px] h-[950px] rounded-full pointer-events-none z-0"
        style={{
          transform: 'translate(-50%, -50%)',
          background: orbGradient,
          filter: 'blur(160px)',
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: inputFocused ? 0.7 : 0.4,
          scale: inputFocused ? 1.25 : 0.95,
        }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      />

      {/* Scroll-Based Text */}
      <div className="fixed top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-3xl px-6 text-center">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={activeIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${activeIndex === idx ? 'block' : 'hidden'}`}
          >
            <h1 className="text-4xl sm:text-6xl font-bold whitespace-pre-wrap mb-4 leading-tight tracking-tight">
              {section.title}
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              {section.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fixed Command Bar + Button */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 z-10 w-full px-6 text-center">
        <div className="mt-40 w-full max-w-xl mx-auto">
          <input
            type="text"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder="Search LumiOS, run a command, type anything..."
            className={`
              w-full px-6 py-4 rounded-xl border placeholder-neutral-500 shadow-xl
              ${isDark
                ? 'bg-[#1d2021] text-[#ebdbb2] border-[#3c3836]'
                : 'bg-white text-[#3c3836] border-[#d5c4a1]'}
              focus:outline-none focus:ring-2 focus:ring-[#d79921]
            `}
          />
        </div>

        <motion.button
          className={`mt-6 px-6 py-2 rounded-full text-base font-medium shadow-md ${
            isDark
              ? 'bg-[#3c3836] text-[#ebdbb2] hover:bg-[#504945]'
              : 'bg-[#3c3836] text-[#fbf1c7] hover:bg-[#665c54]'
          }`}
          onClick={() => window.open('https://github.com/eytin/lumi-os', '_blank')}
        >
          Join the Movement →
        </motion.button>
      </div>

      {/* Animated SVG Lines */}
      <div className="fixed bottom-0 left-0 w-full h-40 pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full animate-draw stroke-beige"
        >
          <path
            d="M0,160L60,154.7C120,149,240,139,360,160C480,181,600,235,720,245.3C840,256,960,224,1080,202.7C1200,181,1320,171,1380,165.3L1440,160"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
