/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Nasa_logo from './assets/images/Nasa Logo.png';
import React from "react";
import { useState , useLayoutEffect } from "react";
import { useRef } from "react";
import iss from './assets/images/iss.jpg'
import MarsRover from './assets/images/mars-rover.png'
import eonet from './assets/images/eonet.jpg'
import celestialChoreo from './assets/images/celestial-choreography.jpg'
import apod from './assets/images/apod.jpg'
import gravity from './../src/assets/images/gravity.jpg'



function useMouse() {
  const [mouseX , setMouseX] = useState(0);
  const [mouseXDown , setMouseXDown] = useState(0);
  const [mouseDelta , setMouseDelta] = useState(0);
  const [maxDelta , setMaxDelta] = useState(0);
  const [percentage , setPercentage] = useState(0);
  const [prevPercentage , setPrevPercentage] = useState(0);
  const [nextPercentage , setNextPercentage] = useState(0);
  const ref = useRef();

useLayoutEffect(() =>{
  document.addEventListener("mousedown", handle)
  document.addEventListener("mousemove", move)
  document.addEventListener("mouseup", up)
  Math.min(nextPercentage,0);
  Math.max(nextPercentage,-100)
  
  function handle(e) {
    
    setMouseXDown(e.pageX);
    
  }
  function move(e) {
    if(mouseXDown === 0 )return;
    for(const image of ref.current.getElementsByClassName("img1")) {
      ref.current.style.transition = "transform 0.6s ease-out";
      image.style.objectPosition=`${100 + nextPercentage}% center`;
      image.style.transition = `object-position 0.5 ease-in-out`;
      ref.current.style.transform=`translate(${nextPercentage.toFixed(2)}%,-50%)`
    }
    setMouseX(e.pageX);
    setMouseDelta(parseFloat(mouseXDown)-mouseX);
    setMaxDelta(window.innerWidth/2);
    setPercentage((mouseDelta/maxDelta)*-100);
    let nextPercentageUnconstrained = parseFloat(prevPercentage)+ percentage;
    setNextPercentage(Math.max(Math.min(nextPercentageUnconstrained , 0), -84));
    // setPercentage(nextPercentage); 
    //nextPercentage = Math.max(Math.min(parseFloat(prevPercentage)+ percentage, 0), -100);
    
    
  }
  function up(e){
    setMouseXDown(0);
    setPrevPercentage(nextPercentage);
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mousedown", handle)
  }


})

  return {mouseX , mouseXDown, ref, nextPercentage};

}


function Home({modulesRef, aboutUsRef}) {
  const {ref} = useMouse();
  return (
    <div className="Home">
      {/* <NavbarJD/> */}
      <section className="page1">
        <div className="background">
          {/* <div className='team_logo'><img src={team_logo} alt="" /></div> */}
          <div className='title'>SPACE WATCH</div>
          <div className='tagLine'>Your Real Time Space Information Hub.</div>
          <div className="credit">In accordance with the APIs provided by:</div>
          <div className="nasa-logo">
            <img src={Nasa_logo} alt='nasa logo'/>
          </div>
        </div>
      </section>

      <section className="page2" id="modulesPage">
        <div id="image-track" ref={ref}>
        <div className="image">
         <img className="img1" src={apod} draggable="false" />
          <a href="/Apod" target="_blank" rel="noopener noreferrer" draggable="false">
          <h1 className="mod-name">APOD</h1>
          </a>
        </div>

        <div className="image">
         <img className="img1" src={iss} draggable="false" />
            <a href="/ISSMain" target="_blank" rel="noopener noreferrer" draggable="false">
              <h1 className="mod-name">ISS TRACKING</h1>
            </a>
        </div>

        <div className="image">
         <img className="img1" src={MarsRover} draggable="false" />
          <a href="http://localhost:3002" target="_blank" rel="noopener noreferrer" draggable="false">
             <h1 className="mod-name">MARS ROVER PHOTOS</h1>
          </a>
        </div>

        <div className="image">
         <img className="img1" src={eonet} draggable="false" />
          <a href="/EonetMain" target="_blank" rel="noopener noreferrer" draggable="false">
              <h1 className="mod-name">EARTH OBSERVATORY NATURAL EVENT TRACKER</h1>
          </a>
        </div>

        <div className="image">
          <img className="img1" src={gravity} draggable="false" />
           <a href="/GravityAssist" target="_blank" rel="noopener noreferrer" draggable="false">
             <h1 className="mod-name">GRAVITY ASSIST</h1>
           </a>
        </div>

        <div className="image">
          <img className="img1" src={celestialChoreo} draggable="false" />
           <a href="/celestialchoreography" target="_blank" rel="noopener noreferrer" draggable="false">
             <h1 className="mod-name">CELESTIAL CHOREOGRAPHY</h1>
           </a>
        </div>
        </div>
      </section>

      <section className='page4' id="aboutUsPage">
        <div className='bg-pg4'>
          <div className="gradient">
            <div className="about-us">ABOUT US</div>
            <div className="desc">Welcome to Pixel Labs, where creativity meets innovation. At Pixel Labs, we are a dynamic team of skilled designers and developers dedicated to crafting cutting-edge software solutions. Our diverse team brings together a wealth of expertise and passion for technology, working tirelessly to bring your ideas to life. Whether it's web development, mobile applications, or bespoke software, we thrive on pushing the boundaries of what's possible. With our collaborative approach and unwavering commitment to excellence, Pixel Labs is your partner in transforming concepts into reality. Join us on this exciting journey as we continue to shape the future of software development.</div>
            <div className="glass-pg4">
              <div className='line-pg-about-us'></div>
              <div className="our-team-tag">our team</div>
              <p className="team-members">
                <p>chinmay sawant
                  <p>(Editor, Designer)</p>
                </p>
                <p>Aaditya Padghan
                  <p>(Designer, Developer)</p>
                </p>
                <p>Manish Salvi
                  <p>(Guide / Mentor)</p>
                </p>
                <p>Vishal Chauhan
                  <p>(Developer)</p>
                </p>
                <p>Jash Damania
                  <p>(Animator, Developer)</p>
                </p>
              </p>
            </div>
            {/* <div className='team_logo2'>
              <img src={team_logo} alt="" />
            </div> */}
          </div>
        </div>
      </section>
    </div>
    
  );
}



export default Home;