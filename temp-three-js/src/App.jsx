import './App.css'
import { Canvas } from "@react-three/fiber"
import Box from './components/Box'
import { OrbitControls, Stars } from "@react-three/drei"

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
      <Box />
    </Canvas>
  )
}

export default App
