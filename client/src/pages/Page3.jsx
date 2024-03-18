import React from 'react'

import { useState, useEffect } from "react";

function useMouse() {
  const [mousePosition , setMousePosition] = useState ({
    x: 0,
    y: 0
  });

useEffect(() =>{
  document.addEventListener("mousedown", handle)
  document.addEventListener("mouseup", up)

  function handle(e) {
    document.addEventListener("mousemove", move)
    
    setMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  }
  function move(e) {
    setMousePosition({
      x: e.pageX,
      y: e.pageY
    })
  }
  function up(e){
    document.removeEventListener("mousemove", move)
  }

  return () => document.removeEventListener("mousedown", handle)
})

  return mousePosition;

}

function Page3 () {
  const {x,y} = useMouse();
  return (
    <div>
      <section className='page3'></section>
      <div className="data"> Mouse X is {x} </div>
      <div className="data"> Mouse Y is {y}</div>
    </div>
  )
}

export default Page3
