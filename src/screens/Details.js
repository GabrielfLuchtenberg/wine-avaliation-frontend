import React from "react";
import styled from "styled-components";
import wine from "../assets/wine.jpg";
import winebg from "../assets/winebackground.jpg";

import { Container, TextWithLabel } from "../ui";

const HeaderContainer = styled.ImageBackground.attrs({
  source: winebg
})`
  height: 230px;
  width: 100%;
  background: #5d9700;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image.attrs({
  source: wine
})`
  width: 125px;
  height: 125px;
  border-radius: 100;
  border-color: #d2374a;
  border-width: 3px;
`;

const WineInfoContainer = styled.View`
  flex: 1;
  padding: 15px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Details = ({
  name,
  brand,
  classification,
  color,
  sugarTeor,
  note: description
}) => (
  <Container>
    <HeaderContainer>
      <Image />
    </HeaderContainer>
    <WineInfoContainer>
      <Row>
        <TextWithLabel label="Name" text={name} width="50%" />
        <TextWithLabel label="Brand" text={brand} width="50%" />
      </Row>
      <Row>
        <TextWithLabel label="Class" text={classification} width="50%" />
        <TextWithLabel label="Color" text={color} width="50%" />
      </Row>
      <Row>
        <TextWithLabel label="Sugar teor" text={sugarTeor} />
      </Row>
      <TextWithLabel label="Notes" text={description} />
    </WineInfoContainer>
  </Container>
);

export default Details;
