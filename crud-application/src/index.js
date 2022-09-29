import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducers'

const store = createStore(postReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider helps sends data from store into the App without sending any props between components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

