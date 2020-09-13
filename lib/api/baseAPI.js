import axios from 'axios';

class BaseAPI {
  constructor(accessToken, subUrl) {
    this.config = {};

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }

    this.apiUrl = process.env.API_URL + subUrl;
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  create(data) {
    return axios.post(`${this.apiUrl}`, data, this.config);
  }

  update(id, data) {
    return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
  }
}

export default BaseAPI;
