import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import Ground from "./components/Ground"
import Player from "./components/Player"

function App() {
  
  return (
    <>
      <div>Outside Canvas</div>
      <Canvas
      camera={{
        position: [0,1,0],
      }}
      >
        <OrbitControls />
        <Sky sunPosition={[100,120,100]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Player />
          <Ground />
          <axesHelper args={[10]} />
        </Physics>
        
      </Canvas>
    </>
    
  )
}

export default App
