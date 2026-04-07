"use client";

import Link from 'next/link';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="main-footer" id="contact">
      <section className="projects-newsletter">
        <div className="footer-logo-wrapper">
          <div className="footer-logo-with-tagline">
            <img src="/assets/logo.png" alt="AIPNT Logo" className="footer-logo" />
            <span className="footer-logo-tagline">See & Learn | Do & Learn | Learn & Earn</span>
          </div>
        </div>
        <div className="newsletter-wrapper">
          <div className="newsletter-signup">
            <p className="newsletter-text">Newsletter to stay updated</p>
            <div className="email-input">
              <input type="email" placeholder="Your e-mail" />
              <button type="submit" className="submit-button">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-columns">
        <div className="footer-column address">
          <h3>Contact Us</h3>
          
          <div className="contact-item office-address-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-text">
              <strong>Office Address</strong>
              <p style={{ marginTop: '4px' }}>
                PNT Software Services<br />
                House No:25, Sarawathi Nilayam, Tinker Street,Cowlbazzar,<br />
                Ballari, Karnataka,Pin-583102
              </p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon highlight" />
            <div className="contact-text">
              <a href="tel:+917788016666" className="highlight-text">+91 77880 16666</a>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon highlight" />
            <div className="contact-text">
              <a href="mailto:info.aipnt@gmail.com" className="highlight-text">info.aipnt@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <FaClock className="contact-icon" />
            <div className="contact-text">
              <p>Mon - Sun: 9:00 AM to 6:00 PM (IST)</p>
            </div>
          </div>

        </div>
        <div className="footer-column explore">
          <h3>Explore</h3>
          <ul>
            <li>
              <Link href="/corporate-training">Corporate Training</Link>
            </li>
            <li>
              <Link href="/summer-internship">College Training Programs</Link>
            </li>
            <li>
              <Link href="/school-stem">School STEM</Link>
            </li>
            <li>
              <Link href="/government">Government Programs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column information">
          <h3>Information</h3>
          <ul>
            <li>
              <Link href="/coming-soon">Events</Link>
            </li>
            <li>
              <Link href="/coming-soon">Partnerships</Link>
            </li>
            <li>
              <Link href="/coming-soon">Teach with Us</Link>
            </li>
            <li>
              <Link href="/coming-soon">Career Support</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column policies">
          <h3>Policies</h3>
          <ul>
            <li>
              <Link href="/coming-soon">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/coming-soon">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/coming-soon">Refund Policy</Link>
            </li>
          </ul>
          <p className="custom-training-proposal">
            Need a custom training proposal? <a href="https://api.whatsapp.com/send?phone=917788016666">Talk to our program desk →</a>
          </p>
        </div>
      </section>

      <section className="social-copyright">
        <div className="social-icons">
          <Link href="/coming-soon" className="social-icon" aria-label="LinkedIn">
            <FaLinkedinIn />
          </Link>
          <Link href="/coming-soon" className="social-icon" aria-label="Facebook">
            <FaFacebookF />
          </Link>
          <Link href="/coming-soon" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="/coming-soon" className="social-icon" aria-label="YouTube">
            <FaYoutube />
          </Link>
          <a href="https://api.whatsapp.com/send?phone=917788016666" className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
        <p className="copyright-text">© 2026 PNT Services Private Limited</p>
      </section>
    </footer>
  );
}
