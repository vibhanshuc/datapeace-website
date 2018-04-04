import React from 'react';
import './clients.scss';

const Clients = () => (
  <div className="clients flex">
    <div>
      <h2>Our Clients</h2>
      <p>Our CLIENTs are raving about us</p>
    </div>
    <div className="flex flex-100 flex-sa">
      <img src="https://placeimg.com/100/100/any" />
      <img src="https://placeimg.com/100/100/any" />
      <img src="https://placeimg.com/100/100/any" />
    </div>
  </div>
);

export default Clients;
