import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import Ground from "./components/Ground"
function App() {
  
  return (
    <>
      <div>Outside Canvas</div>
      <Canvas>
        <OrbitControls />
        <Sky sunPosition={[100,120,100]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
    </>
    
  )
}

export default App
