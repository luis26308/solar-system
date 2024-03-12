import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BBAnchor, Html, Trail } from "@react-three/drei";
import Planet from "../components/planet";
import Moon from "../components/moon";
import imageBin from "../utils/ImageBin";
import * as THREE from "three";

function Earth(props) {
    const planetRef = useRef();
    // const textureRef = useRef(new THREE.TextureLoader().load(imageBin.earthMap));
    const [textureMap, setTextureMap] = useState(new THREE.TextureLoader().load(imageBin.earthMap))
    const [position, setPosition] = useState([]);
    const planetSpeed = props.speed;
    let planetAngle = JSON.parse(sessionStorage.getItem(props.name)) || 0;


    useFrame(() => {
        planetAngle += planetSpeed;
        // console.log(planetAngle);
        if (planetAngle > 2 * Math.PI) {
            planetAngle = 0;
        }
        ////Position
        planetRef.current.position.x = props.distance * Math.cos(planetAngle);
        planetRef.current.position.y = 0;
        planetRef.current.position.z = props.distance * Math.sin(planetAngle);

        ////Rotation
        planetRef.current.rotation.y += 0.001;

        // console.log(planetRef.current.position.y)
        sessionStorage.setItem(props.name, JSON.stringify(planetAngle))
        setPosition(planetRef.current.position);
    });
    return (
        <>
            <group>
                
                <Planet planetRef={planetRef} name={'Earth'}>
                    <meshStandardMaterial map={textureMap} color={"white"}/>
                </Planet >
                <Moon speed={0.005} distance={4} position={position} />
            </group>
        </>
    );
}

export default Earth;
