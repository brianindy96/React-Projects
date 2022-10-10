import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from './components/Header'
import EditStudent from './components/EditStudent'
import { createStore } from "redux";
import reducer from './reducer';

// now uses Provider to let us use the store in the App
import { Provider } from "react-redux"

function App() {

  // create a store and lets the reducer access the store
  const store = createStore(reducer);
  
  return (
    // to let Provider bring store in, pass as props
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
