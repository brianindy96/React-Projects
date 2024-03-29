import React from 'react'
import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures'
import { NearestFilter, RepeatWrapping } from 'three'
import { useStore } from '../hooks/useStore'
const Ground = () => {

    const [ref] = usePlane(() => ({ 
        rotation: [-Math.PI/2,0,0],
        position: [0,-0.5,0],
        material: {
          friction: 2,
        },
    }))

    // Cube

    const [addCube] = useStore((state) => [state.addCube]);



    // TEXTURE (somewhat like background-repeat)
    // magFilter defines the texture magnification function to be used when the pixel being textured maps to an area less than or equal to one texture element (texel).
    groundTexture.magFilter = NearestFilter
    // wrapS how the texture is wrapped horizontally and corresponds to U in UV mapping.
    groundTexture.wrapS = RepeatWrapping
    // wrapT defines how the texture is wrapped vertically and corresponds to V in UV mapping.
    groundTexture.wrapT = RepeatWrapping
    // How many tiles according to args
    groundTexture.repeat.set(100,100);

  return (
    <mesh 
    ref={ref}
    onClick={(e) => {
      e.stopPropagation(); // therefore no clicks can be passed below the ground
      const [x,y,z] = Object.values(e.point).map((val) => Math.ceil(val)); // position x,y,z is where we clicked
      addCube(x,y,z); 
    }}
    >
        {/* args here is the size of the plane (x,y) */}
        <planeGeometry attach='geometry' args={[100,100]}/>
        <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}

export default Ground