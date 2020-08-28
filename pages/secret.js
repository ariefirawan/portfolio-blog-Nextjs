import { useRouter } from 'next/router';

import { getUser } from '../actions/user';
import BaseLayout from '../components/BaseLayout';
import BasePage from '../components/BasePage';

const Secret = () => {
  const router = useRouter();
  const { data, loading } = getUser();

  if (loading) {
    return <p>Loading...</p>
  }
  if (!data) {
    router.push('/api/v1/login');
    return null;
  } else {
    return (
      <BaseLayout>
        <BasePage>
          <h1>Secret Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
};

export default Secret;
