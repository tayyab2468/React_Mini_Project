import React, { useState } from 'react';
import './Ground.css';
import pic1 from './BOY.jpeg'; 
import bgImage from './green.jpg'; 

const Ground = () => {
  const [ballthrown, setballthrown] = useState(false);
  const [height, setheight] = useState('');
  const [mass, setmass] = useState('');
  const [gravity, setgravity] = useState(9.8);
  const [result, setresult] = useState({
    potentialenergy: null,
  });
  const [showResult, setShowResult] = useState(false);  

  const calculate = () => {
    if (mass && height && gravity) {
      const m = parseFloat(mass);
      const h = parseFloat(height);
      const g = parseFloat(gravity);

      const potentialenergy = m * g * h;
      const ImpactVelocity = Math.sqrt(2 * g * h);
      const Timetofall = Math.sqrt(2 * h / g);
      setresult({ potentialenergy, ImpactVelocity, Timetofall });
      setballthrown(true);
      setShowResult(true);  
    } else {
      alert('Please enter values for mass, height, and gravity.');
    }
  };

  return (
    <div
      className="ground"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
      }}
    >
      <img src={pic1} alt="Boy" />
      <span className={`ball ${ballthrown ? 'thrown-down' : ''}`}>⚽</span>

     
      <div className={`container ${showResult ? 'hide-container' : ''}`}>
        <h1>Physics Drop Simulator</h1>
        <input
          type="text"
          value={mass}
          onChange={(e) => setmass(e.target.value)}
          placeholder="Enter the mass in kg"
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setheight(e.target.value)}
          placeholder="Enter the height"
        />
        <select
          name="options"
          value={gravity}
          onChange={(e) => setgravity(parseFloat(e.target.value))}
          id="options"
        >
          <option value={9.8}>9.8</option>
          <option value={10}>10</option>
        </select>
        <button onClick={calculate}>Calculate</button>
      </div>

      {showResult && (
        <div className="result">
          <h2>Results</h2>
          <p>Potential Energy: {result.potentialenergy.toFixed(2)} J</p>
          <p>Impact Velocity: {result.ImpactVelocity.toFixed(2)} m/s</p>
          <p>Time to Fall: {result.Timetofall.toFixed(2)} s</p>
        </div>
      )}
    </div>
  );
};

export default Ground;
