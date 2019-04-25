import React from 'react'
import styled from 'styled-components'
import deviceStorage from '../storage/device';
import routes from '../routes.json'
const Button = styled.TouchableOpacity`
    height: 25
    borderRadius: 25
    backgroundColor: #413941
    justifyContent: center
    alignItems: center
    marginTop: 15
`
const Text = styled.Text`
    font-size:16
`

const logout = async (navigation) => {
    await deviceStorage.deleteJWT()
    navigation.navigate(routes.login)
};

const LogoutButton = (props) => (
    <Button onClick={() => logout(props.navigation)}>
        <Text>Logout</Text>
    </Button>
)

export default LogoutButton