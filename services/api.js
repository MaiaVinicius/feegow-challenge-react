import axios from 'axios';

const BASEURL = 'http://clinic5.feegow.com.br/components/public/api';
const TOKEN = '';

const api = axios.create({ baseURL: BASEURL });

const facade = {};

facade.request = config => api.request(config);

['get', 'head'].forEach(method => {
  facade[method] = (url, config) => facade.request({ ...config, method, url });
});

['delete', 'post', 'put', 'patch'].forEach(method => {
  facade[method] = (url, data, config) =>
    facade.request({ ...config, method, url, data });
});

export const fetchSpecialties = () => {
  const url = `/specialties/list`;
  return facade.get(url, { headers: { 'x-access-token': TOKEN } });
};
