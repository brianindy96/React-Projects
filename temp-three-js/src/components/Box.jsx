import React from 'react'

const Box = () => {
  return (
    <mesh position={[0,2,0]}>
        <boxBufferGeometry attach="geometry"/>
        <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}


export default Box