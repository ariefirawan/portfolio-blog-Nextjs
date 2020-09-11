import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import withAuth from '../../hoc/WithAuth';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '../../components/PortfolioForm';
import { useCreatePortfolio } from '../../actions/portfolios';
import Redirect from '../../components/Redirect';

const NewPortfolio = ({ user, loading: userLoading }) => {
  const [createPortfolio, { data, loading, error }] = useCreatePortfolio();

  if (data) {
    return <Redirect to="/portfolio" />;
  }
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={createPortfolio} />
            {error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(NewPortfolio)('admin');
