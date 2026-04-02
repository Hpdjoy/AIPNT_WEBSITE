"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCheckCircle,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaExternalLinkAlt
} from 'react-icons/fa';

const offerings = [
  {
    title: 'Corporate Training',
    href: '/corporate-training',
    description:
      'Industry-focused Generative AI, Deep Learning, cloud and automation tracks for enterprise upskilling with measurable intelligent outcomes.',
    points: ['Role-based AI & ML curriculum', 'Hands-on neural network labs', 'Prompt Engineering certification']
  },
  {
    title: 'Summer Internship',
    href: '/summer-internship',
    description:
      'Mentor-led internships offering college students real product development cycles focused on LLMs, Computer Vision, and AI-driven IoT.',
    points: ['Live AI-model training sprints', 'AI product portfolio & demo day', 'Machine Learning career support']
  },
  {
    title: 'School STEM Programs',
    href: '/school-stem',
    description:
      'Age-appropriate AI & STEM programming for schools, evolving from foundational coding to advanced robotics and machine learning innovation labs.',
    points: ['AI Literacy for teachers', 'Smart AI Lab setup support', 'Global AI & Robotics competitions']
  },
  {
    title: 'Government Work Orders',
    href: '/government',
    description:
      'Execution-ready digital skills and AI-awareness training programs for public institutions under large-scale government initiatives.',
    points: ['Scalable AI deployment model', 'Data-driven compliance reporting', 'Smart district rollout support']
  }
];

