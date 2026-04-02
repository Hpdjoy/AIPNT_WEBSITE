"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FaRocket,
  FaProjectDiagram,
  FaUserGraduate,
  FaBriefcase,
  FaCheckCircle
} from 'react-icons/fa';
import styles from './page.module.css';

const tracks = [
  {
    image: '/assets/hardware_iot.png',
    title: 'Hardware & IoT Engineering',
    desc: 'Master MCU programming, sensor interfacing, and end-to-end hardware prototyping for industrial and consumer IoT products.',
  },
  {
    image: '/assets/medical_devices.png',
    title: 'Medical Devices & HealthTech',
    desc: 'Work on critical diagnostic hardware, signal processing software, and strictly regulated biotech prototyping.',
  },
  {
    image: '/assets/software_dev.png',
    title: 'Full-Stack Software Development',
    desc: 'Build and deploy scalable enterprise web applications, REST architectures, and cloud-hosted databases using modern stacks.',
  },
  {
    image: '/assets/ai_ml.png',
    title: 'Artificial Intelligence & ML',
    desc: 'Train predictive models, build Generative AI chatbots, and develop Computer Vision pipelines for real-world analytical problems.',
  },
];

const timeline = [
  { step: '01', title: 'Apply & Screen', desc: 'Submit your application with academic details and areas of interest.' },
  { step: '02', title: 'Onboard & Orient', desc: 'Meet your mentor, join your project cohort and get set up with tools.' },
  { step: '03', title: 'Build & Ship', desc: '6–8 weeks of hands-on project work with weekly demos and feedback.' },
  { step: '04', title: 'Demo Day & Certify', desc: 'Present your project to a panel, receive certification and career support.' },
];

const audience = [
  { icon: <FaUserGraduate />, title: 'College Students', desc: 'B.Tech, BCA, MCA and M.Tech students from any year looking for practical experience.' },
  { icon: <FaBriefcase />, title: 'Fresh Graduates', desc: 'Recent graduates seeking to bridge the gap between academic knowledge and industry skills.' },
  { icon: <FaRocket />, title: 'Career Changers', desc: 'Professionals looking to transition into AI, data science or product development roles.' },
];

export default function SummerInternshipPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <img src="/assets/summer-internship-hero.png" alt="" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>SUMMER 2026 — APPLICATIONS OPEN</span>
          <h1>Summer Internship Programs</h1>
          <p>
            Mentor-led internships for college students with real projects
            in AI, robotics, IoT and product development.
          </p>
          <a className={styles.ctaButton} href="#tracks">
            View Program Tracks
          </a>
        </div>
      </section>

      <main>
        <section className={styles.tracksSection} id="tracks">
          <h2>Program Tracks</h2>
          <p className={styles.sectionSub}>Choose your path and build something real</p>
          <div className={styles.tracksGrid}>
            {tracks.map((track) => (
              <article className={styles.trackCard} key={track.title}>
                <img src={track.image} alt={track.title} className={styles.trackImage} />
                <div className={styles.trackBody}>
                  <h3>{track.title}</h3>
                  <p>{track.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.pcbSection}>
          <h2>Featured Bootcamp: PCB Design</h2>
          <p className={styles.sectionSub}>A complete hardware engineering journey from schematic to Gerber.</p>
          <div className={styles.pamphletContainer}>
            <img src="/info-PNT/PCB Design Bootcamp from schematic to Gerber.jpeg" alt="PCB Design Bootcamp" loading="lazy" />
          </div>
        </section>

        <section className={styles.timelineSection}>
          <h2>How It Works</h2>
          <p className={styles.sectionSub}>From application to certification in 4 simple steps</p>
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <div className={styles.timelineItem} key={item.step}>
                <div className={styles.timelineStep}>{item.step}</div>
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.audienceSection}>
          <h2>Who Is This For?</h2>
          <div className={styles.audienceGrid}>
            {audience.map((item) => (
              <div className={styles.audienceCard} key={item.title}>
                <div className={styles.audienceIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.highlightsSection}>
          <h2>Program Highlights</h2>
          <ul className={styles.highlightsList}>
            <li><FaCheckCircle /> Live project experience with real deliverables</li>
            <li><FaCheckCircle /> Industry mentor assigned to every intern</li>
            <li><FaCheckCircle /> Completion certificate and letter of recommendation</li>
            <li><FaCheckCircle /> Demo day presentation to hiring partners</li>
            <li><FaCheckCircle /> Resume and LinkedIn profile optimization</li>
            <li><FaCheckCircle /> Access to alumni network and job referrals</li>
          </ul>
        </section>

        <section className={styles.showcaseSection}>
          <img src="/assets/internship-demo-day.png" alt="Interns presenting at Demo Day" className={styles.showcaseImage} />
          <p className={styles.showcaseCaption}>Interns presenting their AI and robotics projects at Demo Day</p>
        </section>

        <section className={styles.ctaSection}>
          <h2>Apply for Summer 2026</h2>
          <p>Limited seats per cohort. Secure your spot and kickstart your career in tech.</p>
          <a
            className={styles.ctaButton}
            href="https://api.whatsapp.com/send?phone=917788016666"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now on WhatsApp
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
