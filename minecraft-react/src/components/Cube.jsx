import { useBox } from '@react-three/cannon'
import React from 'react'
import * as textures from "../images/textures"

const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

//   setting the texture props with 'Texture' e.g. dirtTexture, glassTexture like in textures.js
  const activeTexture = textures[texture + 'Texture']
  console.log('activeTexture', activeTexture)

  return (
    <mesh ref={ref}> 
        <boxGeometry attach="geometry" />
        <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  )
}

export default Cube