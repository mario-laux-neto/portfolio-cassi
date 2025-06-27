// src/components/Email.js
'use client';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  left: auto;
  z-index: 10;
`;

const EmailLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${theme.colors.lightSlate};
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.xs};
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.green};
      transform: translateY(-3px);
    }
  }
`;


const Email = () => (
  <EmailContainer>
    <EmailLinkWrapper>
      <a href="mailto:seu-email@gmail.com">seu-email@gmail.com</a>
    </EmailLinkWrapper>
  </EmailContainer>
);

export default Email;