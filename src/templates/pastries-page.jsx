import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from 'rebass';

import Card from '../components/Card.jsx';
import Image from '../components/Image.jsx';
import {
  Banner as Base,
  JumbotronWrapper as BaseWrapper
} from '../components/Carousel.jsx';

const Banner = Base.extend`
  top: 15vw;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    top: 17vw;
  }
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

const JumbotronWrapper = BaseWrapper.extend`
  height: 25vw;
  overflow-y: hidden;
`;

const CardsGrid = Box.extend`
  width: 100%;
  height: auto;
  background-color: white;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template: 50px / repeat(4, 1fr);
  grid-auto-rows: 300px;
  grid-auto-columns: 280px;
  grid-gap: 2rem;

  > div {
    justify-self: center;
    align-self: center;
  }

  @media (max-width: ${props => props.theme.gridBreakpoints[1]}) {
    grid-template: 50px / repeat(3, 1fr);
  }

  @media (max-width: ${props => props.theme.gridBreakpoints[0]}) {
    grid-template: 50px / repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template: 80px / 1fr;
    grid-gap: 0rem;
  }
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.header};
  font-weight: 400;
  text-decoration: underline;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 4;


  @media (max-width: ${props => props.theme.gridBreakpoints[1]}) {
    grid-column: span 3;
  }

  @media (max-width: ${props => props.theme.gridBreakpoints[0]}) {
    grid-column: span 2;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: span 1;
  }
`;

export const PastriesPageTemplate = ({
  jumbotron,
  title,
  pastries,
  isPreview
}) => {
  const dimensions = {
    card: {
      width: '240px',
      height: '270px'
    },
    image: '200px'
  };

  return (
    <Fragment>
      <JumbotronWrapper>
        <Image image={jumbotron} isPreview={isPreview} />
        <Banner orange small>
          {title}
        </Banner>
      </JumbotronWrapper>
      <CardsGrid px={[0, 10, 40]} my={[0, 50, 80]}>
        <Title>Bread and Pastries</Title>
        {pastries.map((card, i) => (
          <Card
            dimensions={dimensions}
            data={card}
            key={`card${i}`}
            isPreview={isPreview}
          />
        ))}
      </CardsGrid>
    </Fragment>
  );
};

PastriesPageTemplate.propTypes = {
  jumbotron: PropTypes.object,
  title: PropTypes.string,
  pastries: PropTypes.array,
  isPreview: PropTypes.bool
};

const PastriesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <PastriesPageTemplate
      jumbotron={frontmatter.jumbotron}
      title={frontmatter.title}
      pastries={frontmatter.pastries}
      isPreview={false}
    />
  );
};

PastriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default PastriesPage;

export const pastriesPageQuery = graphql`
  query pastriesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        jumbotron {
          childImageSharp {
            sizes(
              maxWidth: 2000
              maxHeight: 500
              quality: 85
              traceSVG: { color: "orange" }
            ) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
        pastries {
          image {
            childImageSharp {
              sizes(
                maxWidth: 500
                maxHeight: 500
                quality: 85
                traceSVG: { color: "#A7DBD8" }
              ) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
            }
          }
          label
        }
      }
    }
  }
`;
