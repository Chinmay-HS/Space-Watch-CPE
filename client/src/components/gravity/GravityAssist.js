import  { useState } from 'react';
import './gravityAssist.css'
import gravityAssistSection1 from './../../assets/images/gravity-assist-section1.jpg';

function GravityAssist() {
  const [initialVelocity, setInitialVelocity] = useState('');
  const [finalVelocity, setFinalVelocity] = useState('');
  const [planet, setPlanet] = useState('Earth');
  const [approachDistance, setApproachDistance] = useState('');
  const [spacecraftWeight, setSpacecraftWeight] = useState('');
  const [velocityChange, setVelocityChange] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [energyGained, setEnergyGained] = useState(0);

  const gravitationalConstants = {
    'Earth': 6.67430e-11,
    'Mars': 6.67430e-11,
    'Jupiter': 6.67430e-11
    // Add more gravitational constants for other planets as needed
  };

  const planetMasses = {
    'Earth': 5.972e24,
    'Mars': 6.4171e23,
    'Jupiter': 1.898e27
    // Add more planet masses as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gravitationalConstant = gravitationalConstants[planet];
    const planetMass = planetMasses[planet];

    // Calculate velocity change
    const velocityChange = parseFloat(finalVelocity) - parseFloat(initialVelocity);

    // Calculate time taken
    const timeTaken = 2 * Math.PI * Math.sqrt(Math.pow(parseFloat(approachDistance), 3) / (gravitationalConstant * planetMass));

    // Calculate energy gained
    const energyGained = 0.5 * parseFloat(spacecraftWeight) * Math.pow(velocityChange, 2);

    setVelocityChange(velocityChange.toFixed(2));
    setTimeTaken(timeTaken.toFixed(2));
    setEnergyGained(energyGained.toFixed(2));
  };

  return (
    <div className="App">
      <section className='section-pg1'>
        <div className='gravity-title'>
          <p>
            GRAVITY ASSIST CALCULATOR
          </p>
          <div className='section1-img'>
          </div>
        </div>
        <div className='text-info'>
          <p>
          Gravity assist, also known as a gravitational slingshot or swing-by maneuver, is a technique used in space exploration to alter the trajectory and speed of a spacecraft by utilizing the gravitational field of a planet or other celestial body. By flying close to a planet and utilizing its gravity, spacecraft can gain or lose velocity, change direction, and conserve fuel.
          </p>
          <button className='gravity-btn'>Learn More</button>
          <button className='gravity-btn'>Calculate</button>
        </div>
      </section>
      <section className='section-pg2'>
        
      </section>
      <h1>Gravity Assist Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="initial-velocity">Initial Velocity (km/s):</label>
          <input type="number" id="initial-velocity" value={initialVelocity} onChange={(e) => setInitialVelocity(e.target.value)} step="0.01" required />
        </div>
        <div className="form-group">
          <label htmlFor="final-velocity">Final Velocity (km/s):</label>
          <input type="number" id="final-velocity" value={finalVelocity} onChange={(e) => setFinalVelocity(e.target.value)} step="0.01" required />
        </div>
        <div className="form-group">
          <label htmlFor="planet">Planet:</label>
          <select id="planet" value={planet} onChange={(e) => setPlanet(e.target.value)} required>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
            {/* Add more planets as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="approach-distance">Approach Distance (km):</label>
          <input type="number" id="approach-distance" value={approachDistance} onChange={(e) => setApproachDistance(e.target.value)} step="0.01" required />
        </div>
        <div className="form-group">
          <label htmlFor="spacecraft-weight">Spacecraft Weight (kg):</label>
          <input type="number" id="spacecraft-weight" value={spacecraftWeight} onChange={(e) => setSpacecraftWeight(e.target.value)} step="0.01" required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div id="result" className={velocityChange || timeTaken || energyGained ? '' : 'hidden'}>
        <h2>Results</h2>
        <p>Velocity Change: {velocityChange} km/s</p>
        <p>Time Taken: {timeTaken} seconds</p>
        <p>Energy Gained: {energyGained} Joules</p>
      </div>
    </div>
  );
}

export default GravityAssist;
