import { useState } from 'react';

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export function useApiHandler(apicall) {
  const [reqState, setReqState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const handler = async (...data) => {
    setReqState({
      data: null,
      loading: false,
      error: null,
    });

    try {
      const json = await apicall(...data);
      setReqState({
        data: json.data,
        loading: false,
        error: null,
      });
    } catch (e) {
      const message =
        (e.response && e.response.message) || 'ops..., something went wrong';
      setReqState({
        data: null,
        loading: false,
        error: message,
      });
    }
  };

  return [handler, { ...reqState }];
}
