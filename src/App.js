import React, { Component } from 'react';
import Canvas from './Components/Canvas/Canvas';
import ControlElements from './Components/ControlElements/ControlElements';
import MovementForm from './Components/MovementForm/MovementForm';
import MovementsTable from './Components/MovementsTable/MovementsTable';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>Movement maker</h1>
      	<Canvas />
      	<ControlElements />
      	<MovementForm />
      	<MovementsTable />
      </div>
    );
  }
}

export default App;
