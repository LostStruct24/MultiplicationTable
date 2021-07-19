import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MultiplicationTable from './components/MultiplicationTable/MultiplicationTable';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    line_linked: {
      color: "rgb(33, 33, 53)"
    },
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <MultiplicationTable />
      <div className="particle">
        <Particles className='particles'
            params={particlesOptions} />
      </div>
    </div>
  );
}

export default App;
