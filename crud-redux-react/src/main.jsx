import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore } from "redux"
import postReducer from './reducers/postReducer'
import { Provider } from "react-redux";

// we're letting postReducer access's the states which are stored in store
const store = createStore(postReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider provides the store for App to use as state storage */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
