import axios from 'axios';
import BaseAPI from './baseAPI';

class PortfolioApi extends BaseAPI {
  constructor(accessToken) {
    super(accessToken, '/portfolios');
  }

  getAll() {
    return axios.get(this.apiUrl);
  }

  delete(id) {
    return axios.delete(`${this.apiUrl}/${id}`, this.config);
  }
}

export default PortfolioApi;
