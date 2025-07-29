import { useState } from 'react';

function TrafficLight() {
  const [trafficLightColor, setTrafficLightColor] = useState('green');

  function cycleLight() {
    switch (trafficLightColor) {
      case 'green':
        setTrafficLightColor('yellow');
        return;
      case 'yellow':
        setTrafficLightColor('red');
        return;
      default:
        setTrafficLightColor('green');
        return;
    }
  }

  return (
    <div>
      <div
        style={{
          width: '100px',
          backgroundColor: '#333',
          padding: '20px',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: '0 auto',
        }}
      >
        <div
          style={lightStyle(trafficLightColor === 'red' ? 'red' : 'gray')}
        ></div>
        <div
          style={lightStyle(trafficLightColor === 'yellow' ? 'yellow' : 'gray')}
        ></div>
        <div
          style={lightStyle(trafficLightColor === 'green' ? 'green' : 'gray')}
        ></div>
      </div>
      <button
        onClick={cycleLight}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Cycle Light
      </button>
    </div>
  );
}

function lightStyle(color) {
  return {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: color,
    margin: 'auto',
  };
}

export default TrafficLight;
