import React from 'react';
import team_logo from './../assets/images/pixellabs_white 1.png';
import Nasa_logo from './../assets/images/Nasa Logo.png';


const Page1 = () => {
  return (
    <div>
      <section className="page1">
        <div className="background">
          <div className='team_logo'><img src={team_logo} alt="" /></div>
          <div className='title'>SPACE WATCH</div>
          <div className='tagLine'>Your Real Time Space Information Hub.</div>
          <div className="credit">In accordance with the APIs provided by:</div>
          <div className="nasa-logo">
            <img src={Nasa_logo} alt='nasa logo'/>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Page1
