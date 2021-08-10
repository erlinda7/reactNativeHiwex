import axios from 'axios';

const base = 'https://pokemon-go1.p.rapidapi.com';
const headers = {
  'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
  'x-rapidapi-key': 'cfa115aad1msh305ef3ffc77f4c4p15fe57jsn6029c6a90445',
  useQueryString: true,
};

class Request {
  constructor(url, baseURL) {
    this.url = url;
    this.baseURL = baseURL || base;
    this.request = axios.create({ baseURL: this.baseURL, headers });
  }

  get() {
    return this.request({ url: this.url });
  }

  getOne(id) {
    return this.request({ url: this.url + '/' + id });
  }

  post(value) {
    return this.request({ url: this.url, data: value, method: 'post' });
  }

  put(value, id) {
    return this.request({
      url: this.url + '/' + id,
      data: value,
      method: 'put',
    });
  }

  delete(id) {
    return this.request({ url: this.url + '/' + id, method: 'delete' });
  }
} 

export default Request;


//video 29