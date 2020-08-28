import { getUser } from '../actions/user';
import Redirect from '../components/Redirect';

const WithAuth = (Component) => (props) => {
  const { data, loading } = getUser();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <Redirect to="/api/v1/login" />;
  } else {
    return <Component user={data} loading={loading} {...props} />;
  }
};

export default WithAuth;
