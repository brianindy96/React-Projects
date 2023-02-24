import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SignIn from './pages/SignIn'

function App() {

  const [user, setUser] = useState(null);

  const [bookId, setBookId] = useState('');

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited:", id);
    setBookId(id);
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out");
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const auth = getAuth();


  useEffect(() => {
    // Check if the user is already signed in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("There is user");
        setUser(user);
      } else {
        setUser(null);
        console.log("No user");
      }
    });

    
  }, []);


  return (
    <div className="App">
      <Header user={user} handleSignOut={handleSignOut} />
      <Routes>
        <Route path='/' exact element={user ? <Home getBookId={getBookIdHandler} /> : <Navigate to="/signin"/>} />
        <Route path='/add' exact element={user ? <Add /> : <Navigate to="/signin"/>} />
        <Route path='/edit' exact element={user ? <Edit bookId={bookId} /> : <Navigate to="/signin"/>} />
        <Route path='/signin' exact element={!user ? <SignIn /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
