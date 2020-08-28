import useSWR from 'swr';
import { fetcher } from './index';

export const getUser = () => {
  const { data, error, ...rest } = useSWR('/api/v1/me', fetcher);

  return { data, error, loading: !data && !error, ...rest };
};
