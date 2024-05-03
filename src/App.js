
import './App.css';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import signup from './components/signup'

function MyButton() {
  return (
    <signup />

  );
}

function App() {
  return (
    <div className='container'>
      <div className='Drawer' >
        <button onClick={MyButton()}>signup
        </button>
      </div>
      <div className='Drawer'>
        <button onClick={MyButton()}>signup
        </button>
      </div>


    </div>

  );
}

export default App;
