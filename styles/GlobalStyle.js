// styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.navy};
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.md};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.main};
    font-weight: 600;
    color: ${theme.colors.lightestSlate};
    margin: 0 0 10px 0;
  }
  
  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus {
      color: ${theme.colors.green};
    }
  }
`;

export default GlobalStyle;