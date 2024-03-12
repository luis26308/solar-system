import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import imageBin from "../utils/ImageBin";

function Moon(props) {
  const moonRef = useRef();
  const moonSpeed = props.speed;
  let moonAngle = 0;
  // console.log(props.position)
  useFrame(() => {
    moonAngle += moonSpeed;
    // console.log(moonAngle);
    if (moonAngle > 2 * Math.PI) {
      moonAngle = 0;
    }
    ////Position
    moonRef.current.position.x =props.position.x + props.distance * Math.cos(moonAngle);
    moonRef.current.position.y = props.position.y;
    // moonRef.current.position.y = props.position.y + props.distance * Math.cos(moonAngle)
    moonRef.current.position.z = props.position.z + props.distance * Math.sin(moonAngle);
    ////Rotation
    moonRef.current.rotation.y += 0.001;
    // console.log(moonRef)
  });

  return (
    <>
      <group>
        <mesh ref={moonRef}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color={0xaaaaaa} />
        </mesh>
      </group>
    </>
  );
}

export default Moon;
