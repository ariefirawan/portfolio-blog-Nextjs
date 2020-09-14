import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import BlogApi from 'lib/api/blogs';
import auth0, { WithAuth } from 'utils/auth0';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import PortDropdown from 'components/Dropdown.js';
import Masthead from 'components/Masthead';

const Dashboard = ({ user, blogs }) => {
  const createOption = (status) => {
    return status === 'draft'
      ? { view: 'Publish Story', value: 'published' }
      : { view: 'Make a Draft', value: 'draft' };
  };

  const options = (blog) => {
    const option = createOption(blog.status);

    return [
      {
        key: `${blog._id}-published`,
        text: option.value,
        handlers: {
          onClick: () => {
            alert(`changing status to - ${option.value}`);
          },
        },
      },
      {
        key: `${blog._id}-delete`,
        text: option.value,
        handlers: {
          onClick: () => {
            alert(`clicking Delete - ${blog._id}`);
          },
        },
      },
    ];
  };

  const renderBlogs = (blogs, status) => (
    <ul className="user-blogs-list">
      {blogs
        .filter((blog) => blog.status === status)
        .map((blog) => (
          <li key={blog._id}>
            <Link href="/blogs/editor/[id]" as={`/blogs/editor/${blog._id}`}>
              <a>{blog.title}</a>
            </Link>
            <PortDropdown items={options(blog)} />
          </li>
        ))}
    </ul>
  );
  return (
    <BaseLayout navClass="transparent" user={user} loading={false}>
      <Masthead imagePath="/images/home-bg.jpg" />
      <BasePage className="blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
            {renderBlogs(blogs, 'published')}
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
            {renderBlogs(blogs, 'draft')}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps = WithAuth(async ({ req, res }) => {
  const { accessToken } = await auth0.getSession(req);
  const json = await new BlogApi(accessToken).getByUser();
  return { blogs: json.data };
})('admin');

export default Dashboard;
