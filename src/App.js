import React, { Component } from 'react';
import './App.css';
import { longdo, map, LongdoMap } from './longdo-map/LongdoMap';

class App extends Component {

  initMap(){
    map.Layers.setBase(longdo.Layers.GRAY);
  }

  // make sure to use different map key: https://map.longdo.com/api
  render() {
    const mapKey = '7313fc5f380ef258448202c0029934fa'
    return (
      <div className="App">
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={this.initMap} />
      </div>
    );
  }
}

export default App;