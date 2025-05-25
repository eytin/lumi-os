import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [inputFocused, setInputFocused] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => setIsDark(media.matches);
    updateTheme();
    media.addEventListener('change', updateTheme);
    return () => media.removeEventListener('change', updateTheme);
  }, []);

  const orbGradient = isDark
    ? 'radial-gradient(circle at center, rgba(148, 87, 255, 0.85) 0%, rgba(255, 236, 170, 0.55) 35%, transparent 75%)'
    : 'radial-gradient(circle at center, rgba(244, 210, 255, 0.6) 0%, rgba(250, 230, 180, 0.4) 40%, transparent 70%)';

  return (
    <section
      className={`
        relative min-h-screen flex flex-col items-center justify-center px-6 text-center
        overflow-hidden transition-colors duration-700 ease-in-out
        ${isDark ? 'bg-[#282828] text-[#ebdbb2]' : 'bg-[#fbf1c7] text-[#3c3836]'}
      `}
    >
      {/* Light Mode Overlay Blur to reduce yellow saturation */}
      {!isDark && (
        <div className="absolute inset-0 bg-white bg-opacity-100 backdrop-blur-[6px] z-0 pointer-events-none" />
      )}

      {/* ORB Glow — same behavior */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: inputFocused ? (isDark ? 0.6 : 0.7) : (isDark ? 0.3 : 0.4),
          scale: inputFocused ? 1.25 : 0.9,
        }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 18,
        }}
        className="absolute w-[950px] h-[950px] rounded-full z-0 pointer-events-none"
        style={{
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: orbGradient,
          filter: 'blur(160px)',
        }}
      />

      {inputFocused && (
        <motion.div
          animate={{ scale: [1.2, 1.25, 1.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[950px] h-[950px] rounded-full z-0 pointer-events-none"
          style={{
            top: '42%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: orbGradient,
            filter: 'blur(160px)',
            opacity: 0.2,
          }}
        />
      )}

      {/* Hero Text */}
      <div className="relative z-10 max-w-3xl pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-4xl sm:text-6xl font-bold leading-snug tracking-tight drop-shadow-sm"
        >
          The future isn’t bloated.<br />
          It’s intentional.<br />
          It’s personal.<br />
          It starts with one input.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          LumiOS is a new kind of personal operating system — minimal, powerful, and driven by your intent.
        </motion.p>

        {/* Command Bar */}
        <div className="mt-10 w-full max-w-xl mx-auto" role="form" aria-label="Command input">
          <input
            type="text"
            placeholder="Search LumiOS, run a command, type anything..."
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            className={`
              w-full px-6 py-4 rounded-xl transition-all duration-200
              border placeholder-neutral-500
              ${isDark
                ? 'bg-[#1d2021] text-[#ebdbb2] border-[#3c3836] shadow-xl'
                : 'bg-white text-[#3c3836] border-[#d5c4a1] shadow-md'}
              focus:outline-none focus:ring-2 focus:ring-[#d79921]
            `}
          />
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className={`mt-8 px-6 py-2 rounded-full transition-all text-base font-medium shadow-md ${
            isDark
              ? 'bg-[#3c3836] text-[#ebdbb2] hover:bg-[#504945]'
              : 'bg-[#3c3836] text-[#fbf1c7] hover:bg-[#665c54]'
          }`}
          onClick={() => window.open('https://github.com/yourusername/lumios', '_blank')}
        >
          Join the Movement →
        </motion.button>
      </div>

      {/* SVG Lines */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden z-[1] pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full opacity-30"
        >
          <path
            d="M720,245.3C840,256,960,224,1080,202.7C1200,181,1320,171,1380,165.3L1440,160"
            stroke="#928374"
            strokeWidth="1"
            strokeDasharray="300"
            strokeDashoffset="600"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="600"
              to="0"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M720,245.3C600,235,480,181,360,160C240,139,120,149,60,154.7L0,160"
            stroke="#928374"
            strokeWidth="1"
            strokeDasharray="300"
            strokeDashoffset="600"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="600"
              to="0"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Theme-aware Bottom Fade */}
			<div
				className={`
					absolute bottom-0 left-0 w-full h-20 pointer-events-none z-[0]
					bg-gradient-to-b
					${isDark ? 'from-transparent to-[#282828]' : 'from-transparent to-white'}
				`}
			/>
    </section>
  );
}
