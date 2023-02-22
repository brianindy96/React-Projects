import { useBox } from '@react-three/cannon'
import React from 'react'

const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  return (
    <mesh ref={ref}> 
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color='blue' />
    </mesh>
  )
}

export default Cube