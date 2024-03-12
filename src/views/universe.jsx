import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { Stats, OrbitControls, Stars, Cloud, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import StarField from "../majorBodies/StarField";
import SolarSystem from "../majorBodies/solarSystem";

function Universe(props) {
  let rotationRef = useRef();
  const solarSystemRef = useRef();
  const orbitRef = useRef();  // Define the orbitRef
  // let orbitPosition = useRef([
  //   -272.47011700582004, 265.7667733117569, 324.2345717876054,
  // ]);

  useEffect(() => {
    if (sessionStorage.getItem('orbitData')) {
      let saved = JSON.parse(sessionStorage.getItem('orbitData'))
      // console.log(saved)
      orbitRef.current = saved
    }
    // console.log(orbitRef)
  }, []);


  const handleOrbit = (e) => {
    console.log(e.target);
    // console.log(e.target.getDistance());
    // console.log(e.target.getPolarAngle());
    // console.log(e.target.getAzimuthalAngle());
    // let savedPosition = [...e.target.object.position];

    // if (orbitRef.current.azimuthalAngle){
    //   e.target.setAzimuthalAngle(orbitRef.current.azimuthalAngle)
    //   orbitRef.current.azimuthalAngle = null
    // }
    // if (orbitRef.current.polarAngle){
    //   e.target.setPolarAngle(orbitRef.current.polarAngle)
    //   orbitRef.current.polarAngle = null

    // }
    
    let savedPosition = {
      azimuthalAngle: e.target.getAzimuthalAngle(),
      polarAngle: e.target.getPolarAngle(),
      distance: e.target.getDistance(),
    };

    sessionStorage.setItem("orbitData", JSON.stringify(savedPosition));
  };

  useFrame(() => {
    rotationRef.current.rotation.y -= 0.0001;
  });


  return (
    <>
      <PerspectiveCamera
        // position={[0, 0, 0]}
        // zoom={100}
        // onChange={handleOrbit}
      >
        <group ref={rotationRef}>
          <SolarSystem />
          <StarField />
        </group>
      </PerspectiveCamera>

      <OrbitControls
        onChange={handleOrbit}
        // target={[0, 0, 0]}
        minDistance={50}
        maxDistance={500}
        enablePan={false}
      />
    </>
  );
}


export default Universe;
