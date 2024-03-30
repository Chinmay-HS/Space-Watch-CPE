import React from 'react'
import './celestial.css'

function Celestialchoreography() {
  return (
    <div className='celestial-main-pg'>
      <div className='text'>
        <h1>
            FUTURE DIRECTIONS
        </h1>
        <h2>
        This module uses publicly available and accessible satellite TLE data sets that are provided by CelesTrak.

        To make practical use of the TLE data, the project uses Shashwat Kandadai's JavaScript library called satellite.js for satellite position propagation via TLE data sets that contain orbital information about each object.

        All objects are then rendered in a 3D geospatial viewer provided by Cesium. By the nature of the data contained within TLE sets, it is possible to determine the position of each object at any given moment in time, be it the present, the future or the past. The project makes use of this feature with the "time flow multiplier" slider, although satellite positions are not physically exact and only approximated for the sake of getting better performance. Clicking on a satellite object displays approximate (interpolated) satellite orbit path.
        </h2>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Celestialchoreography;