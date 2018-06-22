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
  display: ${props => props.show ? '' : 'none'};
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
      show: false
    };
  }
  
  componentDidMount() {
    this.setState({show: true});
  }
  
  render() {
    const {classes, ...props} = this.props;
    return (
      <StyledLink activeClassName="active" {...props} show={this.state.show}>
        <Button className={classes.button}>{props.children}</Button>
      </StyledLink>);
  }
};

NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};

export default withStyles(styles)(NavLink);
