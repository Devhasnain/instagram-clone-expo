import React from "react";
import AuthPageLayout from "../../components/auth/AuthPageLayout";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthPageLayout>
        <LoginForm/>
    </AuthPageLayout>
  );
};

export default Login;
