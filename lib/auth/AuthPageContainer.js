import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

const RedirectComponent = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    navigate("main");
  }, []);
  return <ActivityIndicator />;
};

const AuthPageContainer = ({ children }) => {
  const { loading, data } = useAuth();
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : data ? (
        <RedirectComponent />
      ) : (
        children
      )}
    </>
  );
};

export default AuthPageContainer;
