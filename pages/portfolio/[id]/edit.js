import BaseLayout from '../../../components/BaseLayout';
import BasePage from '../../../components/BasePage';
import withAuth from '../../../hoc/WithAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '../../../actions/portfolios';
import PortfolioForm from '../../../components/PortfolioForm';
import { Row, Col } from 'reactstrap';

const PortfolioEdit = ({ user }) => {
  const router = useRouter();
  const { data } = useGetPortfolio(router.query.id);
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="portfolio Edit">
        <Row>
          <Col md="8">
            {data && (
              <PortfolioForm
                onSubmit={(data) => {
                  alert(JSON.stringify(data));
                }}
                initialData={data}
              />
            )}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioEdit)('admin');
