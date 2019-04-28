import React from 'react'
import DetailsQuery from '../queries/DetailsQuery'


const Details = ({ navigation }) => {
    const params = navigation.state.params
    return (
        <DetailsQuery params={params} />
    )
}

Details.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name
})

export default Details