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
  height: 400px;
  background-color: white;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, white, hsl(177, 42%, 76%, 0.05));

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: auto;
    background: linear-gradient(to bottom, white, hsl(177, 42%, 76%, 0.1));
  }
`;

const AboutWrapper = Flex.extend`
  background: linear-gradient(to bottom right,${props => props.theme.color.teal},${props => props.theme.color.beige});
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
    background: white;
    text-align: center;

    > div > div {
    width: 100%;
    }
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
    background-color: hsl(177, 42%, 76%, 0.1);
  }
`;

export const IndexPageTemplate = ({ images, about, cards, isPreview }) => {
  const dimensions = {
    card: {
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
                traceSVG: { color: "papayawhip" }
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
                traceSVG: { color: "papayawhip" }
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
                traceSVG: { color: "papayawhip" }
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
