import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import { Box } from 'rebass';

import HeroImage from '../components/HeroImage.jsx';
import Selector from '../components/Selector.jsx';
import About from '../components/About.jsx';
import Card from '../components/Card.jsx';
import Modal from '../components/Modal.jsx';

const CardsGrid = Box.extend`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template: 400px / repeat(auto-fill, 240px);
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

const AboutWrapper = Box.extend`
  width: 100%;
  display: flex;
  padding-bottom: 2rem;
  justify-content: center;
  grid-row: span 1;
  grid-column: 1 / -1;

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    width: 100vw;
  }
`;

export class CakesPageTemplate extends Component {
  constructor(props) {
    super(props);
    const data = this.props.categories.map(category => {
      const { cards, ...rest } = category;
      return {
        cards: cards.map(card => {
          return {
            key: uuid(),
            ...card
          };
        }),
        ...rest
      };
    });
    this.state = {
      categoryNames: data.map(category => category.name),
      data: data,
      currentData: data[0],
      currentCategory: data[0].name,
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

  changeCategory = newCategory => {
    if (newCategory !== undefined) {
      const [currentData] = this.state.data.filter(
        category => category.name === newCategory
      );
      this.setState({
        currentCategory: newCategory,
        currentData: currentData
      });
    }
  };

  toggleModal = data => {
    const newShowModal = !this.state.showModal;
    this.setState({ showModal: newShowModal, modalData: data });
  };

  componentDidUpdate(prevProps) {
    if (this.props.categories !== prevProps.categories) {
      const nextCategoryNames = this.props.categories.map(
        category => category.name
      );
      const nextData = this.props.categories;
      this.setState({ categoryNames: nextCategoryNames, data: nextData });
    }
  }

  render() {
    const { jumbotron, title, categories, isPreview } = this.props;
    return (
      <Fragment>
        <HeroImage image={jumbotron} isPreview={isPreview} title={title} />
        <Selector
          categories={this.state.categoryNames}
          activeCategory={this.state.currentCategory}
          handleChange={this.changeCategory}
        />
        <CardsGrid px={[0, 40]} py={[15, 50]}>
          <AboutWrapper>
            <About
              flat
              data={this.state.currentData.about}
              isPreview={isPreview}
            />
          </AboutWrapper>

          {this.state.currentData.cards.map(card => (
            <Card
              dimensions={this.state.dimensions}
              data={card}
              key={card.key}
              isPreview={isPreview}
              handleClick={this.toggleModal}
            />
          ))}
          {this.state.showModal && (
            <Modal
              data={this.state.modalData}
              exitModal={this.exitModal}
              isPreview={isPreview}
            />
          )}
        </CardsGrid>
      </Fragment>
    );
  }
}

CakesPageTemplate.propTypes = {
  jumbotron: PropTypes.object,
  title: PropTypes.string,
  categories: PropTypes.array,
  isPreview: PropTypes.bool
};

const CakesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <CakesPageTemplate
      jumbotron={frontmatter.jumbotron}
      title={frontmatter.title}
      categories={frontmatter.categories}
      isPreview={false}
    />
  );
};

CakesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default CakesPage;

export const cakesPageQuery = graphql`
  query cakesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        jumbotron {
          childImageSharp {
            sizes(
              maxWidth: 1000
              maxHeight: 250
              quality: 85
              traceSVG: { color: "papayawhip" }
            ) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
        categories {
          name
          about {
            image {
              childImageSharp {
                sizes(
                  maxWidth: 200
                  maxHeight: 200
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
  }
`;
