import { Parallax } from "react-parallax";
import Rice from "/img/rice.jpg"
import Monk from "/img/monk.jpg"
import Beach from "/img/beach.jpg"
import "./App.css"

// https://github.com/rrutsche/react-parallax
// Quick Docs

function App() {

  return (
    <div className="App">
      <div className="content">

      </div>
      <Parallax strength={600} bgImage={Rice}>
        <div className="parallax-content">
          
        </div>
      </Parallax>
      <div className="content">

      </div>
      {/* Dynamic Blurring */}
      <Parallax blur={{ min: -15, max: 15 }} strength={600} bgImage={Beach}>
        <div className="parallax-content">
          
        </div>
      </Parallax>
      <div className="content">

      </div>
      {/* Reverse */}
      <Parallax strength={-600} bgImage={Monk}>
        <div className="parallax-content">
          
        </div>
      </Parallax>
      <div className="content">

      </div>
    </div>
  )
}

export default App
