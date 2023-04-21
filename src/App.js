import React from 'react';
import './App.css';
import answers from './answers';
import Eightball from './Eightball';




const App = () =>
 (
    <div className="App">
      <Eightball answers = {answers} />
    </div>
  );

export default App;
