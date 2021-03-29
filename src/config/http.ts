import { API_AUTH } from '@env';
import axios, { AxiosInstance } from 'axios';

type InstancesType = {
  auth: AxiosInstance;
  content: AxiosInstance;
};

const instances: InstancesType = {
  auth: axios.create({ baseURL: API_AUTH, timeout: 30000 }),
  content: axios.create(),
};

type InstanceNameType = keyof typeof instances;

export const httpClient = (instanceName: InstanceNameType): AxiosInstance => {
  return instances[instanceName] || null;
};
