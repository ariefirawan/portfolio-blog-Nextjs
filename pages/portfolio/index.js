import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';
import Link from 'next/link';
import PortfolioApi from '../../lib/api/portfolios';
import PortfilioCard from '../../components/PortfolioCard';
import { getUser } from '../../actions/user';
import { Row, Col } from 'reactstrap';

const Portfolios = ({ portfolios }) => {
  const { data, loading } = getUser();
  //default return dari swr itu data
  return (
    <BaseLayout user={data}>
      <BasePage header="Portfolios" className="portfolio-page">
        <Row>
          {portfolios.map((portfolio) => (
            <Col key={portfolio._id} md="4">
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
