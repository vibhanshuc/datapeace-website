import React from 'react';
import MapMarker from 'react-icons/lib/fa/map-marker';
import FaPhone from 'react-icons/lib/fa/phone';
import MdEmail from 'react-icons/lib/md/email';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import DataPeaceMap from './map';
import './contact.scss';

const Contact = () => (
  <div className="Contact">
    <div className="Contact-row">
      <h2 className="Contact-row__heading">Get in Touch</h2>
    </div>
    <div className="Contact-row">
      <div className="Contact-column flex-100">
        <h4>Contact Information</h4>
        <div>
          <div className="Contact-line flex">
            <div>
              <MapMarker />
            </div>
            <div>
              E-43/1, Okhla Phase 2, Okhla Industrial Area, New Delhi - 110020,
              India
            </div>
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
          <a href="https://www.facebook.com/datapeaceai">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/datapeaceai">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/13704845/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="Contact-column flex-100">
        <DataPeaceMap />
      </div>
    </div>
  </div>
);

export default Contact;
