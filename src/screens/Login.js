import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Logo from '../UI/Logo'
import commitLogin from '../mutations/LoginEmailMutation'
import { InputError, InputGroup } from '../UI'
import routes from '../navigator/routes.json'
import loginBg from '../assets/login-bg.jpg'

const LoginButton = styled.TouchableOpacity`
    alignSelf: stretch
    height: 50
    borderRadius: 25
    backgroundColor: #661141
    border: 1px solid #440027
    justifyContent: center
    alignItems: center
    marginTop: 15
`

const LoginPlaceholderText = styled.Text`
    color: #ffffff;
    font-size: 18px;
`

const Wrapper = styled.ImageBackground.attrs({
    source: loginBg
})`
    flex: 1
    backgroundColor: #98009D
    justifyContent: center
    paddingHorizontal: 35
`
const LoginInput = styled.TextInput`
    fontSize: 18
    borderRadius: 25
    backgroundColor: #ffffff
    borderWidth: 0.5
    borderColor: #cccccc
    alignSelf: stretch
    textAlign: center
`

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
})

const Login = (props) => {
    async function handleSubmit(values) {
        const { token } = await commitLogin(values)
        props.navigation.navigate(routes.home)
    }
    return (
        <Wrapper>
            <Logo />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
            >
                {props => (
                    <Fragment>
                        <InputGroup>
                            <InputError><ErrorMessage name="email" /></InputError>
                            <LoginInput
                                placeholder="E-mail"
                                autoCapitalize="none"
                                onChangeText={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                value={props.values.email}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputError><ErrorMessage name="password" /></InputError>
                            <LoginInput
                                placeholder="Password"
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                value={props.values.password}
                            />
                        </InputGroup>

                        <LoginButton onPress={props.handleSubmit} title="Submit" >
                            <LoginPlaceholderText>Login</LoginPlaceholderText>
                        </LoginButton>
                    </Fragment>
                )}
            </Formik>
        </Wrapper>
    )
}


export default Login