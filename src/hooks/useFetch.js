import { useEffect, useState } from 'react';
import http from 'services/httpService';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    url && (async () => {
      setLoading(true);
      try {
        const { data } = await http.get(url);
        setData(data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
      setLoading(false);
    })();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    try {
      const { data } = await http.get(url);
      setData(data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
};

export default useFetch;
