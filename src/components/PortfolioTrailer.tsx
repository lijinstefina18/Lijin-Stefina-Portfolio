import './PortfolioTrailer.css';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  X,
} from 'lucide-react';

type Props = {
  onClose: () => void;
};

const slides = [
  {
    chapter: 'CHAPTER 01 · THE BEGINNING',
    title: 'HELLO, WORLD.',
    text: 'Every great journey begins with a single step.',
    tags: ['CURIOSITY', 'CREATIVITY', 'AMBITION'],
  },
  {
    chapter: 'CHAPTER 02 · MY JOURNEY',
    title: 'THE LEARNING ERA.',
    text: 'B.E. Computer Science and Engineering · RIT Chennai · 2026–2030.',
    tags: ['ENGINEERING', 'EXPLORATION', 'GROWTH'],
  },
  {
    chapter: 'CHAPTER 03 · MY TOOLKIT',
    title: 'BUILD. DESIGN. LEARN.',
    text: 'Discovering web development, software engineering, and UI/UX design.',
    tags: ['REACT', 'FIGMA', 'JAVASCRIPT'],
  },
  {
    chapter: 'CHAPTER 04 · FEATURED ORIGINAL',
    title: 'MEET LUCENT.',
    text: 'A learning-app concept designed to make digital learning more engaging.',
    tags: ['UI/UX', 'PROTOTYPING', 'FIGMA'],
  },
  {
    chapter: 'CHAPTER 05 · THE NEXT EPISODE',
    title: 'JUST GETTING STARTED.',
    text: 'Learning today. Building tomorrow. The best is yet to come.',
    tags: ['KEEP LEARNING', 'KEEP BUILDING'],
  },
];

const DURATION = 4300;

export default function PortfolioTrailer({ onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setProgress((current) => {
        const next = current + (100 * 50) / DURATION;
        if (next >= 100) {
          window.clearInterval(timer);
          if (index === slides.length - 1) {
            onClose();
          } else {
            setIndex((previous) => previous + 1);
          }
          return 0;
        }
        return next;
      });
    }, 50);

    return () => window.clearInterval(timer);
  }, [index, paused, onClose]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const changeSlide = (next: number) => {
    if (next < 0) return;
    if (next >= slides.length) {
      onClose();
      return;
    }
    setIndex(next);
    setProgress(0);
  };

  const slide = slides[index];

  return (
    <motion.main
      className="trailer-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.6 }}
    >
      <div className="trailer-ambient" />
      <div className="trailer-top">
        <span>A LIJIN STEFINA ORIGINAL</span>
        <button onClick={onClose} aria-label="Close trailer">
          <X size={20} />
        </button>
      </div>

      <div className="trailer-progress">
        {slides.map((item, slideIndex) => (
          <button
            key={item.chapter}
            onClick={() => changeSlide(slideIndex)}
            aria-label={`Go to chapter ${slideIndex + 1}`}
          >
            <span
              style={{
                width:
                  slideIndex < index
                    ? '100%'
                    : slideIndex === index
                      ? `${progress}%`
                      : '0%',
              }}
            />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="trailer-content"
          initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -35, filter: 'blur(8px)' }}
          transition={{ duration: 0.65 }}
        >
          <p className="trailer-chapter">{slide.chapter}</p>
          <h1>{slide.title}</h1>
          <p className="trailer-description">{slide.text}</p>
          <div className="trailer-tags">
            {slide.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <img
            src="/assets/pro%20robo.png"
            alt="Pro Robo"
            className="trailer-character"
          />
        </motion.div>
      </AnimatePresence>

      <div className="trailer-bottom">
        <span>0{index + 1} / 0{slides.length}</span>
        <div className="trailer-buttons">
          <button
            aria-label="Previous chapter"
            onClick={() => changeSlide(index - 1)}
            disabled={index === 0}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label={paused ? 'Resume trailer' : 'Pause trailer'}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? <Play size={19} /> : <Pause size={19} />}
          </button>
          <button
            aria-label="Next chapter"
            onClick={() => changeSlide(index + 1)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <button className="trailer-skip" onClick={onClose}>
          SKIP INTRO ↗
        </button>
      </div>
    </motion.main>
  );
}

