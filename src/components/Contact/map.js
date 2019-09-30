import React from 'react';

const MapComponent = () => (
  <iframe
    title="datapeace-google-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.11517697161!2d77.26830041545303!3d28.53625759518177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c7fa2bf371%3A0x1314faedc881fbd1!2sData+Peace+AI+Technologies+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1558344955884!5m2!1sen!2sin"
    frameBorder="0"
    style={{ border: 0, width: '100%', height: '100%' }}
    allowFullScreen
  />
);

export default () => <MapComponent isMarkerShown />;
