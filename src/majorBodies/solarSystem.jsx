import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Stars, Cloud } from "@react-three/drei";
import * as THREE from "three";
// import Sun from "../minorBodies/sun";
// import Earth from "../minorBodies/earth";
// import Mars from "../minorBodies/mars";
// import Mercury from "../minorBodies/mercury";
// import Venus from "../minorBodies/Venus";
// import Jupiter from "../minorBodies/jupiter";
// import Saturn from "../minorBodies/saturn";
// import Uranus from "../minorBodies/uranus";
// import Neptune from "../minorBodies/neptune";
import Planets from '../minorBodies/index'

function SolarSystem({position=[0,0,0]}) {
    return (
        <>
            <group position={position}>
                <Planets.Sun />
                {/* <Sun toggleForm={props.toggleForm} isAuth={props.auth.isAuth} /> */}
                <Planets.Mercury name={"merury"} distance={39} speed={0.004} />
                <Planets.Venus name={'venus'} distance={72} speed={0.0035} />
                <Planets.Earth name={'earth'} distance={100} speed={0.003} />
                <Planets.Mars name={'mars'} distance={152} speed={0.0015} />
                <Planets.Jupiter name={'jupiter'} distance={250} speed={0.001} />
                {/* <Planets.Saturn name={'saturn'} distance={80} speed={0.002} />
                <Planets.Uranus name={'uranus'} distance={90} speed={0.003} />
                <Planets.Neptune name={'neptune'} distance={100} speed={0.0005} /> */}
            </group>
        </>
    );
}

// Earth      1   years   1     AU
// Mercury	0.241 years  0.39   AU
// Venus	0.615 years  0.72   AU
// Mars	    1.881 years  1.52   AU
// Jupiter	11.86 years  5.20   AU
// Saturn	29.46 years  9.54   AU
// Uranus	84.01 years  19.22  AU
// Neptune	164.8 years  30.06  AU
// Pluto	248.6 years

export default SolarSystem
