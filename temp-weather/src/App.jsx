import { AcUnit } from '@mui/icons-material'
import './App.css'
import Input from './components/Input'
import Nav from './components/Nav'
import TimeAndLocation from './components/TimeAndLocation'

function App() {

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-28 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
      <Nav />
      <Input />
      <TimeAndLocation />
    </div>
  )
}

export default App
