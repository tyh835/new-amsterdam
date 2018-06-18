import React from 'react';
import PropTypes from 'prop-types';
import Features from '../components/Features';
import styled from 'styled-components';

import Img from 'gatsby-image';

const BannerText = styled.h2`
  font-family: ${props => props.theme.fonts.sans};
`;

const Jumbotron = styled.img`
  width: 100vw;
  height: 650px;
  position: relative;
  margin-top: 0;
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro
}) => (
  <section>
    <Img resolutions={image.url.childImageSharp.resolutions} alt={title} />
    <h3>{heading}</h3>
    <p>{description}</p>
    <Features gridItems={intro.blurbs} />
  </section>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
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
        title
        image {
          url {
            childImageSharp {
              resolutions(width: 1280, height: 600, quality: 100, traceSVG: { color: "PapayaWhip"}) {
                ...GatsbyImageSharpResolutions_tracedSVG
              }
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                resolutions(width: 200, height: 200, quality: 100, traceSVG: { color: "PapayaWhip"}) {
                  ...GatsbyImageSharpResolutions_tracedSVG
                }
              }
            }
            text
          }
        }
      }
    }
  }
`;
