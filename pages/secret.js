import { getUser } from '../actions/user';
import Redirect from '../components/Redirect';
import BaseLayout from '../components/BaseLayout';
import BasePage from '../components/BasePage';

const Secret = () => {
  const { data, loading } = getUser();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <Redirect to="/api/v1/login" />;
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
