import React, { Component } from 'react';
import styled from 'styled-components';

import HomeQuery from '../queries/HomeQuery';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
        }
    };
    render() {
        const params = this.props.navigation.state.params;
        return (
            <HomeView>
                <HomeQuery params={params} />
            </HomeView>
        );
    }
}

const HomeView = styled.View`
  flex: 1;
`;