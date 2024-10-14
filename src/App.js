// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import { fetchApiHome, fetchData } from './services/api';

function App() {
  const [apiMessage, setApiMessage] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadApiHome = async () => {
      try {
        const data = await fetchApiHome();
        setApiMessage(data.message);
      } catch (error) {
        setApiMessage('Failed to load API message');
      }
    };

    const loadData = async () => {
      try {
        const data = await fetchData();
        setItems(data.items);
      } catch (error) {
        console.error('Failed to load items');
      }
    };

    loadApiHome();
    loadData();
  }, []);

  return (
    <div className="App">
      <h1>React + Django App</h1>
      <p>{apiMessage}</p>
      <h2>Items from API:</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;