import React from 'react'
import HomeQuery from '../queries/HomeQuery'

const Home = (props) => (
    <HomeQuery {...props} />
)

Home.navigationOptions = {
    title: 'Home',
}

export default Home