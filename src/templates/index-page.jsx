import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Flex } from 'rebass';
import GatsbyLink from 'gatsby-link';

import Carousel from '../components/Carousel.jsx';
import About from '../components/About.jsx';
import Card from '../components/Card.jsx';
import NavLink from '../components/NavLink.jsx';

const CardsWrapper = Flex.extend`
  height: 540px;
  background-color: white;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: auto;
  }
`;

const AboutWrapper = Flex.extend`
  background: linear-gradient(
    to bottom right,
    ${props => props.theme.color.teal},
    ${props => props.theme.color.beige}
  );
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
    height: 400px;
    background-color: ${props => props.theme.color.white};
    text-align: center;
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

const Mobile = styled.div`
  width: 100%;
  display: none;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
    justify-content: center;
  }
`;

export const IndexPageTemplate = ({ images, about, cards, isPreview }) => {
  const dimensions = {
    card: {
      width: '300px',
      height: '340px',
      image: '240px'
    },
    mobile: {
      width: '240px',
      height: '270px',
      image: '200px'
    }
  };

  return (
    <Fragment>
      <Carousel images={images} isPreview={isPreview} />
      <AboutWrapper is="section" mt={[0, 10, 100]} mb={[20, 20, 0]}>
        <About data={about} isPreview={isPreview} />
      </AboutWrapper>
      <CardsWrapper flexDirection={['column', 'column', 'row']}>
        {cards.map(card => {
          return (
            <Link exact to={card.link} key={card.link}>
              <Card
                dimensions={dimensions}
                data={card}
                isPreview={isPreview}
                link
              />
            </Link>
          );
        })}
      </CardsWrapper>
      <Mobile>
        <NavLink exact to="/contact" style={{fontSize: '2rem'}}>Have Questions? Let Us Know &rarr;</NavLink>
      </Mobile>
    </Fragment>
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

export const indexPageQuery = graphql`
  query indexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        images {
          path {
            childImageSharp {
              sizes(
                maxWidth: 2000
                maxHeight: 1000
                quality: 85
                traceSVG: { color: "#A7DBD8" }
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
                traceSVG: { color: "#A7DBD8" }
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
                traceSVG: { color: "#A7DBD8" }
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
