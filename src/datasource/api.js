import axios from 'axios';

export const fetchData = data => {
  console.warn('data', data);
  return axios.get('https://api.publicapis.org/entries');
};
