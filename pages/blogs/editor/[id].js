import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import withAuth from 'hoc/WithAuth';
import { Editor } from 'slate-simple-editor';
import { useGetBlog, useUpdateBlog } from 'actions/blogs';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const BlogUpdate = ({ user, loading: loadingUser }) => {
  const router = useRouter();
  const { data } = useGetBlog(router.query.id);
  const [updateBlog, { loading, error }] = useUpdateBlog();

  const _updateBlog = async (data) => {
    await updateBlog(router.query.id, data);
    toast.success('Blog Updated');
  };

  if (error) {
    toast.error(error);
  }

  return (
    <BaseLayout user={user} loading={loadingUser}>
      <BasePage title="Blog Editor">
        {data && data.content && (
          <Editor
            initialContent={data.content}
            header="Update your Blog...."
            onSave={_updateBlog}
            loading={loading}
          />
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogUpdate)('admin');
