import React from 'react';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useGetPosts } from '../../actions';

import BaseLayout from '../../components/BaseLayout';
import BasePage from '../../components/BasePage';

const Portfolio = () => {
  const router = useRouter();
  const { posts: data, error, loading } = useGetPosts(
    router.query.id ? `/api/v1/posts/${router.query.id}` : null
  );
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
