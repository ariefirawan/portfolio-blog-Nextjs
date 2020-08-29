import BaseLayout from '../components/BaseLayout';
import BasePage from '../components/BasePage';
import auth0 from '../utils/auth0';

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
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login',
    });
    res.end();
    return;
  }
  return { props: { user: session.user } };
};

export default Secretssr;
