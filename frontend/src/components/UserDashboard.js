import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      {error && <p>Error: {error.message}</p>}
      {data && typeof data === 'object' ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default UserDashboard;
