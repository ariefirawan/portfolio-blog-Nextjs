import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import Link from 'next/link';
import { useGetPosts } from '../../actions';

const Portfolios = () => {
  //default return dari swr itu data
  const { data, error, loading } = useGetPosts();

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id} style={{ fontSize: '20px' }}>
        <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        {loading && <p>Loading data...</p>}
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
