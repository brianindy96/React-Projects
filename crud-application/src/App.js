import React from 'react';
import './App.css';
import AllPosts from './components/AllPosts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm />
      <AllPosts />
    </div>
  );
}

export default App;
