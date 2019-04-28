import { graphql, commitMutation } from "react-relay"
import env from "../environment"

//Mutation Query
const mutation = graphql`
  mutation LoginEmailMutation($input: LoginEmailInput!) {
    LoginEmail(input: $input) {
      token
      error
    }
  }
`

const commit = ({ email, password }) => {
  const variables = {
    input: {
      email,
      password
    }
  }
  return new Promise((resolve, reject) => {
    commitMutation(env, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        resolve(response.LoginEmail)
      },
      onError: err => {
        console.log(err)
        alert('An unexpected error occurred')
      }
    })
  })
}

export default commit 