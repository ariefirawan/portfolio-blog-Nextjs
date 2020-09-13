import axios from 'axios';
import { useApiHandler } from './index';
import useSWR from 'swr';
import { fetcher } from './index';

const createBlog = (data) => axios.post('/api/v1/blogs', data);
const updateBlog = (id, data) => axios.patch(`/api/v1/blogs/${id}`, data);

export const useCreateBlog = () => useApiHandler(createBlog);
export const useUpdateBlog = () => useApiHandler(updateBlog);

export const useGetBlog = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/blogs/${id}` : null,
    fetcher
  );

  return { data, loading: !data && !error, error, ...rest };
};
