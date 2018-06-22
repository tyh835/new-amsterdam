import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    '&:hover': {
      backgroundColor: 'white'
    }
  }
};

const StyledLink = styled(Link)`
  height: ${props => props.theme.height.header}px;
  display: ${props => props.loaded ? '' : 'none'};
  text-decoration: none;

  > button {
    height: 100%;
    border-radius: 0;
    font-family: ${props => props.theme.fonts.header};
    font-size: 1.2rem;
    color: #363636;
    text-transform: none;
    transition: ${props => props.theme.hover.transition};
  }
  
  > button:hover {
    opacity: ${props => props.theme.hover.opacity};
    color: ${props => props.theme.color.hover};
  }
`;

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  
  componentDidMount() {
    this.setState({loaded: true});
  }
  
  render() {
    const {classes, ...props} = this.props;
    return (
      <StyledLink activeClassName="active" {...props} loaded={this.state.loaded}>
        <Button className={classes.button}>{props.children}</Button>
      </StyledLink>);
  }
};

export default withStyles(styles)(NavLink);
