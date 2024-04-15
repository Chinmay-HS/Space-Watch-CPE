/*import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../isstracking/ISSTracking.css';

export default function ISSMap() {
  const mapContainer = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [marker, setMarker] = useState(null);
  const [zoom] = useState(6); // Reduced zoom level
  const [issPosition, setISSPosition] = useState({ latitude: 0, longitude: 0 });
  const [timestamp, setTimestamp] = useState('');
  const [updatingTimer, setUpdatingTimer] = useState(10);
  const [astronauts, setAstronauts] = useState({ number: 0, names: [] });

  maptilersdk.config.apiKey = 'FenqoJ4GSYmmnkZYAHvP';

  useEffect(() => {
    document.title = "ISS Tracking";
    if (mapInstance) return; // stops map from initializing more than once

    const map = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [0, 0], // Default center
      zoom: zoom,
    });

    setMapInstance(map);

    // Initial marker for demonstration purposes
    const initialMarker = new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([0, 0])
      .addTo(map);

    setMarker(initialMarker);
  }, [zoom, mapInstance]);

  useEffect(() => {
    const fetchISSPosition = async () => {
      try {
        // Fetch ISS position
        const responseISS = await fetch('http://api.open-notify.org/iss-now.json');
        if (!responseISS.ok) {
          throw new Error('Failed to fetch ISS position');
        }
        const dataISS = await responseISS.json();
        const { latitude, longitude, timestamp } = dataISS.iss_position;
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);

        // Update ISS position
        setISSPosition({ latitude, longitude });
        setTimestamp(timestamp);

        // Move marker to new position and center map
        if (mapInstance && marker) {
          marker.setLngLat([parseFloat(longitude), parseFloat(latitude)]);
          mapInstance.flyTo({ center: [parseFloat(longitude), parseFloat(latitude)], zoom: zoom });
        }

        // Fetch astronauts data
        const responseAstros = await fetch('http://api.open-notify.org/astros.json');
        if (!responseAstros.ok) {
          throw new Error('Failed to fetch astronauts data');
        }
        const dataAstros = await responseAstros.json();
        const { number, people } = dataAstros;
        console.log('Number of astronauts:', number);
        console.log('Astronauts:', people.map(person => person.name));

        // Update astronauts state
        setAstronauts({ number, names: people.map(person => person.name) });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch ISS position and astronauts data every 10 seconds
    const intervalId = setInterval(fetchISSPosition, updatingTimer * 1000);

    // Cleanup interval
    return () => clearInterval(intervalId);
  }, [marker, updatingTimer]);

  return (
    <div>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
      <footer>
        <p>Timestamp: {timestamp}</p>
        <p>Latitude: {issPosition.latitude}</p>
        <p>Longitude: {issPosition.longitude}</p>
        <p>Total number of astronauts: {astronauts.number}</p>
        <p>Astronaut names: {astronauts.names.join(', ')}</p>
      </footer>
    </div>
  );
}
*/
import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ISSTracking.css'
import issIcon from '../../assets/images/iss_icon.png';

export default function ISSMap() {
  const mapContainer = useRef(null);
  const markerRef = useRef(null);
  const mapRef = useRef(null);
  const intervalRef = useRef(null);
  const [issData, setISSData] = useState({
    velocity: 0,
    latitude: 0,
    longitude: 0,
    visibility: 'unknown',
    units: 'km/h'
  });
  const [astronauts, setAstronauts] = useState({
    number: 0,
    names: []
  });

  useEffect(() => {
    // Clear any previously created instance of the map
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    // Initialize map when component mounts
    const map = L.map(mapContainer.current).setView([0, 0], 3);
    const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map);

    // Create custom ISS icon
    const issIconMarker = L.icon({
      iconUrl: issIcon,
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    // Create marker and set it to markerRef
    const marker = L.marker([0, 0], { icon: issIconMarker }).addTo(map);
    markerRef.current = marker;

    // Store map instance and start fetching ISS data every 7 seconds
    mapRef.current = map;
    intervalRef.current = setInterval(fetchISSData, 7000);

    // Cleanup interval and marker when component unmounts or map instance changes
    return () => {
      clearInterval(intervalRef.current);
      map.removeLayer(marker);
    };
  }, []); // Run only once on mount

  const fetchISSData = async () => {
    try {
      const responseISS = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
      if (!responseISS.ok) {
        throw new Error('Failed to fetch ISS data');
      }
      const dataISS = await responseISS.json();
      const { velocity, latitude, longitude, visibility } = dataISS;
      setISSData({
        velocity,
        latitude,
        longitude,
        visibility,
        units: 'km/h' // Assuming velocity is in kilometers per hour
      });
      updateMarkerPosition(latitude, longitude);

      // Fetch astronauts data
      const responseAstros = await fetch('http://api.open-notify.org/astros.json');
      if (!responseAstros.ok) {
        throw new Error('Failed to fetch astronauts data');
      }
      const dataAstros = await responseAstros.json();
      const { number, people } = dataAstros;
      setAstronauts({ number, names: people.map(person => person.name) });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateMarkerPosition = (latitude, longitude) => {
    if (markerRef.current) {
      markerRef.current.setLatLng([latitude, longitude]);
    }
  };

  return (
    <div className="map-container">
      <div ref={mapContainer} className="map"> </div>
      <div className="footer">
        <div className="info-1">
          <li>Velocity:<p>{issData.velocity} {issData.units}</p></li>
          <li>Latitude:<p>{issData.latitude}</p> </li>
          <li>Longitude:<p> {issData.longitude}</p></li>
        </div>
        <div className="info-2">
          <li>Visibility:<p>{issData.visibility}</p></li>
          <li>Units:<p> {issData.units}</p></li>
          <li>Total number of astronauts:<p> {astronauts.number}</p></li>
        </div>
        <div className="info-3">
          Astronaut names: <p>{astronauts.names.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
