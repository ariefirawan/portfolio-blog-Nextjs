import { useState, useEffect } from 'react';

export const useGetPosts = (url) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function getPosts() {
      const res = await fetch(url);
      const result = await res.json();
      if (res.status !== 200) {
        setError(result);
      } else {
        setPosts(result);
      }
    }

    url && getPosts();
  }, [url]);

  return { posts, error };
};
