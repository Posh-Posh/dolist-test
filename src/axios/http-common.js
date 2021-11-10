import axios from 'axios';

const HTTP = axios.create({
  baseURL: `https://api.thecatapi.com/v1/`,
  headers: {
    "Content-type": "application/json",
    common : {
        "x-api-key": "fa9a8838-5b42-4285-ac8a-17ced55d4a59"
    }
  }
})

export default HTTP;