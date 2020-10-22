import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body{
  padding-top: 4rem;
  margin: 0px;
  color: #333;
  --type-first: Helvetica, Arial, sans-serif;
  --type-second: 'Spectral', Georgia;
  font-family: var(--type-first);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0px;
  }

  ul,
  li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }

  a {
    text-decoration: none;
  }

`;

const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`

export {
  GlobalStyle,
  Container,
}