// data.js
import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/'
      );
      // const json = await response.json();
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, refetch };
};

export default useFetch;
