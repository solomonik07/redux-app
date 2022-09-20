import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import Posts from "./components/Posts/Posts";
import Buttons from "./components/Buttons/Buttons";

import { reducer } from './redux/reducers'
import './App.css';
import rootSaga from "./redux/sagas";


const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))

  sagaMiddleware.run(rootSaga)

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
