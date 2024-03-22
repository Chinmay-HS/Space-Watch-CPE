import React, { useRef, useEffect, useState } from 'react';
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
