import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon';
import { Vector3 } from 'three';


const Player = () => {

    
    // The 'ref' object is used to attach the sphere to the Three.js Canvas
    // the 'api' object is used to update the sphere's properties
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        // this position is set to change according to the pos.current
        position: [0,2,0]
    }));

    // VELOCITY of Player
    const vel = useRef([0,0,0])
    // An useEffect hook is used to subscribe to changes in the position of the sphere. When the position changes, the value of pos.current is updated to match the new position.
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])
    // This hook will run on everywhere
    
    
    
    // Storing position of Player
    // The useRef hook is called with an initial value of [0, 0, 0]. This creates a reference to a mutable value that can be used to store and access state across re-renders.
    const pos = useRef([0,0,0])

    // An useEffect hook is used to subscribe to changes in the position of the sphere. When the position changes, the value of pos.current is updated to match the new position.
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])
    // This hook will run on everywhere

    // CAMERA
    const { camera } = useThree();

    useFrame(() => {
        // Every frame, the camera from Three copies the position used as Reference in an x,y,z  
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    
        // api.velocity.set(0,1,0)
    })
  return (
    <mesh ref={ref}>
        
    </mesh>
  )
}

export default Player