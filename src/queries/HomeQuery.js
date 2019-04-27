// import React from 'react'

import React from 'react';
import { Text } from 'react-native';
import { QueryRenderer, graphql } from "react-relay";
import styled from 'styled-components'
import env from '../environment';
import Card from '../UI/Card';
import Wine from '../assets/wine.jpg'

const Container = styled.View`
  flex: 1;
  padding:15px 0;
  align-items: center;
  flex-wrap: wrap;

`

const Image = styled.Image.attrs({
    source: Wine,
})`
    align-self: center;
    height: 100%;
    width: 125px;
    border-width: 1;
  `;
const WineContentContainer = styled.View`
    padding: 5px 10px;
    flex-shrink: 1;

`
const WineTitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1px;
`

const WineDescription = styled.Text`
`
const ArrowIconContainer = styled.View`
    width: 15%;
    background:black;
`

const HomeComponent = props => (
    <Container >
        <Card>
            <Image resizeMode="stretch" />
            <WineContentContainer >
                <WineTitle>
                    Wine from porto porto porto
                </WineTitle>
                <WineDescription>
                    start start start
                </WineDescription>
            </WineContentContainer>
            <ArrowIconContainer />
        </Card>

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