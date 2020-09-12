import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import { useRouter } from 'next/router';
import PortfolioApi from '../../lib/api/portfolios';
import PortfilioCard from '../../components/PortfolioCard';
import { getUser } from '../../actions/user';
import { Row, Col, Button } from 'reactstrap';
import { isAuthorized } from '../../utils/auth0';

const Portfolios = ({ portfolios }) => {
  const { data, loading } = getUser();
  const router = useRouter();
  //default return dari swr itu data
  return (
    <BaseLayout user={data}>
      <BasePage header="Portfolios" className="portfolio-page">
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
                {data && isAuthorized(data, 'admin') && (
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
                    <Button color="danger">Delete</Button>
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
