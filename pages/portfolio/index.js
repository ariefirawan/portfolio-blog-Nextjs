import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import { useRouter } from 'next/router';
import PortfolioApi from '../../lib/api/portfolios';
import PortfilioCard from '../../components/PortfolioCard';
import { getUser } from '../../actions/user';
import { Row, Col } from 'reactstrap';

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
              <PortfilioCard portfolio={portfolio} />
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
