/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [apodData, setApodData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/apod/");
        setApodData(response.data);
        setError(null);
      } catch (error) {
        setError('Error fetching APOD data');
      }
    };

    fetchApodData();
  }, []);

  return (
    <div className="profile">
      <h1>My Favorite APODs</h1>
      {error && <p>{error}</p>}
      <div className="apod-grid">
        {apodData.map(apod => (
          <div key={apod._id} className="apod-card">
            <h2>{apod.title}</h2>
            <img src={apod.url} alt={apod.title} />
            <p>Date: {apod.date}</p>
            <p>Copyright: {apod.copyright}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";

function Profile() {
  const [apodData, setApodData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/apod/");
        setApodData(response.data);
        setError(null);
      } catch (error) {
        setError("Error fetching APOD data");
      }
    };
    fetchApodData();
  }, []);
  return (
    <div className="profile">
      <div className="title-pg">My Favorite APODs</div>
      {error && <p>{error}</p>}
      <div className="apod-grid">
        {apodData.map((apod) => (
          <a href="{apodData.url}">
            <div key={apod._id} className="apod-card">
              <h2>{apod.title}</h2>
              <img src={apod.url} alt={apod.title} />
              <p>Date: {apod.date}</p>
              <p>Copyright: {apod.copyright}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Profile;
