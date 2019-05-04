import React from "react";
import LoginScreen from "../screens/Login";

const Login = props => <LoginScreen {...props} />;

Login.navigationOptions = {
  header: null
};

export default Login;
