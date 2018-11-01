import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Box } from '@rebass/grid';

import Card from '../components/Card.jsx';
import HeroImage from '../components/HeroImage.jsx';
import Modal from '../components/Modal.jsx';

const CardsGrid = styled(Box)`
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

const Title = styled(Box)`
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

export class PastriesPage extends Component {
  state = {
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

  exitModal = () => {
    this.toggleModal({});
  }

  toggleModal = data => {
    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal,
      modalData: data
    }));
  }

  render() {
    const {
      jumbotron,
      title,
      pastries
    } = this.props.data.markdownRemark.frontmatter;
    return (
      <>
        <HeroImage image={jumbotron} title={title} orange />
        <CardsGrid px={[0, 40]} py={[20, 50]}>
          <Title as="h2">Bread and Pastries</Title>
          {pastries.map((card, i) => (
            <Card
              dimensions={this.state.dimensions}
              data={card}
              key={`card${i}`}
              toggleModal={this.toggleModal}
            />
          ))}
        </CardsGrid>
        {this.state.showModal && (
          <Modal data={this.state.modalData} exitModal={this.exitModal} />
        )}
      </>
    );
  }
}

PastriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        jumbotron: PropTypes.object,
        title: PropTypes.string,
        pastries: PropTypes.array
      })
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
            fluid(
              maxWidth: 1200
              maxHeight: 300
              quality: 85
              traceSVG: { color: "papayawhip" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        pastries {
          image {
            childImageSharp {
              fluid(
                maxWidth: 400
                maxHeight: 400
                quality: 85
                traceSVG: { color: "papayawhip" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          description
          label
        }
      }
    }
  }
`;
