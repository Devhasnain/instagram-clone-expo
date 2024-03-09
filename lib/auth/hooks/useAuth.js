import { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import axios from "axios";
let url = "http://192.168.1.109:3000/auth/refresh";

const useAuth = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await useToken();
        const response = await axios.get(url, {
          headers: { Authorization: token },
        });
        if (!response.status === 200) {
          throw new Error("Network response was not ok");
        }

        const result = await response.data;
        setData(result);
      } catch (error) {
        setError(error);
        console.log(error?.message)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useAuth;
