import axios from 'axios';

function dataApi() {
  return axios.create({
    baseURL: 'http://data.fixer.io/api/',
  });
}

export default dataApi();
