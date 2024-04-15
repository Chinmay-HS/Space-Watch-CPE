import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iceberg2 from '../../assets/images/iceberg2.png';
import './map.css';

export default function IcePage() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // Check if the map is already initialized
    if (!map.current) {
      // Initialize Leaflet map
      map.current = L.map(mapContainer.current).setView([35.6844, 139.753], 14);

      // Add Google Hybrid tile layer
      const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }).addTo(map.current);

      // Fetch event data and place markers
      fetchEventData();
    }

  }, []);

  const fetchEventData = async () => {
    try {
      const response = await fetch('https://proxy.cors.sh/https://eonet.gsfc.nasa.gov/api/v3/categories/15', {
        headers: {
          'x-cors-api-key': 'temp_4979c7cf4bcf4cb300486a826de8c1d7'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch event data');
      }
      const data = await response.json();
      console.log('Event data:', data);
      placeMarkers(data.events);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  const placeMarkers = (events) => {
    const customIcon = L.icon({
      iconUrl: iceberg2,
      iconSize: [32, 32], // Specify the size of your icon
      iconAnchor: [16, 32] // Specify the anchor point of your icon
    });

    events.forEach(event => {
      const coordinates = event.geometry[0].coordinates;
      if (!coordinates || coordinates.length !== 2) {
        console.error('Invalid coordinates:', coordinates);
        return; // Skip marker placement for invalid coordinates
      }
      const date = event.geometry[0].date; // Access the date from the geometry object
      const type = event.geometry[0].type; // Access the type from the geometry object
      const magnitudeValue = event.geometry[0].magnitudeValue; // Access the magnitude value
      const magnitudeUnit = event.geometry[0].magnitudeUnit; // Access the magnitude unit
      const marker = L.marker([coordinates[1], coordinates[0]], { icon: customIcon }).addTo(map.current);
      marker.bindPopup(`<h3>${event.title}</h3><p>ID: ${event.id}</p><p>Date: ${date}</p><p>Type: ${type}</p><p>Magnitude: ${magnitudeValue ? magnitudeValue + ' ' + magnitudeUnit : 'Magnitude information not available'}</p><p>Source: <a href="${event.sources[0].url}" target="_blank">Link</a></p>`);
    });
  };

  return <div ref={mapContainer} className="map" />;
}
