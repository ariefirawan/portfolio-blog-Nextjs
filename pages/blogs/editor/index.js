import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import withAuth from 'hoc/WithAuth';
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from 'actions/blogs';
import { toast } from 'react-toastify';

const BlogEditor = ({ user, loading }) => {
  const [createBlog, { data: dataCreated, error }] = useCreateBlog();
  const saveBlog = async (data) => {
    await createBlog(data);
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <Editor onSave={saveBlog} />
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor)('admin');
