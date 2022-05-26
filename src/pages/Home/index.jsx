import axios from 'axios';
import React, { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    axios.get('http://localhost:8080/programmes').then((response) => console.log(response.data));
  }, []);
  return <div>Home</div>;
};
