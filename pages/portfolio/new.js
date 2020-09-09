import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import withAuth from '../../hoc/WithAuth';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '../../components/PortfolioForm';

const NewPortfolio = ({ user, loading }) => {
  const createPortfolio = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(NewPortfolio)('admin');
