import React from 'react';
import Button from './components/Button'

function App() {
  return (
    <div>
      <h1>Manifest Frontend Intern Code challenge 2025</h1>
      <p>Show off your components here</p>
      
      <div style={{ padding: '20px' }}>
        
        <h2>Primary Buttons</h2>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ margin: '10px' }}>
            <h4>Active</h4>
            <Button variant="primary">Continue</Button>
          </div>
          <div style={{ margin: '10px' }}>
            <h4>Disabled</h4>
            <Button variant="primary" disabled={true}>Continue</Button>
          </div>
          <div style={{ margin: '10px' }}>
            <h4>Hover State</h4>
            <p style={{ fontSize: '12px', color: '#666' }}>Hover over button to see effect</p>
            <Button variant="primary">Continue</Button>
          </div>
        </div>

        <h2>Secondary Buttons</h2>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ margin: '10px' }}>
            <h4>Active</h4>
            <Button variant="secondary">Continue</Button>
          </div>
          <div style={{ margin: '10px' }}>
            <h4>Disabled</h4>
            <Button variant="secondary" disabled={true}>Continue</Button>
          </div>
          <div style={{ margin: '10px' }}>
            <h4>Hover State</h4>
            <p style={{ fontSize: '12px', color: '#666' }}>Hover over button to see effect</p>
            <Button variant="secondary">Continue</Button>
          </div>
        </div>

        <h2>Text Buttons</h2>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ margin: '10px' }}>
            <h4>Active</h4>
            <Button variant="text">Continue</Button>
          </div>
          <div style={{ margin: '10px' }}>
            <h4>Disabled</h4>
            <Button variant="text" disabled={true}>Continue</Button>
          </div>
          <div style={{ margin: '10px' }}>
            <h4>Hover State</h4>
            <p style={{ fontSize: '12px', color: '#666' }}>Hover over button to see effect</p>
            <Button variant="text">Continue</Button>
          </div>
        </div>

        <div style={{ backgroundColor: '#2E2D29', padding: '20px' }}>
          <h2 style={{ color: 'white' }}>Inverted Buttons (Dark Background)</h2>
          <div style={{ margin: '10px' }}>
            <h4 style={{ color: 'white' }}>Primary Inverted</h4>
            <Button variant="primary" inverted={true}>Continue</Button>
          </div>
          <div style={{ margin: '10px' }}>
            <h4 style={{ color: 'white' }}>Secondary Inverted</h4>
            <Button variant="secondary" inverted={true}>Continue</Button>
          </div>
          <div style={{ margin: '10px' }}>
            <h4 style={{ color: 'white' }}>Text Inverted</h4>
            <Button variant="text" inverted={true}>Continue</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App