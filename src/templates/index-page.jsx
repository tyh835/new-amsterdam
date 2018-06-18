import React from 'react';
import PropTypes from 'prop-types';
import Features from '../components/Features';
import styled from 'styled-components';

const BannerText = styled.h2`
  font-family: ${props => props.theme.fonts.sans};
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro
}) => (
  <section>
    <div
      className="full-width-image-container margin-top-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <BannerText>
        {title}
      </BannerText>
    </div>
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
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
        }
      }
    }
  }
`;
