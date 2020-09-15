import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import Masthead from 'components/Masthead';
import { getUser } from 'actions/user';
import { Row, Col } from 'reactstrap';
import BlogApi from 'lib/api/blogs';
import BlogItem from 'components/BlogItem';

const Blog = ({ blogs }) => {
  const { data, loading } = getUser();
  return (
    <BaseLayout
      navClass="transparent"
      className="blog-listing-page"
      user={data}
      loading={loading}
    >
      <Masthead imagePath="/images/home-bg.jpg">
        <h1>Fresh Blogs</h1>
        <span className="subheading">Programming, travelling...</span>
      </Masthead>
      <BasePage className="blog-body">
        <Row>
          {blogs.map((blog) => (
            <Col key={blog.id} md="10" lg="8" className="mx-auto">
              <BlogItem blog={blog} />
              <hr></hr>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const json = await new BlogApi().getAll();
  return {
    props: { blogs: json.data },
    // unstable_revalidate: 1,
  };
}

export default Blog;
