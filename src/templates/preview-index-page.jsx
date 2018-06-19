import React from 'react';
import PropTypes from 'prop-types';
import Features from './preview-components/Features.jsx';
import styled from 'styled-components';

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
  images,
  title,
  heading,
  description,
  intro
}) => {
  console.log(images);

  return (
    <section>
      <img src={images[0].url} alt={title} />
      <h3>{heading}</h3>
      <p>{description}</p>
      <Features gridItems={intro.blurbs} />
    </section>
  )};

  IndexPageTemplate.propTypes = {
    images: PropTypes.array,
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
      images={frontmatter.images}
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
  query indexPagePreview
  ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        images {
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
