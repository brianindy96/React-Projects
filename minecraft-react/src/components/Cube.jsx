import { useBox } from '@react-three/cannon'
import React from 'react'
import { useStore } from '../hooks/useStore'
import * as textures from "../images/textures"

const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

//   setting the texture props with 'Texture' e.g. dirtTexture, glassTexture like in textures.js
  const activeTexture = textures[texture + 'Texture']
  console.log('activeTexture', activeTexture)

  const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);

  return (
    <mesh 
    onClick={(e) => {
      e.stopPropagation()
      const clickedFace = Math.floor(e.faceIndex / 2)
      const { x, y, z } = ref.current.position
      if (e.altKey) {
        // hold on to the altKey and click on the cube
        removeCube(x, y, z)
        return
      }
      else if (clickedFace === 0) {
        addCube(x + 1, y, z)
        return
      }
      else if (clickedFace === 1) {
        addCube(x - 1, y, z)
        return
      }
      else if (clickedFace === 2) {
        addCube(x, y + 1, z)
        return
      }
      else if (clickedFace === 3) {
        addCube(x, y - 1, z)
        return
      }
      else if (clickedFace === 4) {
        addCube(x, y, z + 1)
        return
      }
      else if (clickedFace === 5) {
        addCube(x, y, z - 1)
        return
      }
    }}
    ref={ref}> 
        <boxGeometry attach="geometry" />
        <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  )
}

export default Cube