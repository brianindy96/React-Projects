/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/carrot-cake/carrot_cake_4k.gltf -r public
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSphere } from '@react-three/cannon';

export function Carrot(props) {
  const { nodes, materials } = useGLTF('/carrot-cake/carrot_cake_4k.gltf');
  return (
    <group {...props} dispose={null} scale={18}>
      <mesh geometry={nodes.carrot_cake.geometry} material={materials.carrot_cake} position={[0,0,0.03]} rotation={[Math.PI/4, 0, 0]}/>
    </group>
  )
}

useGLTF.preload('/carrot-cake/carrot_cake_4k.gltf')
