import axios from 'axios';

class PortfolioApi {
  constructor(accessToken) {
    this.config = {};

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
  }

  getAll() {
    return axios.get('http://localhost:3001/api/v1/portfolios');
  }

  getById(id) {
    return axios.get(`http://localhost:3001/api/v1/portfolios/${id}`);
  }

  createPortfolio(data) {
    return axios.post(
      'http://localhost:3001/api/v1/portfolios',
      data,
      this.config
    );
  }

  update(id, data) {
    return axios.patch(
      `http://localhost:3001/api/v1/portfolios/${id}`,
      data,
      this.config
    );
  }

  delete(id) {
    return axios.delete(
      `http://localhost:3001/api/v1/portfolios/${id}`,
      this.config
    );
  }
}

export default PortfolioApi;
