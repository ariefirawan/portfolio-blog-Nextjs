import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import withAuth from 'hoc/WithAuth';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';

const BlogUpdate = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <Editor header="Update your Blog...." onSave={() => {}} />
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogUpdate)('admin');
