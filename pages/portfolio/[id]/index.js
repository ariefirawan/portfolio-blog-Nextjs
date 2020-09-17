import React from 'react';
import PortfolioApi from 'lib/api/portfolios';

import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';

const Portfolio = ({ portfolio }) => {
  return (
    <BaseLayout>
      <BasePage
        title={`${portfolio.title}`}
        metaDescription={portfolio.description}
      >
        {JSON.stringify(portfolio)}
      </BasePage>
    </BaseLayout>
  );
};

export async function getServerSideProps({ query }) {
  const json = await new PortfolioApi().getById(query.id);
  const portfolio = json.data;

  return { props: { portfolio } };
}

export default Portfolio;
