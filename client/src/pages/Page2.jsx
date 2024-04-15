/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState , useLayoutEffect } from "react";
import { useRef } from "react";
import iss from './../assets/images/iss.jpg'
import MarsRover from './../assets/images/mars-rover.png'
import eonet from './../assets/images/eonet.jpg'
import celestialChoreo from './../assets/images/celestial-choreography.jpg'
import apod from './../assets/images/apod.jpg'



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
    setNextPercentage(Math.max(Math.min(nextPercentageUnconstrained , 0), -81.5));
    // setPercentage(nextPercentage); 
    //nextPercentage = Math.max(Math.min(parseFloat(prevPercentage)+ percentage, 0), -100);
    
    
  }
  function up(e){
    setMouseXDown(0);
    setPrevPercentage(nextPercentage);
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mousedown", handle)
  }

  console.log(nextPercentage);   
})

  return {mouseX , mouseXDown, ref, nextPercentage};

}


function Page2 () {
  const {mouseXDown,ref, nextPercentage} = useMouse();
  return (
    <div>
      <section className="page2">
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
          <img className="img1" src={celestialChoreo} draggable="false" />
           <a href="/celestialchoreography" target="_blank" rel="noopener noreferrer" draggable="false">
             <h1 className="mod-name">CELESTIAL CHOREOGRAPHY</h1>
           </a>
        </div>
        </div>
      </section>
    </div>
  );
};



export default Page2;