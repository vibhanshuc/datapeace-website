import React from 'react';
import Location from 'react-icons/lib/md/location-on';
import Phone from 'react-icons/lib/md/local-phone';
import Mail from 'react-icons/lib/md/mail';

const ContactPage = () => (
  <div>
    <h1>CONTACT INFORMATION</h1>
    <div><Location /> <address style={{ display: 'inline' }}>E-43/1, Okhla Phase II, Okhla Industrial Area,New Delhi - 110020, India</address></div>
    <div><Phone /> <a href="tel:+91-9582824331">+91-9582824331</a></div>
    <div><Mail /> <a href="mailto:info@datapeace.in">info@datapeace.in</a></div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.0698401594456!2d77.27062719806543!3d28.53618948992931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6b6350dcd29%3A0x1e303e704987cdfd!2s91springboard+Okhla!5e0!3m2!1sen!2sus!4v1520856677995"
      width="800"
      height="600"
      frameBorder="0"
      style={{ border: '0' }}
      allowFullScreen
    />
  </div>
);

export default ContactPage;
