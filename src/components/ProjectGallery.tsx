
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import './ProjectGallery.css';

const lucentUrl =
  'https://www.figma.com/design/0dQGSI5AdbkfM5LhEzRXWI/Lucent?node-id=0-1';

export default function ProjectGallery() {
  return (
    <section className="project-gallery">
      <div className="project-heading">
        <div>
          <p className="project-eyebrow">FEATURED ORIGINAL</p>
          <h2>MY PROJECTS</h2>
        </div>
        <p>Ideas transformed into digital experiences.</p>
      </div>

      <motion.a
        className="lucent-project"
        href={lucentUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        whileHover={{ y: -8 }}
      >
        <div className="lucent-poster">
          <div className="lucent-orbit orbit-one" />
          <div className="lucent-orbit orbit-two" />
          <div className="lucent-poster-content">
            <span>A LIJIN STEFINA DESIGN</span>
            <strong>LUCENT</strong>
            <p>LEARN · EXPLORE · GROW</p>
          </div>
          <div className="lucent-play">
            <Play size={24} fill="currentColor" />
          </div>
        </div>

        <div className="lucent-details">
          <div>
            <p className="project-eyebrow">UI/UX DESIGN · FIGMA</p>
            <h3>LUCENT</h3>
            <p>
              A learning-app concept exploring intuitive screens,
              thoughtful interactions, and engaging digital education.
            </p>
            <div className="lucent-tags">
              <span>Figma</span>
              <span>UI/UX</span>
              <span>Prototyping</span>
            </div>
          </div>
          <span className="lucent-open">
            VIEW PROJECT <ArrowUpRight size={19} />
          </span>
        </div>
      </motion.a>
    </section>
  );
}
