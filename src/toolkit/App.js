import React from 'react'
import { Provider } from 'react-redux'

import Posts from "./components/Posts/Posts";
import Buttons from "./components/Buttons/Buttons";

import store from './redux/store'

import './App.css';

const App = () => {

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
