import axios from 'axios';

class PortfolioApi {
  getAll() {
    return axios.get('http://localhost:3001/api/v1/portfolios');
  }

  getById(id) {
    return axios.get(`http://localhost:3001/api/v1/portfolios/${id}`);
  }

  createPortfolio(data) {
    return axios.post('http://localhost:3001/api/v1/portfolios', data);
  }
}

export default PortfolioApi;
