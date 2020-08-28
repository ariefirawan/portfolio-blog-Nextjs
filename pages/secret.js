import BaseLayout from '../components/BaseLayout';
import BasePage from '../components/BasePage';
import WithAuth from '../hoc/WithAuth';

const Secret = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>Secret Page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default WithAuth(Secret);
