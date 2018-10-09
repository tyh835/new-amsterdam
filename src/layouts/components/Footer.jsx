import React from 'react';
import styled from 'styled-components';

import { Flex } from 'rebass';

const FooterWrap = Flex.extend`
  width: 100%;
  height: ${props => props.theme.height.footer}px;
  background-color: ${props => props.theme.color.blue};
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: auto;
  }
`;

const InfoBox = Flex.extend`
  height: 70%;
  background-color: ${props => props.theme.color.white};
  border-radius: 25px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.16), 0 4px 7px rgba(0, 0, 0, 0.23);

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: 180px;
  }
`;

const SubHeader = styled.h2`
  font-family: ${props => props.theme.fonts.header};
  margin-top: 1.4rem;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    margin-top: 1rem;
  }
`;

const Divider = styled.div`
  display: block;
  width: 70%;
  height: 1px;
  margin: 0.7rem 0;
  background-color: rgba(0, 0, 0, 0.24);
`;

const Text = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  font-weight: ${props => (props.bold ? '400' : '300')};
  font-size: 15px;
  line-height: 1.5;
`;

const Footer = () => {
  const responsiveWidth = [240, 300, 240];
  const responsiveMarginTop = [3, 3, 0];
  const responsiveMarginX = [0, 0, 4, 5];

  return (
    <FooterWrap
      is="footer"
      px={[0, 1, 3, 4]}
      py={[3, 3, 0]}
      pt={[6, 0]}
      flexDirection={['column', 'column', 'row']}
    >
      <InfoBox width={responsiveWidth} mt={responsiveMarginTop}>
        <SubHeader>Contact Us</SubHeader>
        <Divider />
        <Text bold>Phone:</Text>
        <Text>604-584-2911</Text>
        <Text bold>Email:</Text>
        <Text>nabakerycakes@gmail.com</Text>
      </InfoBox>
      <InfoBox
        width={responsiveWidth}
        mt={responsiveMarginTop}
        mx={responsiveMarginX}
      >
        <SubHeader>Location</SubHeader>
        <Divider />
        <Text bold>12892 96 Ave</Text>
        <Text bold>Surrey, BC</Text>
        <Text bold>V3V 6A8</Text>
        <Text>(Next to TD Bank)</Text>
      </InfoBox>
      <InfoBox width={responsiveWidth} mt={responsiveMarginTop}>
        <SubHeader>Hours</SubHeader>
        <Divider />
        <Text bold>9 am - 6:30 pm</Text>
        <Text>on Weekdays</Text>
        <Text bold>9 am - 6 pm </Text>
        <Text>on Sat and Sun</Text>
      </InfoBox>
    </FooterWrap>
  );
};

export default Footer;
