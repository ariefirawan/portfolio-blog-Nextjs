import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import withAuth from '../../hoc/WithAuth';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '../../components/PortfolioForm';
import { useCreatePortfolio } from '../../actions/portfolios';

const NewPortfolio = ({ user, loading: userLoading }) => {
  const [createPortfolio, { data, loading, error }] = useCreatePortfolio();
  const _createPortfolio = (data) => {
    createPortfolio(data);
  };

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={_createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(NewPortfolio)('admin');
