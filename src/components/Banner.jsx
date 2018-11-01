import styled from 'styled-components';
import { Box } from '@rebass/grid';

const Banner = styled(Box)`
  font-family: ${props => props.theme.fonts.banner};
  font-size: ${props => (props.small ? '2.5rem' : '3.5rem')};
  color: ${props => props.theme.color.blue};
  color: ${props => props.orange && props.theme.color.orange};
  color: ${props => props.teal && props.theme.color.teal};
  background-color: white;
  opacity: 0.95;
  border-radius: 15px;

  position: absolute;
  width: 60vw;
  padding: 1rem;
  top: 35%;
  left: ${props => Number(props.position) * 100 + 20 || 20}vw;
  text-align: center;
  user-select: none;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 2.4rem;
  }
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 2rem;
    left: ${props => Number(props.position) * 100 || 0}vw;
    width: 100vw;
    border-radius: 0px;
  }
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    font-size: 1.5rem;
  }
`;

export default Banner;