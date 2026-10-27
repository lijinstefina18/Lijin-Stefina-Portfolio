
import { useEffect, useRef, useState } from 'react';
import type { ReactNode, PointerEvent as ReactPointerEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

import PortfolioTrailer from './components/PortfolioTrailer';
import ProjectGallery from './components/ProjectGallery';
import './App.css';

type Screen = 'intro' | 'trailer' | 'home';

const LINKEDIN = 'https://www.linkedin.com/in/lijin-stefina-2ba5a4429/';
const GITHUB = 'https://github.com/lijinstefina18';
const EMAIL = 'stefinalijin01@gmail.com';
const ROBO = '/assets/pro%20robo.png';

const episodes = [
  { number: '01', title: 'ABOUT ME', id: 'about', color: 'purple', code: '01' },
  { number: '02', title: 'MY JOURNEY', id: 'journey', color: 'gold', code: '02' },
  { number: '03', title: 'MY PROJECTS', id: 'projects', color: 'red', code: '03' },
  { number: '04', title: 'TOP PICKS', id: 'top-picks', color: 'green', code: '04' },
  { number: '05', title: 'MY SKILLS', id: 'skills', color: 'blue', code: '05' },
  { number: '06', title: 'MY RESUME', id: 'resume', color: 'purple', code: '06' },
  { number: '07', title: 'THE FINALE', id: 'finale', color: 'red', code: '07' },
];

const seasons = [
  {
    number: '01',
    name: 'The Foundation',
    title: 'WHERE IT ALL BEGAN',
    year: 'School & College',
    description:
      'From my school years in Kanyakumari to beginning my Computer Science Engineering journey at RIT Chennai, every chapter has helped me learn and grow.',
    episodes: [
      {
        name: 'THE SCHOOL YEARS',
        text: 'Building my academic foundation, discovering new interests, and developing curiosity during my school years.',
        tag: 'School Education',
      },
      {
        name: 'RIT CHENNAI',
        text: 'Pursuing B.E. Computer Science and Engineering at Rajalakshmi Institute of Technology, Chennai (2026–2030), exploring programming, design, and software development.',
        tag: 'College · B.E. CSE',
      },
    ],
  },
  {
    number: '02',
    name: 'The Engineering Journey',
    title: 'A NEW CHAPTER',
    year: '2026–2030',
    description:
      'Pursuing B.E. Computer Science and Engineering at Rajalakshmi Institute of Technology, Chennai.',
    episodes: [
      {
        name: 'HELLO, ENGINEERING',
        text: 'Starting my Computer Science Engineering journey in 2026.',
        tag: 'B.E. CSE',
      },
      {
        name: 'LEARNING TO BUILD',
        text: 'Exploring programming, web development, and problem-solving.',
        tag: 'In Progress',
      },
    ],
  },
  {
    number: '03',
    name: 'The Creator',
    title: 'IDEAS INTO EXPERIENCES',
    year: 'Projects',
    description:
      'Exploring digital design through Lucent and learning how to build interactive websites.',
    episodes: [
      {
        name: 'INTRODUCING LUCENT',
        text: 'Designing a learning-app concept and interactive prototype in Figma.',
        tag: 'UI/UX · Figma',
      },
      {
        name: 'MY PORTFOLIO',
        text: 'Creating a cinematic portfolio using React, TypeScript, and animation.',
        tag: 'Web Development',
      },
    ],
  },
  {
    number: '04',
    name: "What's Next",
    title: 'THE NEXT ADVENTURE',
    year: 'The Future',
    description:
      'Continuing to learn, create meaningful projects, and work toward a career in software development.',
    episodes: [
      {
        name: 'KEEP BUILDING',
        text: 'Strengthening my skills through practice, experimentation, and new projects.',
        tag: 'Future Goals',
      },
    ],
  },
];

const picks = [
  {
    label: 'FEATURED PROJECT',
    title: 'LUCENT',
    detail: 'Learning App · UI/UX Prototype',
    color: 'purple',
  },
  {
    label: 'MY COLLEGE',
    title: 'RIT CHENNAI',
    detail: 'B.E. CSE · 2026–2030',
    color: 'blue',
  },
  {
    label: 'DESIGN TOOL',
    title: 'FIGMA',
    detail: 'Interface Design & Prototyping',
    color: 'green',
  },
  {
    label: 'MY GOAL',
    title: 'SOFTWARE DEVELOPER',
    detail: 'Learning · Building · Growing',
    color: 'red',
  },
  {
    label: 'MY WEBSITE',
    title: 'PORTFOLIO',
    detail: 'React · TypeScript · Animation',
    color: 'gold',
  },
];

const skillGroups = [
  {
    name: 'PROGRAMMING',
    description: 'Building my coding foundations',
    skills: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'WEB DEVELOPMENT',
    description: 'Creating websites and interfaces',
    skills: ['React', 'HTML', 'CSS'],
  },
  {
    name: 'DEVELOPMENT TOOLS',
    description: 'Tools I use while learning',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    name: 'UI/UX DESIGN',
    description: 'Designing digital experiences',
    skills: ['Figma', 'Prototyping', 'UI Design'],
  },
  {
    name: 'CREATIVE TOOLS',
    description: 'Exploring creative workflows',
    skills: ['Figma', 'React'],
  },
  {
    name: 'CURRENT FOCUS',
    description: 'What I am learning next',
    skills: ['Web Development', 'Software Development', 'App Development'],
  },
  {
    name: 'INTERESTS',
    description: 'Fields I want to explore',
    skills: ['Artificial Intelligence', 'UI/UX', 'Full Stack'],
  },
];

function goToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow line-label">{eyebrow}</p>
        <h2 className="display-title">{title}</h2>
      </div>
      {description && (
        <p className="heading-description">{description}</p>
      )}
    </div>
  );
}

