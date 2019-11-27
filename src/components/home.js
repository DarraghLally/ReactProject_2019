import React from 'react';
import '../App.css';

class Home extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>DL Database Interface</h1> <br/>
        <h2>Current time{new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Home;