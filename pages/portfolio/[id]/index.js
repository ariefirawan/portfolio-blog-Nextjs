import React from 'react';
import PortfolioApi from 'lib/api/portfolios';
import { getUser } from 'actions/user';
import { formatDate } from 'helpers/functions';
import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';

const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = getUser();
  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        noWrapper
        indexPage
        title={`${portfolio.title}`}
        metaDescription={portfolio.description}
      >
        <div className="portfolio-detail">
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              <h1 class="cover-heading">{portfolio.title}</h1>
              <p class="lead dates">
                {formatDate(portfolio.startDate)} -{' '}
                {formatDate(portfolio.endDate) || 'Present'}
              </p>
              <p class="lead info mb-0">
                {portfolio.jobTitle} | {portfolio.company} |{' '}
                {portfolio.location}
              </p>
              <p class="lead">{portfolio.description}</p>
              <p class="lead">
                <a
                  href={portfolio.companyWebsite}
                  target="_"
                  class="btn btn-lg btn-secondary"
                >
                  Visit Company
                </a>
              </p>
            </main>
          </div>
        </div>
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
