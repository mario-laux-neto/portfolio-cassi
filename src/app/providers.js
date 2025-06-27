// src/app/providers.js
'use client'; // ESSA LINHA É A MAIS IMPORTANTE!

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}