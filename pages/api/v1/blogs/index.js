import BlogApi from 'lib/api/blogs';
import auth0 from 'utils/auth0';

export default async function createBlog(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    // console.log(accessToken);
    const blogData = req.body;
    const json = await new BlogApi(accessToken).createBlog(blogData);
    return res.json(json.data);
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}
