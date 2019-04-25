// import React from 'react'

import React from 'react';
import { Text } from 'react-native';
import { QueryRenderer, graphql } from "react-relay";
import styled from 'styled-components'
import env from '../environment';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`

const Welcome = styled.Text`
    font-size: 20px;
    text-align: center;
    margin: 10px;
`

const HomeComponent = props => (
    <Container >
        <Welcome>Home   sScreen</Welcome>
        {
            props.me &&
            props.me.name
        }
    </Container>
)

HomeComponent.navigationOptions = {
    title: "Home",
}

const query = graphql`
    query HomeQuery {
        users {
            edges {
                node {
                    name
                }
            }
        }
    }
`;

export default () => <QueryRenderer
    environment={env} //Here is the enviroment that we configured before
    query={query} //And here goes your GraphQL query
    render={({ error, props }) => {
        if (error) {
            return (<Text>Error</Text>);
        } else if (props) {
            return (<HomeComponent {...props} />);
        }
        return (<Text>loading</Text>);
    }
    }
/>;