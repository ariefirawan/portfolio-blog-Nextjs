import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import Link from 'next/link';
import PortfolioApi from '../../lib/api/portfolios';

const Portfolios = ({ portfolios }) => {
  //default return dari swr itu data
  console.log(portfolios);
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
        <ul>{renderPosts([])}</ul>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
  };
}

export default Portfolios;
