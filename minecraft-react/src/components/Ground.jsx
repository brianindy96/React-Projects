import React from 'react'
import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures'
import { RepeatWrapping } from 'three'

const Ground = () => {

    const [ref] = usePlane(() => ({ 
        rotation: [0,0,0],
        position: [0,0,0],
    }))

    // SEARCH WHAT THIS MEANS
    groundTexture.wrapS = RepeatWrapping
    groundTexture.wrapT = RepeatWrapping
    groundTexture.repeat.set(100,100);

  return (
    <mesh ref={ref}>
        {/* args here is the size of the plane (x,y) */}
        <planeGeometry attach='geometry' args={[100,100]}/>
        <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}

export default Ground