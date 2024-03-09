import axios from "axios";
import  Constants from "expo-constants";

const useSign = async (email, password) => {
  return axios.post(`${Constants.expoConfig.extra.apiBaseUrl}/auth/login`, { email, password });
};

const useSignUp = async (username, email, password) => {
  return axios.post(`${Constants.expoConfig.extra.apiBaseUrl}/auth/register`, {username,email,password});
};

export { useSign, useSignUp };
