import './App.css'
import { Canvas } from "@react-three/fiber"
import Box from './components/Box'
import { OrbitControls, Stars } from "@react-three/drei"
import Plane from './components/Plane'
import { Physics, useBox } from "@react-three/cannon"
function App() {

  return (
    <Canvas style={{height: "100vh"}}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight 
      position={[10,15,10]}
      angle={0.3}
      />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  )
}

export default App
