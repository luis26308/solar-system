import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Cloud } from "@react-three/drei";
import * as THREE from "three";


function StarField(props) {
    return (
        <>
            <group>
                <Stars
                    radius={100}
                    depth={100}
                    count={4000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={3}
                    size={5}
                />
                <Stars
                    radius={100}
                    depth={100}
                    count={2000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={5}
                    size={5}
                />
                <Stars
                    radius={100}
                    depth={100}
                    count={3000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                    size={5}
                />
            </group>
        </>
    )
}

export default StarField