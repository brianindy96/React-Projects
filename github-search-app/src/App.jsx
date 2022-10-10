import './App.css'

function App() {

  // variable that holds the input value 
  let getUsername;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = getUsername.value;
    console.log(username);
    
  }
  return (
    <div className="container">
      <form 
      onSubmit={handleSubmit}
      className="form"
      >
        <h2 className="title">Enter the Github Username</h2>
        <input 
        type="text"
        placeholder="Enter Github Username"
        required
        ref={input => (getUsername = input)}
         />
        <button type="submit" className="button">Search</button>
      </form>
      
    </div>
  )
}

export default App
