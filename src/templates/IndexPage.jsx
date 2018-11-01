import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { Box, Flex } from '@rebass/grid';
import uuid from 'uuid/v4';

import Carousel from '../components/Carousel.jsx';
import About from '../components/About.jsx';
import Card from '../components/Card.jsx';
import NavLink from '../components/NavLink.jsx';

const CardsWrap = styled(Flex)`
  height: 400px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, white, ${props => props.theme.color.lightyellow}, ${props => props.theme.color.lightgreen});

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: auto;
  }
`;

const AboutWrap = styled(Flex)`
  color: ${props => props.theme.color.black};
  width: 90%;
  height: 50vw;
  border-radius: 50%;
  margin-left: 5vw;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    width: 100%;
    height: 60vw;
    margin-left: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: auto;
    background: white !important;
    text-align: center;

    > div > div {
      width: 100%;
    }
  }

  &:nth-of-type(1) {
    background: linear-gradient(
      to bottom right,
      ${props => props.theme.color.blue},
      ${props => props.theme.color.teal}
    );
  }

  &:nth-of-type(2) {
    background: linear-gradient(
      to bottom,
      ${props => props.theme.color.teal},
      ${props => props.theme.color.beige}
    );
  }
`;

const Link = styled(GatsbyLink)`
  text-decoration: none;
  margin: 0 2rem;
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    margin: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    margin: 1.5rem 0;
  }
`;

const Mobile = styled(Box)`
  width: 100%;
  display: none;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.color.lightgreen};
  }
`;

const dimensions = {
  card: {
    width: '240px',
    height: '270px',
    image: '200px'
  }
};

export const IndexPage = ({ data }) => {
  const { images, about, cards } = data.markdownRemark.frontmatter;

  return (
    <>
      <Carousel images={images} />
      {about.map(data => (
        <AboutWrap key={uuid()} as="section" mt={[0, 10, 100]} mb={[20, 20, 0]}>
          <About data={data} />
        </AboutWrap>
      ))}
      <CardsWrap flexDirection={['column', 'column', 'row']}>
        {cards.map(card => {
          return (
            <Link to={card.link} key={card.link}>
              <Card dimensions={dimensions} data={card} />
            </Link>
          );
        })}
      </CardsWrap>
      <Mobile>
        <NavLink to="/contact" style={{ fontSize: '2rem' }}>
          Have Questions? Let Us Know &rarr;
        </NavLink>
      </Mobile>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        images: PropTypes.array,
        title: PropTypes.string,
        about: PropTypes.array,
        cards: PropTypes.array
      })
    })
  })
};

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        images {
          path {
            childImageSharp {
              fluid(
                maxWidth: 1200
                maxHeight: 600
                quality: 85
                traceSVG: { color: "papayawhip" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          text
        }
        about {
          image {
            childImageSharp {
              fluid(
                maxWidth: 300
                maxHeight: 300
                quality: 85
                traceSVG: { color: "papayawhip" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          alt
          heading
          description
        }
        cards {
          image {
            childImageSharp {
              fluid(
                maxWidth: 300
                maxHeight: 300
                quality: 85
                traceSVG: { color: "papayawhip" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          label
          link
        }
      }
    }
  }
`;
