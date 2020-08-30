import BaseLayout from '../components/BaseLayout';
import BasePage from '../components/BasePage';
import { getUser } from '../actions/user';

const Blog = () => {
  const { data, loading } = getUser();
  console.log(data);
  return (
    <BaseLayout>
      <BasePage>
        <h1>Blog Page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Blog;
