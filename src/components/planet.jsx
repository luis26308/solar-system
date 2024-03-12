import React, { useRef, useState, useEffect } from "react";
import { BBAnchor, Html, } from "@react-three/drei";
import { Bloom, EffectComposer, } from "@react-three/postprocessing";
import * as THREE from "three";

function Planet(props) {
    return (
        <group ref={props.planetRef}>

            <mesh>
                <sphereGeometry args={[3, 32, 32]} />
                {props.children}
            </mesh>
            {/* <BBAnchor anchor={[0, 3, 0]}>
                <Html center>
                    <h4>{props.name}</h4>
                </Html>
            </BBAnchor> */}
        </group>
    );
}

export default Planet;
