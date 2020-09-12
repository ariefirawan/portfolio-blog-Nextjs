import BaseLayout from '../../../components/BaseLayout';
import BasePage from '../../../components/BasePage';
import withAuth from '../../../hoc/WithAuth';
import { useRouter } from 'next/router';
import {
  useUpdatePortfolio,
  useGetPortfolio,
} from '../../../actions/portfolios';
import PortfolioForm from '../../../components/PortfolioForm';
import { Row, Col } from 'reactstrap';

const PortfolioEdit = ({ user }) => {
  const router = useRouter();
  const [updatePortfolio, { data, error, loading }] = useUpdatePortfolio();
  const { data: initialData } = useGetPortfolio(router.query.id);

  const _updatePortfolio = (data) => {
    updatePortfolio(router.query.id, data);
  };
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="portfolio Edit">
        <Row>
          <Col md="8">
            {initialData && (
              <PortfolioForm
                onSubmit={_updatePortfolio}
                initialData={initialData}
              />
            )}
            {error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioEdit)('admin');
