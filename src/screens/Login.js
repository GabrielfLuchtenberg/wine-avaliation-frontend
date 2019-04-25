import React, { Fragment } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import Logo from '../UI/logo';
import commitLogin from '../mutations/LoginEmailMutation'
import { InputError, InputGroup } from '../UI';
import routes from '../routes.json'


const LoginButton = styled.TouchableOpacity`
    alignSelf: stretch
    height: 50
    borderRadius: 25
    backgroundColor: #413941
    justifyContent: center
    alignItems: center
    marginTop: 15
`

const LoginPlaceholderText = styled.Text`
    color: #ffffff
`

const Wrapper = styled.View`
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

const Login = (props) => (
    <Wrapper>
        <Logo />
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async values => {
                const { token } = await commitLogin(values)
                props.navigation.navigate(routes.home)
            }}
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

Login.navigationOptions = {
    header: null
}

export default Login;