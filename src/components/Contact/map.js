import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const defaultStyles = [
  {
    featureType: 'all',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: '-100',
      },
      {
        color: '#ffdac9',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffcab1',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffcab1',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 100,
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        lightness: 700,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#92e1dd',
      },
    ],
  },
];

const MapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOWgJOMZcyy-n2GQgzf3I6rh0y_wjd3bI&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '300px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
    center: { lat: 28.536297, lng: 77.268404 },
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultOptions={{
      styles: defaultStyles,
    }}
    defaultZoom={14}
    defaultCenter={props.center}
  >
    {props.isMarkerShown && <Marker position={props.center} />}
  </GoogleMap>
));

export default () => <MapComponent isMarkerShown />;
