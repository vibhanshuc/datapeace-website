import React from 'react';
import { string } from 'prop-types';
import Heading from '../shared/Heading';
import './clients.scss';

const items = [];

const Client = ({ title, imageURL, description }) => (
  <div className="Client flex flex-col flex-center">
    <img alt={`${title} Logo`} className="Client-logo" src={imageURL} />
    {/* <h4 className="Client-name"> {title}</h4> */}
    <p className="Client-description">{description}</p>
  </div>
);

Client.propTypes = {
  title: string.isRequired,
  imageURL: string.isRequired,
  description: string.isRequired,
};

const Clients = () => (
  <div className="Clients">
    <div className="Clients-heading flex flex-center">
      <Heading title="Our Clients" />
    </div>
    <div className="Clients-list flex flex-center">
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Client key={index} {...item} />
      ))}
    </div>
  </div>
);

export default Clients;
