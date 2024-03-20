/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState , useLayoutEffect } from "react";
import { useRef } from "react";


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
    setMouseX(e.pageX);
    setMouseDelta(parseFloat(mouseXDown)-mouseX);
    setMaxDelta(window.innerWidth/2);
    setPercentage((mouseDelta/maxDelta)*-100);
    let nextPercentageUnconstrained = parseFloat(prevPercentage)+ percentage;
    setNextPercentage(Math.max(Math.min(nextPercentageUnconstrained , 0), -100));
    // setPercentage(nextPercentage); 
    //nextPercentage = Math.max(Math.min(parseFloat(prevPercentage)+ percentage, 0), -100);
    ref.current.style.transition = "transform 0.5s ease-out";
    ref.current.style.transform=`translate(${nextPercentage.toFixed(2)}%,-50%)`
    
  }
  function up(e){
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mousedown", handle)
    setMouseXDown(0);
    setPrevPercentage(nextPercentage);
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
          <img className="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false"/>
          <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
          <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
          <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
          <img className="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        </div>
      </section>
        <div>value of x = {nextPercentage}  value of xdown = {mouseXDown}</div>
    </div>
  );
};



export default Page2;
