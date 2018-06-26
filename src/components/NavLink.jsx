import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
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

const Link = styled(GatsbyLink)`
  height: ${props => props.theme.height.header}px;
  display: ${props => (props.loaded ? 'flex' : 'none')};
  text-decoration: none;
  align-items: center;

  > button {
    height: 100%;
    border-radius: 0;
    font-family: ${props => props.theme.fonts.header};
    font-size: 1.25rem;
    color: ${props => props.theme.color.black};
    text-transform: none;
    transition: ${props => props.theme.hover.transition};

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: 1.1rem;
    }
  }
  > button:hover {
    opacity: 0.9;
  }

  > button:hover span {
    color: ${props => props.theme.color.lightorange};
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
    this.setState({ loaded: true });
  }

  render() {
    const { classes, ...props } = this.props;
    return (
      <Link activeClassName="active" loaded={this.state.loaded} {...props}>
        <Button className={classes.button}>{props.children}</Button>
      </Link>
    );
  }
}

NavLink.propTypes = {
  classes: PropTypes.object,
  to: PropTypes.string.isRequired
};

export default withStyles(styles)(NavLink);
