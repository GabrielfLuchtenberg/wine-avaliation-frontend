import React, { Component } from 'react'
import { FlatList } from 'react-native'
import LogoutButton from '../components/LogoutButton'
import styled from 'styled-components'
import arrow from '../assets/arrow_right.png'
import SvgUri from 'react-native-svg-uri'
import routes from '../navigator/routes.json'
import Card from '../UI/Card'

const RootContainer = styled.View`
`

const IconContainer = styled.View`
    justify-content:center;
    padding: 0 15px;
`

const Icon = () => (
    <IconContainer>
        <SvgUri
            width={65}
            height={65}
            source={{
                uri: 'https://www.svgrepo.com/download/85987/wine.svg',
            }}
        />
    </IconContainer>
)
const WineInfoContainer = styled.View`
    flex: 1;
    padding: 5px 10px;
    flex-shrink: 1;
    justify-content: center;
`
const WineTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #0f1617;
`

const WineDescription = styled.Text`
`
const ArrowIcon = styled.Image.attrs({
    source: arrow
})`
    width:100%;
    height:60%;
`
const WineCard = styled(Card)`
    border-width: 1px;
    border-color: #999;
`
const AccessButton = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    justify-content: center;
`

const WineItem = ({ navigation, node }) => {

    function handleAcessItem() {
        navigation.navigate(routes.details, {
            id: node.id,
            name: node.name
        })
    }
    return (
        <WineCard>
            <Icon />
            <WineInfoContainer >
                <WineTitle>
                    {node.name}
                </WineTitle>
                <WineDescription>
                    {node.brand}
                </WineDescription>
            </WineInfoContainer>
            <AccessButton onPress={() => handleAcessItem()}>
                <ArrowIcon />
            </AccessButton>
        </WineCard>
    )
}

const HomeComponent = (props) => (
    < RootContainer >
        <FlatList
            data={props.wines}
            keyExtractor={item => item.node.id.toString()}
            renderItem={({ item }) => (
                <WineItem {...item} navigation={props.navigation} />
            )}
        />
    </RootContainer >
)


export default HomeComponent;