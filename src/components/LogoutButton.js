import React from "react";
import styled from "styled-components";
import routes from "../navigator/routes.json";

const Button = styled.TouchableOpacity`
    height: 25
    borderRadius: 25
    backgroundColor: #413941
    justifyContent: center
    alignItems: center
    marginTop: 15
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
