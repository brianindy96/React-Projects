import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber'
import React from 'react'

const FPV = () => {
    // The useThree hook allows you to access various objects related to the 3D scene, including the WebGLRenderer instance as well as the Camera, Scene, and other important Three.js objects.
    // The Canvas component provides a WebGL rendering context for the 3D scene and takes care of initializing and managing the WebGLRenderer instance.
    const { camera, gl } = useThree();


  return (
    <PointerLockControls
        camera={camera}
        domElement={gl.domElement}
    >
        
    </PointerLockControls>
  )
}

export default FPV