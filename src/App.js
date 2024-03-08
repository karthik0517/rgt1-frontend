import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/data';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data && (
        <div>
          <p>{data.message}</p>
          {/* <p>{data.timestamp}</p> */}
        </div>
      )}
    </div>
  );
}


export default App;