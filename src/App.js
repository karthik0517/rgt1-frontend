// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendResponse, setBackendResponse] = useState('');
  const [timestamp, setTimestamp] = useState('');
  

  useEffect(() => {
    // Fetch data from backend API
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/data';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setBackendResponse(data.message);
        setTimestamp(data.timestamp)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Frontend App</h1>
        <p>{backendResponse}</p>
        <p>Timestamp: {timestamp}</p> {/* Display the timestamp */}
      </header>
    </div>
  );
}

export default App;
