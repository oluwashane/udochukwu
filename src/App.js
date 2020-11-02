import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import Zoom from 'react-reveal'
import './App.css';
import Main from './components/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Zoom duration={4000}>
        <Main />
      </Zoom>
    </BrowserRouter>
  )
}

export default App
