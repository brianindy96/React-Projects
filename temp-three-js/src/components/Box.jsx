import { useBox } from '@react-three/cannon'
import React from 'react'

const Box = () => {
    const [ref] = useBox(() => ({ mass: 1}));

  return (
    <mesh ref={ref} position={[0,2,0]}>
        <boxBufferGeometry attach="geometry"/>
        <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}


export default Box