import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

const RedirectComponent = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    navigate("login");
  }, []);
  return <ActivityIndicator />;
};

const AuthProvider = ({ children }) => {
  const { loading, data } = useAuth();
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : data ? (
        children
      ) : (
        <RedirectComponent />
      )}
    </>
  );
};

export default AuthProvider;
