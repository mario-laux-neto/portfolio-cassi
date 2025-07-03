// styles/GlobalStyle.js - Fisioterapia
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  /* 1. Reset universal e box-sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 2. Estilos base para HTML e Body */
  html {
    height: 100%;
    width: 100%;
  }

  /* 3. Estilos específicos do Body - Fisioterapia */
  body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.darkGray};
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.md};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    color: ${theme.colors.primary};
    margin: 0 0 ${theme.spacing.md} 0;
    letter-spacing: -0.02em;
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
      color: ${theme.colors.primary};
    }
  }

  /* Estilo para botões de CTA */
  .cta-button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: ${theme.shadows.md};

    &:hover {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.lg};
    }
  }
`;

export default GlobalStyle;
