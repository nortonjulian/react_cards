// hooks.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFlip = () => {
  const [isFlipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!isFlipped);
  };

  return [isFlipped, toggleFlip];
};

export const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, [url]);

  return [data, addData];
};
