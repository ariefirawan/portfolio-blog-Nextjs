import { useState } from 'react';
import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import { useRouter } from 'next/router';
import PortfolioApi from '../../lib/api/portfolios';
import PortfilioCard from '../../components/PortfolioCard';
import { getUser } from '../../actions/user';
import { useDeletePortfolio } from '../../actions/portfolios';
import { Row, Col, Button } from 'reactstrap';
import { isAuthorized } from '../../utils/auth0';

const Portfolios = ({ portfolios: initialPortfolios }) => {
  const [portfolios, setPorfolios] = useState(initialPortfolios);
  const [deletePortfolio, { data, error }] = useDeletePortfolio();
  const { data: dataU, loading } = getUser();
  const router = useRouter();

  const _deletePortfolio = async (e, id) => {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure want to delete?');
    if (isConfirm) {
      await deletePortfolio(id);
      setPorfolios(portfolios.filter((p) => p._id !== id));
    }
  };
  //default return dari swr itu data
  return (
    <BaseLayout user={dataU} loading={loading}>
      <BasePage header="Portfolios" className="portfolio-page">
        {error && <div className="alert alert-danger mt-2">{error}</div>}
        <Row>
          {portfolios.map((portfolio) => (
            <Col
              onClick={() => {
                router.push('/portfolio/[id]', `/portfolio/${portfolio._id}`);
              }}
              key={portfolio._id}
              md="4"
            >
              <PortfilioCard portfolio={portfolio}>
                {dataU && (
                  <>
                    <Button
                      className="mr-2"
                      color="warning"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          '/portfolio/[id]/edit',
                          `/portfolio/${portfolio._id}/edit`
                        );
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfilioCard>
            </Col>
          ))}
        </Row>
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
