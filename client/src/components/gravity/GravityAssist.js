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
        <div className='keyTerms'>
          <div className='heading'>KEY TERMS</div>
          <p className='font-bold'>Sphere of Influence (SOI):</p>
          <p className='font-light'>The region around a celestial body within which its gravitational influence dominates over that of other bodies.</p>
          <p className='font-bold'>Velocity Change (Δv):</p>
          <p className='font-light'>The change in velocity experienced by the spacecraft as a result of the gravity assist maneuver.</p>
          <p className='font-bold'>Hyperbolic Trajectory:</p>
          <p className='font-light'>The path followed by a spacecraft as it approaches and then moves away from a celestial body under the influence of gravity.</p>
          <p className='font-bold'>Periapsis:</p>
          <p className='font-light'>The point in the spacecraft's trajectory where it is closest to the center of the celestial body.</p>
          <p className='font-bold'>Apoapsis:</p>
          <p className='font-light'>The point in the spacecraft's trajectory where it is farthest from the center of the celestial body.</p>
        </div>
        <div className='partition'></div>
        <div className='calculating-gravity-assist'>
          <div className='heading'>CALCULATING GRAVITY ASSIST</div>
          <p className='font-bold'>Initial Velocity (V1):</p>
          <p className='font-light'>The velocity of the spacecraft before encountering the celestial body.</p>
          <p className='font-bold'>Final Velocity (V2):</p>
          <p className='font-light'>The velocity of the spacecraft after the gravity assist maneuver.</p>
          <p className='font-bold'>Planet Mass (M2):</p>
          <p className='font-light'>The mass of the celestial body around which the spacecraft is performing the gravity assist.</p>
          <p className='font-bold'>Closest Approach Distance (R):</p>
          <p className='font-light'>The closest distance between the spacecraft and the center of the celestial body during the gravity assist maneuver.</p>
          <p className='font-bold'>Gravitational Constant (G):</p>
          <p className='font-light'>A fundamental constant representing the strength of the gravitational force.</p>
        </div>
      </section>
      <section className='section-pg3'>
        <div className='formulae'>
          <div className='heading-formulae'>FORMULAE</div>
          <h1 className='font-light'>Velocity Change (Δv): Δv = V2 - V1</h1>
          <h1 className='font-light'>Time Taken (T): T = 2 * π * sqrt(R^3 / (G * M2))</h1> 
          <h1 className='font-light'>Energy Gained (E): E = 0.5 * M1 * Δv^2</h1> 
        </div>
        <div className='Steps'>
          <div className='heading'>STEPS</div>
          <h1 className='font-bold'>1. Trajectory Planning: <h2 className='font-light'>Determine the desired trajectory and the celestial body to be used for the gravity assist maneuver.</h2></h1>
          <h1 className='font-bold'>2. Approach Phase: <h2 className='font-light'>Maneuver the spacecraft to approach the target celestial body.</h2></h1> 
          <h1 className='font-bold'>3. Closest Approach: <h2 className='font-light'>Fly the spacecraft close to the celestial body to maximize the gravitational effect.</h2></h1> 
          <h1 className='font-bold'>4. Exit Phase: <h2 className='font-light'>Allow the spacecraft to exit the sphere of influence of the celestial body with the desired velocity change and trajectory.</h2></h1> 
        </div>
      </section>
      <section className='section-pg4'>
        <div className='calculator'>
          <h1 className='heading-calculator'>Calculator</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="font-light" htmlFor="initial-velocity">Initial Velocity (km/s): </div>
              <input className='gravity-input' type="number" id="initial-velocity" value={initialVelocity} onChange={(e) => setInitialVelocity(e.target.value)} step="0.01" required />
            </div>
            <div className="form-group">
              <label className="font-light" htmlFor="final-velocity">Final Velocity (km/s):</label>
              <input className='gravity-input' type="number" id="final-velocity" value={finalVelocity} onChange={(e) => setFinalVelocity(e.target.value)} step="0.01" required />
            </div>
            <div className="form-group">
              <label className="font-light" htmlFor="planet">Planet:</label>
              <select className='gravity-input' id="planet" value={planet} onChange={(e) => setPlanet(e.target.value)} required>
                <option value="Earth">Earth</option>
                <option value="Mars">Mars</option>
                <option value="Jupiter">Jupiter</option>
                {/* Add more planets as needed */}
              </select>
            </div>
            <div className="form-group">
              <label className="font-light" htmlFor="approach-distance">Approach Distance (km):</label>
              <input className='gravity-input' type="number" id="approach-distance" value={approachDistance} onChange={(e) => setApproachDistance(e.target.value)} step="0.01" required />
            </div>
            <div className="form-group">
              <label className="font-light" htmlFor="spacecraft-weight">Spacecraft Weight (kg):</label>
              <input className='gravity-input' type="number" id="spacecraft-weight" value={spacecraftWeight} onChange={(e) => setSpacecraftWeight(e.target.value)} step="0.01" required />
            </div>
            <button className="gravity-btn" type="submit">Calculate</button>
          </form>
          <div id="result" className={velocityChange || timeTaken || energyGained ? '' : 'hidden'}>
            <div className='result-heading-layout'>
              <h2 className='heading-result'>Results</h2>
              <div className='custom-line'></div>
            </div>
            <p className="font-light">Velocity Change: {velocityChange} km/s</p>
            <p className="font-light">Time Taken: {timeTaken} seconds</p>
            <p className="font-light">Energy Gained: {energyGained} Joules</p>
          </div>
        </div>
        <div className='usage'>
          <h1 className='heading-usage'>Usage</h1>
          <div className='font-light-contentPg4'>Several robotic spacecraft have used the "gravity assist" technique to achieve their targets "high up" in the Sun's gravity well. Voyager 2 launched in August 1977 and flew by Jupiter for reconnaissance, and for a trajectory boost to Saturn. Voyager 1 launched the following month and did the same (reaching Jupiter before Voyager 2 did). </div>
          <div className='spaceCraftImg'></div>
        </div>
      </section>
    </div>
  );
}

export default GravityAssist;
