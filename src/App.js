import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InfoCard from './info/infocard';
import { information } from './info/info';
import Navi from './components/navigation';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      information: information
    };
  }

  
  render() {
    return (
      <div>
        <Navi></Navi>
        <InfoCard></InfoCard>
      </div>
    );
  }
}

export default App;
