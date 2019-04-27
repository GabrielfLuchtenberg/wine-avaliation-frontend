import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardWrapper = styled.View`
    backgroundColor: white;
    max-height: 125px;
    border: 1px solid #333333;
    border-radius:1px;
    margin-bottom:15px;
    flex:1;
    flex-direction: row;
`

const Card = ({ children }) => (
    <CardWrapper>
        {
            children
        }
    </CardWrapper>
)

Card.propTypes = {
    children: PropTypes.node.isRequired
}
export default Card;