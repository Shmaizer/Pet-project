import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  // получение GET маршрута с сервера Express, который соответствует GET из server.js 
  useEffect(() => {
    fetch('/api')
    .then(response=>response.json())
    .then(response=>setData(response.message))
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            !data ? "loading...." : data
          }
        </p>
      </header>
      
    </div>
    
  );
}

export default App;
