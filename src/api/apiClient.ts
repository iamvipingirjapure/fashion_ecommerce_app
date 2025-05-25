import axios, {
    AxiosInstance,
    Method,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
  } from 'axios';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const API_BASE_URL = '';
  
  const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  apiClient.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, error => Promise.reject(error));
  
  apiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        console.warn('Unauthorized - maybe log out user');
      }
  
      console.error('API Error:', error.response?.data || error.message);
      return Promise.reject(error.response?.data || { message: 'An unknown error occurred' });
    }
  );
  
  export const setAuthToken = async (token: string | null): Promise<void> => {
    if (token) {
      await AsyncStorage.setItem('accessToken', token);
    } else {
      await AsyncStorage.removeItem('accessToken');
    }
  };
  
  export const apiRequest = async <T = any>(
    method: Method,
    endpoint: string,
    data: Record<string, any> | FormData = {},
    params: Record<string, any> = {},
    customHeaders: Record<string, string> = {},
  ): Promise<T> => {
    const isFormData = data instanceof FormData;
    const headers = {
      ...(isFormData ? { 'Content-Type': 'multipart/form-data' } : {}),
      ...customHeaders,
    };
  
    const config: AxiosRequestConfig = {
      method,
      url: endpoint,
      data,
      params,
      headers,
    };
  
    const response: AxiosResponse<T> = await apiClient(config);
    return response.data;
  };
  
  export default apiClient;
  