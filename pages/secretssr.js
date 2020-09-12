import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import { WithAuth } from 'utils/auth0';

const Secretssr = ({ user, title }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>Secret Page {user && user.name}</h1>
        <h3>{title}</h3>
      </BasePage>
    </BaseLayout>
  );
};

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: 'new Title' });
    }, 200);
  });
};

export const getServerSideProps = WithAuth(async () => {
  const title = await getTitle();
  return title;
})();

export default Secretssr;
