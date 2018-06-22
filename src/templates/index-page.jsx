import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4';

import Img from 'gatsby-image';

import Features from '../components/Features';

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
      {images.map(
        image =>
          isPreview ? (
            <Jumbotron src={image.url} alt={title} key={uuid()} />
          ) : (
            <Img
              sizes={image.url.childImageSharp.sizes}
              alt={title}
              key={uuid()}
            />
          )
      )}
      <h3 style={{ marginTop: '32px' }}>{heading}</h3>
      <p>{description}</p>
      <Features gridItems={intro.blurbs} isPreview={isPreview} />
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
          url {
            childImageSharp {
              sizes(
                maxWidth: 1280
                quality: 85
                traceSVG: { color: "PapayaWhip" }
              ) {
                ...GatsbyImageSharpSizes_tracedSVG
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
