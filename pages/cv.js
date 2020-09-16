import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import { getUser } from 'actions/user';
import { Row, Col } from 'reactstrap';

const Cv = () => {
  const { data, loading } = getUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <iframe
              style={{ width: '100%', height: '800px' }}
              src="/cv_with_photo_.pdf"
            />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default Cv;
