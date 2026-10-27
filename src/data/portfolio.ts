
/**
 * Central portfolio data for Lijin Stefina.
 * Personal details, projects, skills, and portfolio content.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Lijin Stefina',
  displayName: 'Lijin Stefina',
  firstName: 'LIJIN',
  seriesTag: 'LIJIN PORTFOLIO',
  originalLabel: 'A LIJIN ORIGINAL',
  role: 'Aspiring Software Developer',
  tagline: [
    'Software Development',
    'UI/UX Design',
    'Web Development',
    'App Development',
  ],
  intro:
    'I am Lijin Stefina, an aspiring software developer and student at Rajalakshmi Institute of Technology, Chennai. I am passionate about software development, UI/UX design, web development, and app development. I enjoy transforming creative ideas into meaningful digital experiences and continuously exploring new technologies.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'stefinalijin01@gmail.com',
  links: {
    linkedin:
      'https://www.linkedin.com/in/lijin-stefina-2ba5a4429?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/lijinstefina18',
  },
  resumePdf: '',
  portrait: {
    src: '/assets/robots.png',
    srcSet: '/assets/robots.png',
    alt: 'Iron Man mascot',
  },
  interests: [
    'Software Development',
    'UI/UX Design',
    'Web Development',
    'App Development',
  ],
};

export const education = [
  {
    school: 'Amrita Vidyalayam Kanyakumari',
    place: 'Kanyakumari',
    period: '2011 - 2026',
    score: 'Class 10: 84% | Class 12: 92.5%',
  },
  {
    school: 'Rajalakshmi Institute of Technology',
    place: 'Chennai',
    degree: 'CSE',
    period: '2026 - 2030',
    score: '',
  },
];

export const experience = [];

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  figma?: string;
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'lucent',
    figma:
      'https://www.figma.com/design/0dQGSI5AdbkfM5LhEzRXWI/Lucent?node-id=0-1',
    title: 'Lucent',
    year: '2026',
    genre: 'UI/UX Design • EdTech',
    logline:
      'A learning app concept designed in Figma to create an engaging digital learning experience.',
    stack: ['Figma', 'UI/UX Design', 'Prototyping'],
    build: [
      'Designed a learning app interface using Figma.',
      'Created screens and interactive prototypes to explore the user experience.',
    ],
    features: [
      'Learning app interface',
      'Interactive Figma prototype',
      'UI/UX design',
    ],
    metrics: [],
    palette: {
      from: '#120822',
      via: '#3d1a6e',
      to: '#07060c',
      accent: '#b98bff',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const certifications: Certification[] = [];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'Building my coding foundations',
    skills: [
      { name: 'HTML', mono: 'Ht', note: 'Learning' },
      { name: 'CSS', mono: 'Cs', note: 'Learning' },
      { name: 'JavaScript', mono: 'Js', note: 'Learning' },
    ],
  },
  {
    id: 'frontend',
    title: 'Web Development',
    subtitle: 'Exploring websites and interfaces',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re', note: 'Exploring' },
    ],
  },
  {
    id: 'backend',
    title: 'Development Tools',
    subtitle: 'Tools I am learning to use',
    skills: [
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
  {
    id: 'infra',
    title: 'UI/UX Design',
    subtitle: 'Designing digital experiences',
    skills: [
      { name: 'Figma', mono: 'Fg', note: 'Lucent Project' },
      { name: 'Prototyping', mono: 'Pr' },
      { name: 'Interface Design', mono: 'Ui' },
    ],
  },
  {
    id: 'databases',
    title: 'Creative Tools',
    subtitle: 'Exploring app and website creation',
    skills: [
      { name: 'Replit', mono: 'Rp' },
      { name: 'Figma', mono: 'Fg' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Current Focus',
    subtitle: 'What I am developing next',
    skills: [
      { name: 'Software Development', mono: 'Sd' },
      { name: 'Web Development', mono: 'Wd' },
      { name: 'App Development', mono: 'Ad' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Areas I want to explore',
    skills: [
      { name: 'Artificial Intelligence', mono: 'Ai' },
      { name: 'UI/UX Design', mono: 'Ux' },
      { name: 'Full Stack Development', mono: 'Fs' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  HTML: ['Learning web development fundamentals'],
  CSS: ['Learning website styling and layouts'],
  JavaScript: ['Currently learning JavaScript'],
  React: ['Exploring React through portfolio development'],
  'VS Code': ['Using VS Code to edit and customize my portfolio'],
  Git: ['Learning version control with Git'],
  GitHub: ['Exploring repositories and GitHub workflows'],
  Figma: ['Lucent — learning app UI/UX design project'],
  Prototyping: ['Created an interactive Figma prototype for Lucent'],
  'Interface Design': ['Designed screens and layouts for Lucent'],
  Replit: ['Exploring app and website development with Replit'],
  'Software Development': ['Building programming and development skills'],
  'Web Development': ['Customizing a React portfolio website'],
  'App Development': ['Exploring app design and development'],
  'Artificial Intelligence': ['Area of interest'],
  'UI/UX Design': ['Lucent — Figma design project'],
  'Full Stack Development': ['Future learning goal'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2011 – 2026',
    synopsis: 'My school journey at Amrita Vidyalayam, Kanyakumari.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'School Days',
        description:
          'Completed my schooling at Amrita Vidyalayam, Kanyakumari, scoring 84% in Class 10 and 92.5% in Class 12.',
        tags: ['School', 'Learning', 'Kanyakumari'],
        runtime: '2011 – 2026',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineering Journey',
    period: '2026 – 2030',
    synopsis:
      'Beginning my Computer Science and Engineering journey at Rajalakshmi Institute of Technology, Chennai.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'A New Chapter',
        description:
          'Pursuing Computer Science and Engineering at Rajalakshmi Institute of Technology, Chennai.',
        tags: ['CSE', 'Engineering', 'RIT Chennai'],
        runtime: '2026 – 2030',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The Creator',
    period: '2026',
    synopsis:
      'Exploring UI/UX design through my Figma project, Lucent.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Introducing Lucent',
        description:
          'Designed Lucent, a learning app concept with interactive screens and a Figma prototype.',
        tags: ['Lucent', 'Figma', 'UI/UX'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Now Streaming',
    synopsis:
      'Continuing to learn programming, web development, and software development.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Next Chapter',
        description:
          'Building my coding foundations, exploring development tools, and working toward becoming a software developer.',
        tags: ['Programming', 'Web Development', 'Learning'],
        runtime: 'In Progress',
        palette: jade,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Featured Project',
    title: 'Lucent',
    detail: 'Interactive learning app UI/UX prototype',
    palette: violet,
  },
  {
    label: 'My College',
    title: 'RIT Chennai',
    detail: 'Computer Science and Engineering • 2026–2030',
    palette: ocean,
  },
  {
    label: 'Academic Highlight',
    title: '92.5%',
    detail: 'Class 12 examination score',
    palette: amber,
  },
  {
    label: 'Design Tool',
    title: 'Figma',
    detail: 'Interface design and interactive prototyping',
    palette: jade,
  },
  {
    label: 'Career Goal',
    title: 'Software Developer',
    detail: 'Learning programming and development',
    palette: crimson,
  },
  {
    label: 'Current Focus',
    title: 'Web Development',
    detail: 'Learning HTML, CSS and development tools',
    palette: violet,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'A LIJIN ORIGINAL',
    title: 'Meet Lijin Stefina',
    lines: [
      'Aspiring Software Developer',
      'Computer Science and Engineering Student',
      'Rajalakshmi Institute of Technology, Chennai',
    ],
    chips: ['Developer', 'Designer', 'Learner'],
  },
  {
    kicker: 'THE BEGINNING',
    title: 'Where It All Started',
    lines: [
      'From Kanyakumari, Tamil Nadu',
      'Studied at Amrita Vidyalayam',
      'Class 10: 84% | Class 12: 92.5%',
    ],
    chips: ['Kanyakumari', 'Education'],
  },
  {
    kicker: 'THE NEXT CHAPTER',
    title: 'Engineering My Future',
    lines: [
      'Computer Science and Engineering',
      'Rajalakshmi Institute of Technology',
      'Batch of 2026–2030',
    ],
    chips: ['CSE', 'RIT Chennai'],
  },
  {
    kicker: 'FEATURED ORIGINAL',
    title: 'Introducing Lucent',
    lines: [
      'An interactive learning app design',
      'Created using Figma',
      'Exploring UI/UX and prototyping',
    ],
    chips: ['Lucent', 'Figma', 'UI/UX'],
  },
  {
    kicker: 'BEHIND THE SCENES',
    title: 'Learning to Build',
    lines: [
      'Exploring HTML, CSS and JavaScript',
      'Learning Git, GitHub and VS Code',
      'Growing through hands-on projects',
    ],
    chips: ['Coding', 'Web Development'],
  },
  {
    kicker: 'COMING UP NEXT',
    title: 'The Journey Continues',
    lines: [
      'Building my software development skills',
      'Exploring web and app development',
      'Turning ideas into digital experiences',
    ],
    chips: ['Learning', 'Creating', 'Growing'],
  },
];

export type ProfileId =
  | 'sushmita'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Lijin',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Projects and skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'moments',
      'skills',
      'originals',
      'about',
      'journey',
      'picks',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, tools and GitHub first',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'journey',
      'moments',
      'about',
      'picks',
      'story',
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc and design highlights first',
    color: '#ffb547',
    order: [
      'journey',
      'picks',
      'originals',
      'moments',
      'about',
      'skills',
      'story',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  {
    nav: string;
    card: string;
    meta: string;
    palette: Palette;
  }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot • Education & interests',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce(
      (n, s) => n + s.episodes.length,
      0
    )} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Originals',
    card: 'My Projects',
    meta: `${projects.length} Originals • 2026`,
    palette: crimson,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: `${topPicks.length} Personal Highlights`,
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Moments',
    card: 'My Achievements',
    meta: `${achievements.length} Moments • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Education, skills and projects',
    palette: violet,
  },
};
