import React, { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState(null);
  // получение GET маршрута с сервера Express, который соответствует GET из server.js 
  useEffect(() => {
    fetch('/api')
    .then(response=>response.json())
    .then(response=>setData(response.message))
  }, [])
  

  return (
    <p>
          {
            !data ? "loading...." : data
          }
        </p>
    
  );
}

export default App;
