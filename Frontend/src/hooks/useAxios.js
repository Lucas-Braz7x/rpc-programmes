import { useState, useEffect } from 'react';
import { api } from '../services/api';

export const useAxios = (endpoint) => {
  const [data, setData] = useState([]);
  const [requestError, setRequestError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(endpoint)
      .then((response) => setData(response.data.data))
      .catch((e) => setRequestError(e))
      .finally(() => setLoading(false));
  }, []);

  return { data, requestError, loading };
};
