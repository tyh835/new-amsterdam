import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Flex} from 'rebass';
import Link from 'gatsby-link';

import Carousel from '../components/Carousel.jsx';
import About from '../components/About.jsx';
import Card from '../components/Card.jsx';

const IndexWrapper = styled.main`
  width: 100vw;
  overflow: hidden;
`;

const CardsWrapper = Flex.extend`
  height: 600px;
  background-color: white;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: auto;
  }
`

export const IndexPageTemplate = ({
  images,
  about,
  cards,
  isPreview
}) => {
  return (
    <IndexWrapper>
      <Carousel images={images} isPreview={isPreview} />
      <About data={about} isPreview={isPreview} />
      <CardsWrapper flexDirection={['column', 'column', 'row']}>
      {
        cards.map(card => {
          return (
            <Link exact to={card.link} key={card.link} style={{textDecoration: 'none'}}>
              <Card image={card.image} label={card.label} />
            </Link>
          );
        })
      }
      </CardsWrapper>
    </IndexWrapper>
  );
};

IndexPageTemplate.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  about: PropTypes.object,
  cards: PropTypes.array,
  isPreview: PropTypes.bool
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      images={frontmatter.images}
      title={frontmatter.title}
      about={frontmatter.about}
      cards={frontmatter.cards}
      isPreview={false}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query indexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        images {
          path {
            childImageSharp {
              sizes(
                maxWidth: 1800
                maxHeight: 900
                quality: 85
                traceSVG: { color: "lightskyblue" }
              ) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
            }
          }
          text
        }
        about {
          image {
            childImageSharp {
              sizes(
                maxWidth: 300
                maxHeight: 300
                quality: 85
                traceSVG: { color: "orange" }
              ) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
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
              sizes(
                maxWidth: 500
                maxHeight: 500
                quality: 85
                traceSVG: { color: "orange" }
              ) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
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
