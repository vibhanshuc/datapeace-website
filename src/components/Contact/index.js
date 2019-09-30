import React from 'react';
import { MdEmail } from 'react-icons/md';
import {
  FaMapMarker,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import DataPeaceMap from './map';
import './contact.scss';

const Contact = () => (
  <div className="Contact">
    <div className="Contact-row">
      <h2 className="Contact-row__heading">Get in Touch</h2>
    </div>
    <div className="Contact-row">
      <div className="Contact-column flex-100">
        <DataPeaceMap />
      </div>
      <div className="Contact-column flex-100">
        <h4>Contact Information</h4>
        <div>
          <div className="Contact-line flex">
            <div>
              <FaMapMarker />
            </div>
            <address>
              Two Horizon Center, DLF Phase 5, Gurugram, Haryana 122002, India
            </address>
          </div>
          <div className="Contact-line flex">
            <div>
              <FaPhone />
            </div>
            <div>
              <a href="tel:+91-9582824331">+91-9582824331</a>
            </div>
          </div>
          <div className="Contact-line flex">
            <div>
              <MdEmail />
            </div>
            <div>
              <a href="mailto:info@datapeace.in">info@datapeace.in</a>
            </div>
          </div>
        </div>
        <div className="Contact-social flex flex-center">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/datapeaceai"
          >
            <FaFacebook />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/datapeaceai"
          >
            <FaTwitter />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/13704845/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
