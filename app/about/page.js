import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLightbulb, FaRocket, FaHandshake, FaGraduationCap } from 'react-icons/fa';
import styles from './page.module.css';

const journeySteps = [
  { year: '2020', title: 'The Vision Started', desc: 'Started as a specialized group of engineers with a passion for robotics and AI education.' },
  { year: '2021', title: 'Independent scaling', desc: 'Officially launched as an autonomous tech-education startup to formalize our corporate and school programs.' },
  { year: '2023', title: 'Nationwide Footprint', desc: 'Expanded our independent operations to bridge the gap between academic learning and advanced industry demands.' },
  { year: '2026', title: 'Market Leadership', desc: 'Operating as a premier independent partner, training thousands of students and professionals across India.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>WHO WE ARE</span>
          <h1>Empowering the Next Generation of Tech Leaders</h1>
          <p>
            AIPNT is a premier EdTech and Enterprise Training company focused on AI,
            Robotics, IoT, and Next-Gen Technologies.
          </p>
        </div>
      </section>

      <main>
        <section className={styles.missionSection}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <FaLightbulb className={styles.missionIcon} />
              <h2>Our Mission</h2>
              <p>
                To provide accessible, high-quality technology education that equips students,
                professionals, and organizations with the skills needed to thrive in an AI-driven world.
              </p>
            </div>
            <div className={styles.missionCard}>
              <FaRocket className={styles.missionIcon} />
              <h2>Our Vision</h2>
              <p>
                To be the leading tech ecosystem builder in India, bridging the gap between
                traditional education and industry demands through practical, hands-on learning.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.storySection}>
          <h2>Our Journey</h2>
          <p className={styles.sectionSub}>From a small lab to a national training partner</p>
          <div className={styles.timeline}>
            {journeySteps.map((step) => (
              <div className={styles.timelineItem} key={step.year}>
                <div className={styles.yearBadge}>{step.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.workedWithSection}>
          <h2>Worked With</h2>
          <p className={styles.sectionSub}>Trusted by leading institutions and enterprises</p>
          <div className={styles.workedWithGrid}>
            <div className={styles.workedWithCard}>
              <FaGraduationCap className={styles.workedWithIcon} />
              <h3>Silicon University</h3>
              <p>Academic Training Client</p>
            </div>
            <div className={styles.workedWithCard}>
              <FaHandshake className={styles.workedWithIcon} />
              <h3>Switchtech Incubation</h3>
              <p>Corporate Innovation Client</p>
            </div>
            <div className={styles.workedWithCard}>
              <FaLightbulb className={styles.workedWithIcon} />
              <h3>State STEM Initiatives</h3>
              <p>Government Tech Deployments</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Join Us in Shaping the Future</h2>
          <p>Whether you're a student, a school, or a corporation, there's a place for you in the AIPNT ecosystem.</p>
          <a
            className={styles.ctaButton}
            href="/contact"
          >
            Get in Touch
          </a>
        </section>
      </main>

      <Footer />

      <a href="https://api.whatsapp.com/send?phone=917788016666" className="phone-button" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </>
  );
}
