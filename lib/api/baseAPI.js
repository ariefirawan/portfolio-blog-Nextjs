import axios from 'axios';
import { get } from 'react-hook-form';

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

  getAll() {
    return axios.get(this.apiUrl);
  }

  getBySlug(slug) {
    return axios.get(`${this.apiUrl}/s/${slug}`);
  }

  getByUser() {
    return axios.get(`${this.apiUrl}/me`, this.config);
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
