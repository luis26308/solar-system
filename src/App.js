import React from 'react'
import './App.css'
import Universe from './views/universe'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';

function App() {


  return (
    <div className='main'>
      <Canvas >
        <Universe />
      </Canvas>
    </div>
  )
}

export default App
