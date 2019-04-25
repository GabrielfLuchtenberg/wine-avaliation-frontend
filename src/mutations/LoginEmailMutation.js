import { graphql, commitMutation } from "react-relay";
import env from "../environment";

//Mutation Query
const mutation = graphql`
  mutation LoginEmailMutation($input: LoginEmailInput!) {
    LoginEmail(input: $input) {
      token
      error
    }
  }
`;

const commit = ({ email, password }) => {
  const variables = {
    input: {
      email,
      password
    }
  };
  return new Promise((resolve, reject) => {
    commitMutation(env, { //Passing our enviroment
      mutation, //Here we pass our GraphQL mutation
      variables, //Passing our parameters
      onCompleted: (response, errors) => {
        resolve(response.LoginEmail); // here you can resolve the User connection updated by the mutation and update your render
        // alert('A new user has been added') // showing a alert to show that a new user has been added
      },
      onError: err => {
        console.log(err)
        alert('An unexpected eeerror occurred')
      } // showing an alert to show that something happened in the backend
    });
  });
};

export default commit; 