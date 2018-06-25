import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  font-size: 8px;
  text-align: right;
  background-color: ${props => props.theme.color.blue};
  color: #fff;

  > a,
  > a:visited {
    color: #fff;
  }
`;

export default () => {
  return (
    <Wrapper>
      Windmill Icon made by{' '}
      <a
        href="https://www.flaticon.com/authors/zlatko-najdenovski"
        title="Zlatko Najdenovski"
      >
        Zlatko Najdenovski
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>{' '}
      is licensed by{' '}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
      >
        CC 3.0 BY
      </a>
    </Wrapper>
  );
};
