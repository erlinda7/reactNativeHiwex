import axios from 'axios';
import { Service } from 'axios-middleware';

const base = 'http://localhost:5000/blog-30cdb/us-central1/'; // poner la url base de la cloud functions

class Register {
  constructor() {
    if (typeof Register.instance === 'object') return Register.instance;
    Register.instance = this;
  }

  onResponse(response) {
    const res = JSON.parse(response.data);
    return res;
  }
}
class Request {
  constructor(url, baseURL) {
    this.url = url;
    this.baseURL = baseURL || base;
    this.request = axios.create({ baseURL: this.baseURL });
    const service = new Service(this.request);
    service.register(new Register());
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