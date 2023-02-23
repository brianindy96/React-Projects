import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import Ground from "./components/Ground"
import Player from "./components/Player"
import FPV from "./components/FPV"
import Cubes from "./components/Cubes"
import { Baseball } from "./components/Baseball"
import { Goal } from "./components/Goal"

function App() {
  
  return (
    <>
      <div>Outside Canvas</div>
      <Canvas
      
      >
        <Sky sunPosition={[100,120,100]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <axesHelper args={[10]} />
          <Player />
          <Ground />
          <Baseball />
          <Goal />
          <Cubes />
        </Physics>
      </Canvas>
      <div className="absolute centered crosshair">+</div>
    </>
    
  )
}

export default App
