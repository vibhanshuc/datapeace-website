import React from 'react';
import Heading from '../shared/Heading';
import './clients.scss';
import Astro from './astro.svg';

const items = [
  {
    title: 'Blazeclan',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    imageURL:
      'https://www.blazeclan.com/wp-content/uploads/2017/01/logo-1-1.png',
  },
  {
    title: 'RateGain',
    description:
      'For Travel companies the disruption is not just from new entrants or nimble competition, ' +
      'but also from the connected traveler who might take his business elsewhere',
    imageURL: 'https://rategain.com/wp-content/uploads/2017/01/rlv200x60.png',
  },
  {
    title: 'Astro',
    description:
        'For Travel companies the disruption is not just from new entrants or nimble competition, ' +
        'but also from the connected traveler who might take his business elsewhere',
    imageURL: Astro,
  },
];

const Client = ({ title, imageURL, description }) => (
  <div className="Client flex flex-col flex-center">
    <img alt={`${title} Logo`} className="Client-logo" src={imageURL} />
    {/* <h4 className="Client-name"> {title}</h4> */}
    <p className="Client-description">{description}</p>
  </div>
);

const Clients = () => (
  <div className="Clients">
    <div className="Clients-heading flex flex-center">
      <Heading title="Our Clients" />
    </div>
    <div className="Clients-list flex flex-center">
      {items.map((item, index) => <Client key={index} {...item} />)}
    </div>
  </div>
);

export default Clients;
