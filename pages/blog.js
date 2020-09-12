import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import WithAuth from 'hoc/WithAuth';

const Blog = () => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>Blog Page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default WithAuth(Blog)();
