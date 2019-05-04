import React from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "../ui/Logo";
import commitLogin from "../mutations/LoginEmailMutation";
import { InputError, InputGroup } from "../ui";
import routes from "../navigator/routes.json";
import loginBg from "../assets/login-bg.jpg";

const LoginButton = styled.TouchableOpacity`
    align-self: stretch
    height: 50
    border-radius: 25
    background-color: #661141
    border: 1px solid #440027
    justify-content: center
    align-items: center
    margin-top: 15
`;

const LoginPlaceholderText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

const Wrapper = styled.ImageBackground.attrs({
  source: loginBg
})`
    flex: 1
    background-color: #98009D
    justify-content: center
    padding-horizontal: 35
`;
const LoginInput = styled.TextInput`
    font-size: 18
    border-radius: 25
    background-color: #ffffff
    border-width: 0.5
    border-color: #cccccc
    align-self: stretch
    text-align: center
`;

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required")
});

const Login = ({ navigation }) => {
  const handleSubmit = async values => {
    const { token } = await commitLogin(values);
    navigation.navigate(routes.home);
  };
  return (
    <Wrapper>
      <KeyboardAvoidingView behavior="padding" enabled>
        <Logo />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleBlur, values, handleSubmit }) => (
            <>
              <InputGroup>
                <InputError>
                  <ErrorMessage name="email" />
                </InputError>
                <LoginInput
                  placeholder="E-mail"
                  autoCapitalize="none"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </InputGroup>

              <InputGroup>
                <InputError>
                  <ErrorMessage name="password" />
                </InputError>
                <LoginInput
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </InputGroup>

              <LoginButton onPress={handleSubmit} title="Submit">
                <LoginPlaceholderText>Login</LoginPlaceholderText>
              </LoginButton>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default Login;
