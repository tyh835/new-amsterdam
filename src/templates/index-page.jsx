import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Carousel from '../components/Carousel.jsx'
import InfoBox from '../components/InfoBox.jsx';

const Jumbotron = styled.img`
  width: 100vw;
  height: auto;
  position: relative;
  margin-top: 0;
`;

export const IndexPageTemplate = ({
  images,
  title,
  heading,
  description,
  intro,
  isPreview
}) => {
  return (
    <section>
      <Carousel images={images} isPreview={isPreview} />
      <h3 style={{ marginTop: '32px' }}>{heading}</h3>
      <p>{description}</p>
      <InfoBox gridItems={intro.blurbs} isPreview={isPreview} />
    </section>
  );
};

IndexPageTemplate.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  isPreview: PropTypes.bool
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      images={frontmatter.images}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
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
        title
        images {
          path {
            childImageSharp {
              sizes(
                maxWidth: 1800
                maxHeight: 900
                quality: 85
                traceSVG: { color: "LightSkyBlue" }
              ) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
          text
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                resolutions(
                  width: 200
                  height: 200
                  quality: 100
                  traceSVG: { color: "PapayaWhip" }
                ) {
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
