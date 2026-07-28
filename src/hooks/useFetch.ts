import { useState, useEffect } from 'react';
import api from '../services/api';

function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<T>(url);
        setData(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Unknown error'));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
}
export default useFetch;
