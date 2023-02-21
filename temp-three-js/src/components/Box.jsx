import { useBox } from '@react-three/cannon'
import React from 'react'

const Box = () => {
    const [ref, api] = useBox(() => ({ mass: 1}));

  return (
    <mesh onClick={() => api.velocity.set(1,2,0)} ref={ref} position={[0,2,0]}>
        <boxBufferGeometry attach="geometry"/>
        <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}


export default Box