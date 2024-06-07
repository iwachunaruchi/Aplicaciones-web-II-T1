
// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// class HttpClient {
//   private client: AxiosInstance;

//   constructor(baseURL: string) {
//     this.client = axios.create({ baseURL });
//   }

//   public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     return this.client.get<T>(url, config);
//   }

//   public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     return this.client.post<T>(url, data, config);
//   }

//   public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     return this.client.put<T>(url, data, config);
//   }

//   public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     return this.client.delete<T>(url, config);
//   }
// }

// const httpClient = new HttpClient('http://localhost:3000');

// export default httpClient;

const superagent = require('superagent');

const get = async (url: string, params: any = {}) => {
  try {
    const response = await superagent.get(url).query(params);
    return response.body;
  } catch (error) {
    throw new Error('error');
  }
};

const post = async (url: string, data: any) => {
  try {
    const response = await superagent.post(url).send(data);
    return response.body;
  } catch (error) {
    throw new Error('error');
  }
};

const put = async (url: string, data: any) => {
  try {
    const response = await superagent.put(url).send(data);
    return response.body;
  } catch (error) {
    throw new Error('error');
  }
};

const del = async (url: string) => {
  try {
    const response = await superagent.del(url);
    return response.body;
  } catch (error) {
    throw new Error('error');
  }
};

export default { get, post, put, del };
