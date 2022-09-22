import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import Posts from "./components/Posts/Posts";
import Buttons from "./components/Buttons/Buttons";

import { reducer } from './redux/reducers'
import rootSaga from "./redux/sagas";

import './App.css';


const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))

  sagaMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
      <div className='container'>
        <Buttons />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
