import React, { Component } from 'react';
import styled from 'styled-components';

import HomeQuery from '../queries/HomeQuery';
import LogoutButton from '../components/LogoutButton';

const HomeScreen = (props) => (
    <HomeView>
        <HomeQuery />
    </HomeView>
);
HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Home',
    }
};
const HomeView = styled.View`
  flex: 1;
`;
export default HomeScreen