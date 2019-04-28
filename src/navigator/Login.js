
import React from 'react'
import LoginScreen from '../screens/Login'
import { View, Text } from 'react-native'
const Login = (props) => (
    <LoginScreen {...props} />
)

Login.navigationOptions = {
    header: null
}

export default Login
