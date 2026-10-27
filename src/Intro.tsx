
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

type IntroProps = {
  onComplete: () => void;
};

export default function Intro({ onComplete }: IntroProps) {
  const [finishing, setFinishing] = useState(false);

  useEffect(() => {
    const finishTimer = window.setTimeout(() => {
      setFinishing(true);
    }, 3600);

    const closeTimer = window.setTimeout(() => {
      onComplete();
    }, 4400);

    return () => {
      window.clearTimeout(finishTimer);
      window.clearTimeout(closeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      animate={{
        opacity: finishing ? 0 : 1,
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="intro-red-glow" />

      <motion.div
        className="intro-content"
        initial={{
          opacity: 0,
          scale: 1.8,
          filter: 'blur(22px)',
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.p
          className="intro-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          PRESENTING
        </motion.p>

        <motion.h1
          className="intro-name"
          initial={{
            opacity: 0,
            letterSpacing: '0.35em',
          }}
          animate={{
            opacity: 1,
            letterSpacing: '-0.03em',
          }}
          transition={{
            duration: 1.7,
            ease: 'easeOut',
          }}
        >
          LIJIN <span>STEFINA</span>
        </motion.h1>

        <motion.h2
          className="intro-subtitle"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.9,
          }}
        >
          PORTFOLIO
        </motion.h2>
      </motion.div>

      <motion.div
        className="intro-flash"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 0.55, 0],
        }}
        transition={{
          duration: 3.6,
          times: [0, 0.72, 0.82, 1],
        }}
      />
    </motion.div>
  );
}
