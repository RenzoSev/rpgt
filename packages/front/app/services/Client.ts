import axios, { AxiosInstance } from 'axios';

export type Request = AxiosInstance;

export class Client {
  // TODO: ADD ENV
  constructor(private baseURL = 'http://localhost:3000') {}

  create(): Request {
    return axios.create({ baseURL: this.baseURL });
  }
}
