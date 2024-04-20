import axios from 'axios';
import instance from './config';

const BASE_URL = 'http://localhost:8080/api/auth';

export const signIn = async (login) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, login);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const signUp = async (dataReq) => {
  try {
    const res = await axios.post(`${BASE_URL}/register`, dataReq);
    return res.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

const authApi = {
  SignIn: async (login) => {
    return await instance.post(`/auth/login`, login)
  },
  SignUp: async (dataReq) => {
    return await instance.post(`/auth/register`, dataReq)
  }
}

export default authApi;