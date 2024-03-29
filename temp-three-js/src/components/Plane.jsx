import { usePlane } from '@react-three/cannon';
import React from 'react'

const Plane = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0]}));

    return (
      <mesh position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeBufferGeometry attach="geometry" args={[100, 100]}/>
          <meshLambertMaterial attach="material" color="lightgreen" />
      </mesh>
    )
  }

export default Plane