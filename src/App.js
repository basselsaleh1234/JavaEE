import React, { Component } from 'react';
import Tbuch from '../src/telefonbuch/tbuch.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tbuch/>
      </div>
    );
  }
}
export default App;

