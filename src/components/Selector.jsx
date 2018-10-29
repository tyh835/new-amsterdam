import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme.js';

const MUItheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: theme.color.teal
    },
    secondary: {
      main: theme.color.white
    }
  }
})

const Heading = styled.h2`
  padding: 2rem 0;
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.color.lightyellow};
  text-align: center;
  font-size: 1.8rem;
  font-family: ${props => props.theme.fonts.header};
  font-weight: 400;
  color: ${props => props.theme.color.black};
`;

const SelectorWrap = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.lightyellow} !important;
`;

const SelectorBar = styled(AppBar)`
  &&& {
    display: flex;
    width: 80vw;
    margin: 0 auto 0 auto;
    border-radius: 7px;
    visibility: ${props => props.isLoaded ? 'visible' :'hidden'};
  }

  * {
    -ms-overflow-style: none;
    font-size: 1.2rem;
    font-family: "Roboto Condensed", Lato, sans-serif;
    text-transform: capitalize;
  }

  *::-webkit-scrollbar {
    display: none;
    width: 0px;
    background: transparent;
  }
`;

const SelectorTabs = styled(Tabs)`
  &&& {
    padding: 0.25rem 0;
    height: 100%;
  }
`;

class Selector extends Component {
  state = {
    isLoaded: false
  }

  handleChange = (e, index) => {
    this.props.changeCategory(index);
  }

  componentDidMount() {
    this.setState({isLoaded: true});
  }

  render() {
    const { categories, activeCategory } = this.props;

    return (
      <>
        <Heading>Choose a category of cakes below: </Heading>
        <SelectorWrap>
          <SelectorBar position="static" color="secondary" isLoaded={this.state.isLoaded}>
            <SelectorTabs
              value={activeCategory}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              {categories.map(category => {
                return (
                  <Tab
                    key={category}
                    label={category}
                  />
                );
              })}
            </SelectorTabs>
          </SelectorBar>
        </SelectorWrap>
        
      </>
    );
  }
}

Selector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.number,
  handleChange: PropTypes.func
};


export default props => {
  return (
    <MuiThemeProvider theme={MUItheme}>
      <Selector {...props} />
    </MuiThemeProvider>
  )
}