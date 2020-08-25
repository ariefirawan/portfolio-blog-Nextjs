import React from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';

import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';

const Portfolio = ({ data }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>Portfolio Page</h1>
        <h4>{data.title}</h4>
      </BasePage>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async ({ query }) => {
  const data = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    .then((res) => res.data);

  return { data };
};

export default withRouter(Portfolio);
