import React from 'react';
import '../App.css';
import Background from '../resources/images/homeBG.png'

var sectionStyle = { //For setting background - w3 Schools & Stackedoverflow suggestion modified to suit this app
  width: '100%',
  height: '400px',
  backgroundImage: 'url(' + Background + ')'
}
class Home extends React.Component {

  render() {
    return (
      <section style={sectionStyle}>
        <div className="App">

        </div>
      </section>
    );
  }
}

export default Home;