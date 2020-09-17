import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import withAuth from 'hoc/WithAuth';
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from 'actions/blogs';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const BlogEditor = ({ user, loading }) => {
  const router = useRouter();
  const [
    createBlog,
    { data: dataCreated, error, loading: loadingBlog },
  ] = useCreateBlog();
  const saveBlog = async (data) => {
    const created = await createBlog(data);
    router.push('/blogs/editor/[id]', `/blogs/editor/${created._id}`);
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage title="Blog Editor Page">
        <Editor onSave={saveBlog} loading={loadingBlog} />
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor)('admin');
