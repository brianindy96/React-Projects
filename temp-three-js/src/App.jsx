import './App.css'
import { Canvas } from "@react-three/fiber"
import Box from './components/Box'
import { OrbitControls } from "@react-three/drei"

function App() {

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Box />
    </Canvas>
  )
}

export default App
