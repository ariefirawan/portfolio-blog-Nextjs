import axios from 'axios';

class BlogApi {
  constructor(accessToken) {
    this.config = {};

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
  }

  getAll() {
    return axios.get('http://localhost:3001/api/v1/blogs');
  }

  getById(id) {
    return axios.get(`http://localhost:3001/api/v1/blogs/${id}`);
  }

  createBlog(data) {
    return axios.post('http://localhost:3001/api/v1/blogs', data, this.config);
  }

  update(id, data) {
    return axios.patch(
      `http://localhost:3001/api/v1/blogs/${id}`,
      data,
      this.config
    );
  }
}

export default BlogApi;
