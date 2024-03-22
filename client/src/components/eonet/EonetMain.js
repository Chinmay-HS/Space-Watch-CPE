import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../eonet/EonetMain.css'
import WildFirePage from './WildFirePage';
import IcePage from './IcePage';
import VolanoesPage from './VolcanoesPage';

const MainPage = () => {
  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    
  };

  useEffect(() => {
    document.title = "EONET"
  }, []);

  return (
    <div style={backgroundStyle}>
      <h1>Welcome to EONET</h1>
      <div>
        <Link to="/WildFirePage"><button className='EONETBUTT'>Wildfire Tracking</button></Link>
        <Link to="/IcePage"><button className='EONETBUTT'>'Sea and Lake Ice</button></Link>
        <Link to="/VolcanoesPage"><button className='EONETBUTT'>Volcanoes</button></Link>
      </div>
    </div>
  );
}

export default MainPage;
