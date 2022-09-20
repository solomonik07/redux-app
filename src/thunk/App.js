import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import Posts from "./components/Posts/Posts";
import Buttons from "./components/Buttons/Buttons";

import { reducer } from './redux/reducers'
import './App.css';


const App = () => {
  const store = createStore(reducer, applyMiddleware(logger, thunk))

  return (
    <Provider store={store}>
      <div className="App">
        <div className='container'>
          <Buttons />
          <Posts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
