import './App.css'
import { Canvas } from '@react-three/fiber'
import { Baseball } from './Baseball'
import { OrbitControls, Sky } from '@react-three/drei'
import { Physics } from "@react-three/cannon"
import Ground from '../../minecraft-react/src/components/Ground'

function App() {
  return (
    <>
        <div>Outside Canvas</div>

    <Canvas>
    <Sky sunPosition={[100,120,100]} />
      <ambientLight />
      <pointLight />
      <pointLight />
      <Physics>
        <Baseball />
        <Ground />
      </Physics>
      <OrbitControls />
    </Canvas>
    </>
  )
}

export default App
