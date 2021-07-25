import axios from 'axios';


const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/emevieira123/FakeApiDesafio2/produtos'
})

export default api;
