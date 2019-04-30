import React from "react";
import styled from "styled-components";

const Label = styled.Text`
  color: #dfdfdf;
`;
const Text = styled.Text`
  font-size: 22px;
  color: #d4d4d4;
`;
const Container = styled.View`
  width: ${({ width }) => width};
  padding-top: 15px;
`;
const TextWithLabel = ({ text, label, width = "100%", ...otherProps }) => (
  <Container width={width} {...otherProps}>
    <Label>{label}</Label>
    <Text>{text}</Text>
  </Container>
);

export default TextWithLabel;
