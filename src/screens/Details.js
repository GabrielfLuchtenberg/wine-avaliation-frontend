import React from 'react';
import { View } from 'react-native'
import styled from 'styled-components';
import Wine from '../assets/wine.jpg'
import { Container, TextWithLabel } from '../UI';

const HeaderContainer = styled.View`
    height: 35%;
    width: 100%;
    background: #915D00;
    justify-content: center;
    align-items: center;
`

const Image = styled.Image.attrs({
    source: Wine,
})`
    width: 125px;
    height: 125px;
    border-radius:100;
    border-color: #553700;
    border-width: 5px;
    `



const WineInfoContainer = styled.View`
    flex: 1;
    padding: 15px;
`

const HalfWidth = styled.View`
    flex-direction: row;
`

const Details = (props) => {

    return (
        <Container>
            <HeaderContainer>
                <Image />
            </HeaderContainer>
            <WineInfoContainer>
                <HalfWidth>
                    <TextWithLabel label="Name" text="Beer" width="50%" />
                    <TextWithLabel label="Brand" text="Beer CC" width="50%" />
                </HalfWidth>
                <HalfWidth>
                    <TextWithLabel label="Base" text="Milho" width="50%" />
                </HalfWidth>
                <TextWithLabel label="Notes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla scelerisque lorem, ac tempor libero egestas sed. Praesent sit amet euismod dui, eu ultricies massa. Maecenas dapibus, magna nec facilisis convallis, quam turpis efficitur tellus, feugiat posuere lectus ex a sapien. Mauris ultricies et felis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc auctor mattis lorem dignissim sollicitudin. Fusce aliquam libero et congue mollis. Praesent in purus vestibulum, interdum augue tristique, maximus sapien. Nulla molestie, justo sit amet consectetur elementum, purus nulla sodales arcu, at consequat neque velit et lacus. Mauris eu massa vehicula, tincidunt urna quis, lobortis nisi. Donec lectus purus, eleifend non congue nec, mollis id magna. Donec ac ante id leo lacinia efficitur. Ut venenatis nisl eu odio pulvinar eleifend.
                    Vestibulum ex urna, ornare ac sem eu, finibus efficitur mi. Maecenas eu ipsum risus. Cras id nibh eget lorem rutrum efficitur. Praesent arcu augue, lacinia sed risus a, tincidunt placerat nisl. Integer ex mauris, hendrerit ac commodo vitae, vestibulum a quam. Aliquam in velit vel risus consequat luctus. Fusce rutrum a elit quis ultricies. Cras faucibus, urna nec commodo gravida, risus nisi gravida leo, id tincidunt nisi odio non sem. Aenean ac vehicula tellus, eu ornare erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam quis est elementum, auctor magna a, scelerisque ante."  />
            </WineInfoContainer>
        </Container>
    )
}

export default Details;