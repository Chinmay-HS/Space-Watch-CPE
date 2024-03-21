/*import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'FenqoJ4GSYmmnkZYAHvP';

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom
    });

    fetchEventData();

  }, [tokyo.lng, tokyo.lat, zoom]);

  const fetchEventData = async () => {
    try {
      const response = await fetch('https://proxy.cors.sh/https://eonet.gsfc.nasa.gov/api/v3/categories/8', {
        headers: {
          'x-cors-api-key': 'temp_a7bca9eee1bcdba4e92ef48badfc14bc'
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
    events.forEach(event => {
      const coordinates = event.geometry[0].coordinates;
      const marker = new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat(coordinates)
        .addTo(map.current);
      
      marker.setPopup(new maptilersdk.Popup()
        .setHTML(`<h3>${event.title}</h3><p>ID: ${event.id}</p><p>Source: ${event.sources[0].url}</p>`)
      );
    });
  };

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
*/

import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function WildFirePage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'FenqoJ4GSYmmnkZYAHvP';

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom
    });

    // Load custom PNG image outside of the loop
    map.current.loadImage('./your-custom-icon.png', function(error, image) {
      if (error) throw error;
      
      // Add custom icon once
      map.current.addImage('custom-marker', image);

      // Fetch and place markers
      fetchEventData();
    });
  }, [tokyo.lng, tokyo.lat, zoom]);

  const fetchEventData = async () => {
    try {
      const response = await fetch('https://proxy.cors.sh/https://eonet.gsfc.nasa.gov/api/v3/categories/8', {
        headers: {
          'x-cors-api-key': 'temp_a7bca9eee1bcdba4e92ef48badfc14bc'
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
    events.forEach(event => {
      const coordinates = event.geometry[0].coordinates;
      
      // Add marker with custom icon
      const marker = new maptilersdk.Marker({ icon: 'custom-marker' })
        .setLngLat(coordinates)
        .addTo(map.current);
      
      marker.setPopup(new maptilersdk.Popup()
        .setHTML(`<h3>${event.title}</h3><p>ID: ${event.id}</p><p>Source: ${event.sources[0].url}</p>`)
      );
    });
  };

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
