import axios from "axios";
import Constants from "expo-constants";

const useRefreshToken = async (t) => {
  return axios.get(`${Constants.expoConfig.extra.apiBaseUrl}/auth/refresh`, {
    headers: { Authorization: t },
  });
};

export default useRefreshToken;
