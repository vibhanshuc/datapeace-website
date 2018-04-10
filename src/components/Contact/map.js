import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOWgJOMZcyy-n2GQgzf3I6rh0y_wjd3bI&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '350px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
    center: { lat: 28.536297, lng: 77.268404 },
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={props.center}
  >
    {props.isMarkerShown && <Marker position={props.center} />}
  </GoogleMap>
));

export default () => <MapComponent isMarkerShown />;
