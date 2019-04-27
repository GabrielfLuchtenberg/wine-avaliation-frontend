import React, { Component } from 'react';
import styled from 'styled-components';

import HomeQuery from '../queries/HomeQuery';
import LogoutButton from '../components/LogoutButton';
import { Container } from '../UI';

const HomeScreen = (props) => (
    <Container>
        <HomeQuery />
    </Container>
);
HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Home',
    }
};

export default HomeScreen