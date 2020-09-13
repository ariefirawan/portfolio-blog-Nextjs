import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import { WithAuth } from 'utils/auth0';
import { Row, Col } from 'reactstrap';
import Masthead from 'components/Masthead';

const Dashboard = ({ user }) => {
  return (
    <BaseLayout navClass="transparent" user={user} loading={false}>
      <Masthead imagePath="/images/home-bg.jpg" />
      <BasePage className="blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const getServerSideProps = WithAuth()('admin');

export default Dashboard;
