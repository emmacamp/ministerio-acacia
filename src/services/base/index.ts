import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

class BaseService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000, // 10 seconds
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // You can modify the request config here (e.g., add auth tokens)
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => {
        // You can modify the response data here
        return response;
      },
      (error) => {
        // Handle response errors here
        return Promise.reject(error);
      }
    );
  }

  protected get<R>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.get<R>(url, config).then((response) => response.data);
  }

  protected post<P, R>(url: string, data?: P, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.post<R>(url, data, config).then((response) => response.data);
  }

  protected put<P, R>(url: string, data?: P, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.put<R>(url, data, config).then((response) => response.data);
  }

  protected delete<R>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.delete<R>(url, config).then((response) => response.data);
  }
}

export default BaseService;
