import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components'
import Chats from './components/Chats'

import { AuthProvider } from './context/AuthContext'

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/chats" element={<Chats />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
