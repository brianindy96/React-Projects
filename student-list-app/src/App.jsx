import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from './components/Header'
import EditStudent from './components/EditStudent'
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/edit/:id" component={EditStudent} />
          <Route exact path="/add" component={AddStudent} />
          <Route exact path="/" component={StudentLists} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
