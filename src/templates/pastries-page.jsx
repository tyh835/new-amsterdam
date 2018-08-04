import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from 'rebass';

import Card from '../components/Card.jsx';
import HeroImage from '../components/HeroImage.jsx';
import Modal from '../components/Modal.jsx';

const CardsGrid = Box.extend`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template: 50px / repeat(auto-fill, 240px);
  grid-auto-rows: 300px;
  grid-gap: 2rem;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.color.lightyellow},
    ${props => props.theme.color.lightgreen}
  );

  > div {
    justify-self: center;
    align-self: center;
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
  grid-column: 1 / -1;
`;

export class PastriesPageTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalData: {},
      dimensions: {
        card: {
          width: '240px',
          height: '270px',
          image: '200px'
        }
      }
    };
  }

  exitModal = () => {
    this.toggleModal({});
  };

  toggleModal = data => {
    const newShowModal = !this.state.showModal;
    this.setState({ showModal: newShowModal, modalData: data });
  };

  render() {
    const { jumbotron, title, pastries, isPreview } = this.props;
    return (
      <Fragment>
        <HeroImage image={jumbotron} isPreview={isPreview} title={title} />
        <CardsGrid px={[0, 40]} py={[20, 50]}>
          <Title>Bread and Pastries</Title>
          {pastries.map((card, i) => (
            <Card
              dimensions={this.state.dimensions}
              data={card}
              key={`card${i}`}
              isPreview={isPreview}
              handleClick={this.toggleModal}
            />
          ))}
        </CardsGrid>
        {this.state.showModal && (
          <Modal
            data={this.state.modalData}
            exitModal={this.exitModal}
            isPreview={isPreview}
          />
        )}
      </Fragment>
    );
  }
}

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
              maxWidth: 1200
              maxHeight: 300
              quality: 85
              traceSVG: { color: "papayawhip" }
            ) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
        pastries {
          image {
            childImageSharp {
              sizes(
                maxWidth: 400
                maxHeight: 400
                quality: 85
                traceSVG: { color: "papayawhip" }
              ) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
            }
          }
          label
          alt
        }
      }
    }
  }
`;
