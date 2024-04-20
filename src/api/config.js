import axios from "axios";
const token = localStorage.getItem('token');
const instance = axios.create({

  baseURL: "http://localhost:8080/api/",
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
  //   timeout: 1000,
});

export default instance;