import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon';
import { Vector3 } from 'three';


const Player = () => {

    const { camera } = useThree();
    
    const [ref] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0,0,0]
    }));

    // Storing position of Player
    const pos = useRef([0,0,0])

    // This hook will run on everywhere
    // Frame
    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    })
  return (
    <mesh ref={ref}>
        
    </mesh>
  )
}

export default Player