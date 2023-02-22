import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sky } from "@react-three/drei"
function App() {
  
  return (
    <>
      <div>Outside Canvas</div>
      <Canvas>
        <OrbitControls />
        <Sky sunPosition={[100,120,100]} />
      </Canvas>
    </>
    
  )
}

export default App
