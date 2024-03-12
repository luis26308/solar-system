import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
import { BBAnchor, Html } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
// import imageBin from "../utils/ImageBin";
import * as THREE from "three";
import PlanetModel from "../components/planetModel";

function Sun(props) {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log(toggle);
    });

    return (
        <group>
            <pointLight intensity={4000} color={"white"} position={[0, 0, 0]} />
            <mesh
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <sphereGeometry args={[7, 32, 32]} />
                <meshBasicMaterial color={"yellow"} />
            </mesh>
            <EffectComposer>
                <Bloom intensity={20} luminanceThreshold={0.9} mipmapBlur radius={.9}/>
            </EffectComposer>
            {toggle && (
                <BBAnchor anchor={[0, 4, 0]}>
                    <PlanetModel />
                </BBAnchor>
            )}
        </group>
    );
}

export default Sun;
