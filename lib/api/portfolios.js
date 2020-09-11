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
}

export default PortfolioApi;
