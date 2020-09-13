import BaseAPI from './baseAPI';

class BlogApi extends BaseAPI {
  constructor(accessToken) {
    super(accessToken, '/blogs');
  }
}

export default BlogApi;
