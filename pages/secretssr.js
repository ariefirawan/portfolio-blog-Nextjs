import BaseLayout from '../components/BaseLayout';
import BasePage from '../components/BasePage';
import { authorizeUser } from '../utils/auth0';

const Secretssr = ({ user }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>Secret Page {user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const user = await authorizeUser(req, res);
  return { props: { user } };
};

export default Secretssr;
