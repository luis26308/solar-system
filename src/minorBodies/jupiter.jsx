import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Planet from "../components/planet";
import Moon from "../components/moon";
import imageBin from "../utils/ImageBin";
import * as THREE from "three";

function Jupiter(props) {
    const planetRef = useRef();
    // const textureRef = useRef(new THREE.TextureLoader().load(imageBin.jupiterMap));
    const [textureMap, setTextureMap] = useState(new THREE.TextureLoader().load(imageBin.jupiterMap))
    const [position, setPosition] = useState([]);
    const planetSpeed = props.speed;
    let planetAngle = JSON.parse(sessionStorage.getItem(props.name)) || 0;
    // console.log(planetRef)
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
                <Planet planetRef={planetRef} name={'Jupiter'}>
                    <meshStandardMaterial map={textureMap} />
                </Planet >
                <Moon speed={0.005} distance={4} position={position}/>
            </group>
        </>
    );
}

export default Jupiter;
