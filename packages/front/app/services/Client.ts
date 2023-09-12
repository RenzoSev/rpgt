import axios, { AxiosInstance } from 'axios';

export type ClientRequest = AxiosInstance;

export class Client {
  // TODO: ADD ENV
  constructor(private baseURL = 'http://localhost:3000') {}

  create(): ClientRequest {
    return axios.create({ baseURL: this.baseURL });
  }
}