function ResumeSection() {
  const saveResume = () => window.print();

  return (
    <section id="resume" className="series-section resume-section">
      <Reveal>
        <SectionTitle
          eyebrow="THE SCREENPLAY"
          title="THE FULL STORY"
          description="My journey, projects, skills, and goals — all in one place."
        />
      </Reveal>

      <div className="resume-layout">
        <Reveal className="resume-paper">
          <div className="resume-header">
            <div>
              <span className="small-label">STARRING</span>
              <h3>LIJIN STEFINA</h3>
              <p>Aspiring Software Developer</p>
            </div>

            <div className="resume-contact">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="resume-columns">
            <div>
              <h4>PROFILE</h4>
              <p>
                Computer Science Engineering student interested in
                software development, web technologies, and UI/UX
                design. I enjoy learning through hands-on projects.
              </p>

              <h4>EDUCATION</h4>
              <strong>
                Rajalakshmi Institute of Technology, Chennai
              </strong>
              <p>B.E. Computer Science and Engineering</p>
              <p>2026–2030 · Currently Pursuing</p>

              <h4>PROJECTS</h4>
              <strong>Lucent — Learning App Concept</strong>
              <p>
                Designed a learning-app interface and interactive
                prototype using Figma.
              </p>

              <strong>Lijin Stefina Portfolio</strong>
              <p>
                Personal portfolio built using React, TypeScript,
                CSS, and Framer Motion.
              </p>
            </div>

            <div>
              <h4>SKILLS</h4>
              <p><strong>Web:</strong> HTML, CSS, JavaScript, React</p>
              <p><strong>Design:</strong> Figma, UI/UX, Prototyping</p>
              <p><strong>Tools:</strong> Git, GitHub, VS Code</p>

              <h4>INTERESTS</h4>
              <p>
                Software Development, Web Development,
                App Development, Artificial Intelligence
              </p>

              <h4>CAREER OBJECTIVE</h4>
              <p>
                To become a skilled software developer by
                continuously learning, solving problems,
                and creating useful digital experiences.
              </p>

              <h4>LINKS</h4>
              <p>{GITHUB}</p>
              <p>{LINKEDIN}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="resume-aside">
          <p className="editorial-quote">
            Every episode, on one page.
          </p>
          <p>
            A quick look at my education, creative projects,
            technical interests, and future goals.
          </p>

          <button
            type="button"
            className="primary-button full-width"
            onClick={saveResume}
          >
            <Download size={18} />
            DOWNLOAD RESUME
          </button>

          <p className="resume-hint">
            Select “Save as PDF” in the print window.
          </p>

          <div className="resume-stats">
            <div>
              <strong>2026</strong>
              <span>CSE STARTED</span>
            </div>
            <div>
              <strong>01</strong>
              <span>FEATURED PROJECT</span>
            </div>
            <div>
              <strong>2030</strong>
              <span>EXPECTED GRADUATION</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [seasonIndex, setSeasonIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState('');

  const episodeScrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });

  const suppressCardClickRef = useRef(false);

  useEffect(() => {
    if (screen === 'home') {
      window.scrollTo(0, 0);
    }
  }, [screen]);

  const scrollEpisodes = (direction: number) => {
    episodeScrollRef.current?.scrollBy({
      left: direction * 290,
      behavior: 'smooth',
    });
  };

  const startEpisodeDrag = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType !== 'mouse') return;

    const viewport = episodeScrollRef.current;
    if (!viewport) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: viewport.scrollLeft,
      moved: false,
    };

    suppressCardClickRef.current = false;
  };

  const moveEpisodeDrag = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    const drag = dragRef.current;
    const viewport = episodeScrollRef.current;

    if (!drag.active || !viewport) return;

    const distance = event.clientX - drag.startX;

    if (Math.abs(distance) > 5) {
      drag.moved = true;
      suppressCardClickRef.current = true;

      if (!viewport.hasPointerCapture(event.pointerId)) {
        viewport.setPointerCapture(event.pointerId);
      }
    }

    if (drag.moved) {
      viewport.scrollLeft = drag.startScroll - distance;
    }
  };

  const endEpisodeDrag = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    const viewport = episodeScrollRef.current;

    if (
      viewport &&
      viewport.hasPointerCapture(event.pointerId)
    ) {
      viewport.releasePointerCapture(event.pointerId);
    }

    dragRef.current.active = false;
  };

  const openEpisode = (id: string) => {
    if (suppressCardClickRef.current) {
      suppressCardClickRef.current = false;
      return;
    }

    goToSection(id);
  };

  const currentSeason = seasons[seasonIndex];
  const currentSkills = skillGroups[skillIndex];

  return (
    <AnimatePresence mode="wait">
      {screen === 'intro' && (
        <motion.main
          key="intro"
          className="opening"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5 }}
        >
          <div className="opening-glow" />

          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A LIJIN STEFINA ORIGINAL
          </motion.p>

          <motion.div
            className="opening-title"
            initial={{
              opacity: 0,
              scale: 1.07,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            transition={{ duration: 0.85 }}
          >
            <h1>LIJIN STEFINA</h1>
            <span>PORTFOLIO</span>
          </motion.div>

          <motion.img
            className="opening-robo"
            src={ROBO}
            alt="Pro Robo mascot"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          />

          <motion.div
            className="opening-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              type="button"
              className="primary-button"
              onClick={() => setScreen('trailer')}
            >
              <Play size={16} fill="currentColor" />
              PLAY
            </button>

            <button
              type="button"
              className="ghost-button"
              onClick={() => setScreen('home')}
            >
              SKIP INTRO <ArrowRight size={16} />
            </button>
          </motion.div>
        </motion.main>
      )}

      {screen === 'trailer' && (
        <PortfolioTrailer
          key="trailer"
          onClose={() => setScreen('home')}
        />
      )}

      {screen === 'home' && (
        <motion.main
          key="home"
          className="site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <header className="site-header">
            <button
              type="button"
              className="brand"
              onClick={() => goToSection('top')}
            >
              LS<span>.</span>
            </button>

            <nav aria-label="Main navigation">
              <a href="#top">Home</a>
              <a href="#about">About</a>
              <a href="#journey">Journey</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#resume">Resume</a>
            </nav>

            <a className="nav-contact" href="#finale">
              LET'S CONNECT ↗
            </a>
          </header>

          {/* HOME HERO */}
          <section id="top" className="series-hero">
            <div className="hero-content">
              <p className="series-mark">
                <b>S</b> SERIES
              </p>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                LIJIN
              </motion.h1>

              <p className="hero-subtitle">
                STEFINA PORTFOLIO
              </p>

              <div className="hero-meta">
                <span>2026–2030</span>
                <i />
                <span>B.E. CSE</span>
                <i />
                <span>RIT CHENNAI</span>
              </div>

              <p className="hero-kicker">
                SOFTWARE DEVELOPMENT · UI/UX DESIGN · WEB DEVELOPMENT
              </p>

              <p className="hero-summary">
                I'm Lijin Stefina, a Computer Science Engineering
                student at Rajalakshmi Institute of Technology,
                Chennai. I enjoy transforming creative ideas into
                meaningful digital experiences and exploring new
                technologies.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setScreen('trailer')}
                >
                  <Play size={16} fill="currentColor" />
                  PLAY INTRO
                </button>

                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => goToSection('projects')}
                >
                  MY WORK <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit" />
              <div className="hero-light" />

              <motion.img
                src={ROBO}
                alt="Pro Robo"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="floating-card floating-one"
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <strong>Lucent</strong>
                <span>UI/UX DESIGN PROJECT</span>
              </motion.div>

              <motion.div
                className="floating-card floating-two"
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
              >
                <strong>B.E. CSE</strong>
                <span>RIT CHENNAI</span>
              </motion.div>

              <motion.div
                className="floating-card floating-three"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                }}
              >
                <strong>Figma · React</strong>
                <span>DESIGN & DEVELOPMENT</span>
              </motion.div>
            </div>
          </section>

          {/* CONTINUE EXPLORING */}
          <section className="explore-section">
            <div className="explore-heading">
              <div>
                <h2>Continue Exploring</h2>
                <p>Drag, swipe, or use the arrows to discover each episode.</p>
              </div>

              <div className="explore-controls">
                <button
                  type="button"
                  aria-label="Previous episodes"
                  onClick={() => scrollEpisodes(-1)}
                >
                  <ChevronLeft size={19} />
                </button>

                <button
                  type="button"
                  aria-label="Next episodes"
                  onClick={() => scrollEpisodes(1)}
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>

            <div
              className="episode-viewport"
              ref={episodeScrollRef}
              onPointerDown={startEpisodeDrag}
              onPointerMove={moveEpisodeDrag}
              onPointerUp={endEpisodeDrag}
              onPointerCancel={endEpisodeDrag}
              onDragStart={(event) => event.preventDefault()}
            >
              <div className="episode-track">
                {episodes.map((episode) => (
                  <button
                    key={episode.id}
                    type="button"
                    className={`episode-card gradient-${episode.color}`}
                    onClick={() => openEpisode(episode.id)}
                  >
                    <span className="episode-watermark">
                      {episode.code}
                    </span>

                    <span className="episode-play">
                      <Play size={14} fill="currentColor" />
                    </span>

                    <span className="episode-info">
                      <small>EPISODE {episode.number}</small>
                      <strong>{episode.title}</strong>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ABOUT ME */}
          <section id="about" className="series-section">
            <Reveal>
              <SectionTitle
                eyebrow="THE PILOT"
                title="ABOUT ME"
              />
            </Reveal>

            <div className="about-layout">
              <Reveal className="about-poster">
                <div className="poster-light" />
                <img src={ROBO} alt="Pro Robo mascot" />
                <span>STARRING · LIJIN STEFINA</span>
              </Reveal>

              <Reveal className="about-story" delay={0.1}>
                <blockquote>
                  “I'm Lijin Stefina, an aspiring software developer
                  who believes every idea is a chance to learn,
                  create, and grow.”
                </blockquote>

                <p className="signature">— Lijin Stefina</p>

                <div className="fact-grid">
                  <div>
                    <small>NOW</small>
                    <strong>B.E. Computer Science and Engineering</strong>
                    <span>
                      Rajalakshmi Institute of Technology, Chennai
                    </span>
                  </div>

                  <div>
                    <small>FOCUS</small>
                    <strong>Software Development</strong>
                    <span>Web · App · UI/UX</span>
                  </div>

                  <div>
                    <small>FEATURED PROJECT</small>
                    <strong>Lucent</strong>
                    <span>Learning App · Figma</span>
                  </div>

                  <div>
                    <small>MY MINDSET</small>
                    <strong>Keep Learning</strong>
                    <span>
                      Curiosity · Creativity · Consistency
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* MY JOURNEY */}
          <section id="journey" className="series-section">
            <Reveal>
              <SectionTitle
                eyebrow="4 SEASONS"
                title="MY JOURNEY"
                description="Every stage of my journey, told as a season. Choose one to explore its episodes."
              />
            </Reveal>

            <div
              className="season-tabs"
              role="tablist"
              aria-label="Journey seasons"
            >
              {seasons.map((season, index) => (
                <button
                  key={season.number}
                  type="button"
                  role="tab"
                  aria-selected={seasonIndex === index}
                  className={
                    seasonIndex === index
                      ? 'season-tab active'
                      : 'season-tab'
                  }
                  onClick={() => setSeasonIndex(index)}
                >
                  <small>SEASON {season.number}</small>
                  <span>{season.name}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSeason.number}
                className="season-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="season-intro">
                  <span>S{currentSeason.number}</span>
                  <h3>{currentSeason.title}</h3>
                  <small>
                    {currentSeason.year} ·{' '}
                    {currentSeason.episodes.length} Episodes
                  </small>
                </div>

                <p>{currentSeason.description}</p>

                <div className="journey-episodes">
                  {currentSeason.episodes.map((episode, index) => (
                    <div
                      className="journey-card"
                      key={episode.name}
                    >
                      <div
                        className={`journey-art gradient-${
                          ['purple', 'blue', 'red'][index % 3]
                        }`}
                      >
                        <small>
                          S{currentSeason.number} · EPISODE 0{index + 1}
                        </small>

                        <strong>{episode.name}</strong>
                        <span>E0{index + 1}</span>
                      </div>

                      <div className="journey-card-body">
                        <small>{episode.tag}</small>
                        <p>{episode.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          {/* PROJECTS — EXISTING LUCENT GALLERY */}
          <div id="projects" className="projects-wrapper">
            <ProjectGallery />
          </div>

          {/* TOP PICKS */}
          <section
            id="top-picks"
            className="series-section picks-section"
          >
            <Reveal>
              <SectionTitle
                eyebrow="THE HIGHLIGHTS"
                title="TOP PICKS"
                description="A few moments and milestones that define my story."
              />
            </Reveal>

            <div className="picks-row">
              {picks.map((pick, index) => (
                <Reveal
                  key={pick.title}
                  className="pick-unit"
                  delay={index * 0.06}
                >
                  <span className="pick-number">
                    {index + 1}
                  </span>

                  <div
                    className={`pick-card gradient-${pick.color}`}
                  >
                    <small>{pick.label}</small>

                    <div>
                      <strong>{pick.title}</strong>
                      <p>{pick.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section
            id="skills"
            className="series-section skills-section"
          >
            <Reveal>
              <SectionTitle
                eyebrow="GENRES"
                title="MY SKILL UNIVERSE"
                description="Choose a category, then hover or tap a skill to explore it."
              />
            </Reveal>

            <div className="skill-universe">
              <div className="skill-categories">
                {skillGroups.map((group, index) => (
                  <button
                    key={group.name}
                    type="button"
                    className={
                      skillIndex === index
                        ? 'skill-category active'
                        : 'skill-category'
                    }
                    onClick={() => {
                      setSkillIndex(index);
                      setSelectedSkill('');
                    }}
                  >
                    <strong>{group.name}</strong>
                    <span>
                      {group.skills.length} skills ·{' '}
                      {group.description}
                    </span>
                  </button>
                ))}
              </div>

              <div className="skill-panel">
                <div className="skill-panel-heading">
                  <strong>{currentSkills.name}</strong>
                  <span>— {currentSkills.description}</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSkills.name}
                    className="skill-card-grid"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {currentSkills.skills.map((skill, index) => (
                      <motion.button
                        key={skill}
                        type="button"
                        className={
                          selectedSkill === skill
                            ? 'skill-box selected'
                            : 'skill-box'
                        }
                        initial={{
                          opacity: 0,
                          y: 25,
                          scale: 0.95,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          delay: index * 0.09,
                          duration: 0.4,
                        }}
                        whileHover={{ y: -7, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedSkill(skill)}
                      >
                        <span className="skill-icon">
                          {skill.substring(0, 2).toUpperCase()}
                        </span>

                        <strong>{skill}</strong>
                        <small>EXPLORING</small>
                        <span className="skill-shine" />
                      </motion.button>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <div className="skill-caption">
                  <Sparkles size={15} />
                  {selectedSkill
                    ? `${selectedSkill} is part of my learning journey.`
                    : 'Select any skill to highlight it.'}
                </div>
              </div>
            </div>
          </section>

          {/* RESUME */}
          <ResumeSection />

          {/* FINALE */}
          <section id="finale" className="finale">
            <div className="finale-glow" />

            <Reveal>
              <p className="eyebrow">THE NEXT EPISODE</p>

              <h2>
                TO BE
                <br />
                CONTINUED...
              </h2>

              <h3>LIJIN STEFINA</h3>

              <p className="finale-role">
                ASPIRING SOFTWARE DEVELOPER
              </p>

              <p className="finale-message">
                Thank you for visiting. Every chapter is a new
                beginning, and my journey is just getting started.
                The best is yet to come.
              </p>

              <div className="finale-links">
                <a
                  className="primary-button"
                  href={`mailto:${EMAIL}`}
                >
                  <Mail size={17} />
                  LET'S BUILD
                </a>

                <a
                  className="ghost-button"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-letter">in</span>
                  LINKEDIN
                </a>

                <a
                  className="ghost-button"
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-letter">GH</span>
                  GITHUB
                </a>
              </div>

              <div className="finale-replay">
                <button
                  type="button"
                  onClick={() => goToSection('top')}
                >
                  <RotateCcw size={15} />
                  WATCH AGAIN
                </button>

                <button
                  type="button"
                  onClick={() => setScreen('trailer')}
                >
                  <Play size={15} />
                  REPLAY OPENING
                </button>
              </div>
            </Reveal>
          </section>

          <footer className="site-footer">
            <span>
              © {new Date().getFullYear()} LIJIN STEFINA
            </span>

            <span>
              MADE WITH CURIOSITY & CREATIVITY
            </span>

            <button
              type="button"
              onClick={() => goToSection('top')}
            >
              BACK TO TOP
              <ArrowDown size={14} className="up-arrow" />
            </button>
          </footer>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
