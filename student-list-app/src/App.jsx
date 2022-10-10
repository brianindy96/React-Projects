import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import EditStudent from './components/EditStudent'
import { createStore } from "redux";
import reducer from './reducer';
import AddStudent from "./components/AddStudent"
import StudentLists from "./components/StudentLists"
import PageNotFound from './components/PageNotFound';

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
          <Routes>
            <Route exact path="/edit/:id" element={<EditStudent />} />
            <Route exact path="/add" element={<AddStudent />} />
            <Route exact path="/" element={<StudentLists />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
