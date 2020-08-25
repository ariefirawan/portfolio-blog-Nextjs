import React from 'react';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useGetPostByID } from '../../actions';

import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';

const Portfolio = () => {
  const router = useRouter();
  const { data, error, loading } = useGetPostByID(router.query.id);
  return (
    <BaseLayout>
      <BasePage>
        {error && <div className="alert alert-danger">{error.message}</div>}
        {loading && <p>Loading data..</p>}
        {data && (
          <>
            <h1>Portfolio Page</h1>
            <h4>{data.title}</h4>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default withRouter(Portfolio);
