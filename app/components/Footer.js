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
        <p className="projects-link">
          Need a custom training proposal? <a href="https://api.whatsapp.com/send?phone=917788016666">Talk to our program desk →</a>
        </p>
        <div className="newsletter-signup">
          <p className="newsletter-text">Newsletter to stay updated</p>
          <div className="email-input">
            <input type="email" placeholder="Your e-mail" />
            <button type="submit" className="submit-button">
              →
            </button>
          </div>
        </div>
      </section>

      <section className="footer-columns">
        <div className="footer-column address">
          <h3>Contact Us</h3>
          
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-text">
              <strong>Bhubaneswar Campus</strong>
              <p style={{ marginTop: '4px' }}>
                Switchtech Incubation Center<br />
                Silicon University, Bhubaneswar<br />
                Odisha, India 751024
              </p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-text">
              <strong>Khordha Headquarters</strong>
              <p style={{ marginTop: '4px' }}>
                Near Forest Colony<br />
                Khordha, Odisha<br />
                India 752057
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
              <Link href="/summer-internship">Summer Internship</Link>
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
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Teach with Us</a>
            </li>
            <li>
              <a href="#">Career Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-column policies">
          <h3>Policies</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="social-copyright">
        <div className="social-icons">
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" className="social-icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://api.whatsapp.com/send?phone=917788016666" className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
        <p className="copyright-text">© 2026 PNT Services Private Limited</p>
      </section>
    </footer>
  );
}
