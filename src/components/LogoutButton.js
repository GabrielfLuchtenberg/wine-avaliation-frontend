import React from "react";
import styled from "styled-components";
import routes from "../navigator/routes.json";

const Button = styled.TouchableOpacity`
    height: 25
    border-radius: 25
    background-color: #413941
    justify-content: center
    align-items: center
    margin-top: 15
`;
const Text = styled.Text`
  font-size: 16;
`;

const logout = async navigation => {
  navigation.navigate(routes.login);
};

const LogoutButton = ({ navigation }) => (
  <Button onClick={() => logout(navigation)}>
    <Text>Logout</Text>
  </Button>
);

export default LogoutButton;
