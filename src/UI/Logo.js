import React from "react";
import PropTypes from "prop-types";
import SvgUri from "react-native-svg-uri";
import styled from "styled-components";

const uri = "https://image.flaticon.com/icons/svg/209/209118.svg";

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Logo = ({ width, height }) => (
  <Wrapper>
    <SvgUri
      width={width}
      height={height}
      source={{
        uri
      }}
    />
  </Wrapper>
);

Logo.defaultProps = {
  width: 200,
  height: 200
};
Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};
export default Logo;
