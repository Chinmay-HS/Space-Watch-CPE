/* import React, { useState } from 'react';

function Apod() {
  const [selectedDate, setSelectedDate] = useState('');
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectedDate}`);
      if (!response.ok) {
        throw new Error('Failed to fetch APOD data');
      }
      const data = await response.json();
      setApodData(data);
      setError(null);
    } catch (error) {
      setApodData(null);
      setError('Error fetching APOD data');
    }
  };

  return (
    <div className="apod">
      <h1>Astronomy Picture of the Day</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Select Date:</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
        />
        <button type="submit">Fetch APOD</button>
      </form>
      {error && <p>{error}</p>}
      {apodData && (
        <div>
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} />
          <p>{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Apod;

*/

/* import React, { useState } from 'react';

function Apod() {
  const [selectedDate, setSelectedDate] = useState('');
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectedDate}`);
      if (!response.ok) {
        throw new Error('Failed to fetch APOD data');
      }
      const data = await response.json();
      setApodData(data);
      setError(null);
    } catch (error) {
      setApodData(null);
      setError('Error fetching APOD data');
    }
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    console.log("Image has been added to favorites");
  };

  return (
    <div className="apod">
      <h1>Astronomy Picture of the Day</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Select Date:</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
        />
        <button type="submit">Fetch APOD</button>
      </form>
      {error && <p>{error}</p>}
      {apodData && (
        <div>
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} />
          <p>{apodData.explanation}</p>
          <button onClick={handleFavoriteClick}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Apod;
*/

import React, { useState } from 'react';
import axios from 'axios';

function Apod() {
  const [selectedDate, setSelectedDate] = useState('');
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=Owwu0ar0RtvX84p0bjHW1r7nlzKvozGfdCpqx8yR&date=${selectedDate}`);
      if (!response.ok) {
        throw new Error('Failed to fetch APOD data');
      }
      const data = await response.json();
      setApodData(data);
      setError(null);

      // Save APOD data
      await axios.post("http://localhost:3001/apod/", {
        title: data.title,
        date: data.date,
        url: data.url,
        copyright: data.copyright
      });
      console.log('Image has been added to favorites');
    } catch (error) {
      setApodData(null);
      setError('Error fetching APOD data');
    }
  };

  return (
    <div className="apod">
      <h1>Astronomy Picture of the Day</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Select Date:</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
        />
        <button type="submit">Fetch APOD</button>
      </form>
      {error && <p>{error}</p>}
      {apodData && (
        <div>
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} />
          <p>{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Apod;