export default function HomePage() {

  return (
    <>
      <Navbar />

      <section className="bgvideo" id="home">
        <p className="headText">
          Transforming Potential <br />
          into Next-Gen Expertise
        </p>
        <p className="subhead">See & Learn | Do & Learn | Learn & Earn</p>

        <video src="/assets/bgVideo.mp4" className="bgfullvideo" muted autoPlay loop playsInline />
      </section>

      <main>
        <section className="tech-marquee-bar">
          <div className="marquee-content">
            <span>Robotics & AI</span><span className="dot">•</span>
            <span>MERN Stack</span><span className="dot">•</span>
            <span>Internet of Things (IoT)</span><span className="dot">•</span>
            <span>Python & Data Science</span><span className="dot">•</span>
            <span>Cloud & DevOps</span><span className="dot">•</span>
            <span>School to Corporate Tech Education</span><span className="dot">•</span>
            
            <span aria-hidden="true">Robotics & AI</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">MERN Stack</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">Internet of Things (IoT)</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">Python & Data Science</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">Cloud & DevOps</span><span className="dot" aria-hidden="true">•</span>
            <span aria-hidden="true">School to Corporate Tech Education</span>
          </div>
        </section>

        <section className="hero">
          <div className="hero-content">
            <h1>Focused, High-Impact AI & Tech Training</h1>
            <p>
              We are an agile tech-education partner dedicated to delivering deep, hands-on learning experiences powered by modern Artificial Intelligence.
              <br /><br />
              Whether you are a startup upskilling an engineering team in Generative AI, a school deploying an AI-integrated STEM lab, or a student seeking a mentored Machine Learning internship, we provide customized, data-driven curriculums.
            </p>
            <a className="register-demo" href="#offerings">
              Explore Our Programs
            </a>
          </div>
          <div className="hero-image">
            <img src="/assets/hero-image.png" alt="Students and trainees" />
          </div>
        </section>

        <section className="popular-courses-section" id="offerings">
          <h2>Our New Focus Areas</h2>
          <p className="explore-text">Built for schools, colleges, corporates and public institutions</p>
          <div className="courses-grid offering-grid">
            {offerings.map((offering) => (
              <Link href={offering.href} key={offering.title} className="course-card-link">
                <article className="course-card">
                  <h3>{offering.title}</h3>
                  <p className="course-desc">{offering.description}</p>
                  <ul className="offering-points">
                    {offering.points.map((point) => (
                      <li key={point}>
                        <FaCheckCircle aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="card-explore">
                    Learn More <FaArrowRight />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="feature-section" id="corporate">
          <div className="feature-video-container">
            <iframe
              width="586"
              height="330"
              src="https://www.youtube.com/embed/XL7crICUhTQ"
              title="AIPNT Programs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="feature-content">
            <h2>Corporate Training</h2>
            <ul className="feature-list">
              <li>
                <FaCheckCircle />
                <div className="feature-item-text">
                  <h3>AI-Powered Workforce Upskilling</h3>
                  <p>Custom LLM and Machine Learning learning paths for engineering teams, plus AI-literacy for non-tech and management functions.</p>
                </div>
              </li>
              <li>
                <FaCheckCircle />
                <div className="feature-item-text">
                  <h3>Intelligent Delivery Modes</h3>
                  <p>AI bootcamps, weekend coding cohorts, and hybrid sessions for rapid capability building.</p>
                </div>
              </li>
              <li>
                <FaCheckCircle />
                <div className="feature-item-text">
                  <h3>Data-Driven ROI Tracking</h3>
                  <p>Pre-post assessment, manager feedback and impact reports for leadership teams.</p>
                </div>
              </li>
            </ul>
            <Link className="primary-cta-btn" href="/corporate-training" style={{ marginTop: '20px', display: 'inline-block' }}>
              View Corporate Capabilities →
            </Link>
          </div>
        </section>

        <section className="comprehensive-learning-section" id="internship">
          <div className="comprehensive-learning-header">
            <h2>Summer Internship Programs</h2>
            <p>For college students and fresh graduates</p>
          </div>
          <div className="learning-cards-container">
            <div className="learning-card">
              <img src="/image/B_1.jpg" alt="Internship project track" />
              <h3>Gen-AI & LLM Product Sprints</h3>
            </div>
            <div className="learning-card">
              <img src="/image/B_2.jpg" alt="Internship mentorship" />
              <h3>Mentored Machine Learning Labs</h3>
            </div>
            <div className="learning-card">
              <img src="/image/B_3.jpg" alt="Career launch" />
              <h3>AI Engineers Placement Prep</h3>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link className="primary-cta-btn" href="/summer-internship">
              Explore Internship Details →
            </Link>
          </div>
        </section>

        <section className="visionary-moment" id="stem">
          <div className="video-container">
            <iframe
              width="766"
              height="431"
              src="https://www.youtube.com/embed/oUG0Nn7Sriw"
              title="STEM Programs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="visionary-text">
            <h2>School STEM Programs</h2>
            <p>
              Structured robotics, coding and AI curriculum for K-12 schools with teacher training,
              lab setup and project-based competitions.
            </p>
            <Link className="register-demo" href="/school-stem">
              Request School Proposal
            </Link>
          </div>
        </section>

        <section className="testimonials-section" id="government">
          <h2>Government Work Orders</h2>
          <p className="testimonials-subtitle">Implementation-ready partner for school and college-level programs</p>
          <div className="testimonials-container">
            <article className="testimonial-card">
              <p className="testimonial-text">
                State and district deployments for STEM and digital skills with standardized academic and progress
                reports.
              </p>
              <div className="testimonial-author">
                <img src="/image/User.png" alt="Implementation" />
                <div className="author-info">
                  <h4 className="author-name">Program Implementation</h4>
                  <p className="author-desc">Turnkey execution with local coordination</p>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-text">
                Procurement-compatible documentation, utilization reports and project governance aligned with public
                program standards.
              </p>
              <div className="testimonial-author">
                <img src="/image/User.png" alt="Compliance" />
                <div className="author-info">
                  <h4 className="author-name">Compliance and Reporting</h4>
                  <p className="author-desc">Transparent and auditable delivery model</p>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-text">
                College and school training pathways designed for employability, innovation and entrepreneurship at
                scale.
              </p>
              <div className="testimonial-author">
                <img src="/image/User.png" alt="Scale" />
                <div className="author-info">
                  <h4 className="author-name">High-Scale Capacity Building</h4>
                  <p className="author-desc">From pilot batches to district-wide rollout</p>
                </div>
              </div>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link className="primary-cta-btn" href="/government">
              View Government Operations →
            </Link>
          </div>
        </section>

        <section className="brochures-section" id="resources">
          <div className="section-header-centered">
            <h2>Explore Our Technical Bootcamps</h2>
            <p>Dive deep into our signature hardware, software, and AI specialized curriculum</p>
          </div>
          
          <div className="brochures-grid">
            
            <a href="/info-PNT/HARDWARE Designing for  IOT based market products.png" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <div className="brochure-image-wrap">
                <img src="/info-PNT/HARDWARE Designing for  IOT based market products.png" alt="Hardware Design Bootcamp" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>Hardware Design for IoT</h3>
                <p>Learn end-to-end hardware development for consumer market products.</p>
              </div>
            </a>

            <a href="/info-PNT/PCB Design Bootcamp from schematic to Gerber.jpeg" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <div className="brochure-image-wrap">
                <img src="/info-PNT/PCB Design Bootcamp from schematic to Gerber.jpeg" alt="PCB Design Bootcamp" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>PCB Design Bootcamp</h3>
                <p>From schematic capture to final Gerber file generation and prototyping.</p>
              </div>
            </a>

            <a href="/info-PNT/Embedded Design for  IOT based market product.png" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <div className="brochure-image-wrap">
                <img src="/info-PNT/Embedded Design for  IOT based market product.png" alt="Embedded Design" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>Embedded Design</h3>
                <p>Master embedded systems programming for real-world IoT deployments.</p>
              </div>
            </a>

            <a href="/info-PNT/Web application development  for Market Product.png" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <div className="brochure-image-wrap">
                <img src="/info-PNT/Web application development  for Market Product.png" alt="Web Application Development" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>Web App Development</h3>
                <p>Full-stack modern web development tailored for enterprise product scaling.</p>
              </div>
            </a>

            <a href="/info-PNT/AI block coding application development for Govt Project.png" target="_blank" rel="noopener noreferrer" className="brochure-card">
              <div className="brochure-image-wrap">
                <img src="/info-PNT/AI block coding application development for Govt Project.png" alt="AI Block Coding for Government" loading="lazy" />
                <div className="brochure-overlay">
                  <FaExternalLinkAlt className="brochure-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="brochure-info">
                <h3>AI Block Coding Frameworks</h3>
                <p>Specialized block-based application environments implemented for govt projects.</p>
              </div>
            </a>

          </div>
        </section>

        <section className="lead-generation-banner">
          <h2>Ready to Level Up?</h2>
          <p>Let's discuss how our tailored training programs can empower your team or institution.</p>
          <Link className="primary-cta-btn inverse" href="/contact">
            Schedule a Free Consultation
          </Link>
        </section>
      </main>

      <Footer />

      <a href="https://api.whatsapp.com/send?phone=917788016666" className="phone-button" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </>
  );
}
