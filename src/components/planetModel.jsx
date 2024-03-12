import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
import { BBAnchor, Html } from "@react-three/drei";
import * as THREE from "three";

function PlanetModel() {
    return (
        <>
            <Html center distanceFactor={30} occlude>
                <div className="modal-container">
                    <div className="border-container">
                        <div className="top">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <div className="middle"></div>
                        <div className="bottom">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                    </div>
                    <h1>Label</h1>
                </div>
            </Html>
        </>
    )
}

export default PlanetModel