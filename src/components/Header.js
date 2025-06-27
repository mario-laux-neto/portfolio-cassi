// src/components/Header.js
"use client";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Link from 'next/link';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 70px;
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 1080px) {
    padding: 0 40px;
    height: 70px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
    height: 60px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${theme.colors.green};
    width: 42px;
    height: 42px;
    border: 2px solid ${theme.colors.green};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: ${theme.fonts.mono};
    font-size: 20px;
    font-weight: 400;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    a {
      width: 36px;
      height: 36px;
      font-size: 18px;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${theme.colors.lightestSlate};
  font-family: ${theme.fonts.mono};
  counter-reset: item 0;
  z-index: 12;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: ${theme.fontSizes.xs};

      a {
        padding: 10px 15px;
        text-decoration: none;
        color: inherit;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:before {
          content: "0" counter(item) ".";
          margin-right: 8px;
          color: ${theme.colors.green};
          font-size: ${theme.fontSizes.xs};
          text-align: right;
        }

        &:hover {
          color: ${theme.colors.green};
        }
      }
    }
  }
`;

const StyledResumeButton = styled.a`
  color: ${theme.colors.green};
  background-color: transparent;
  border: 1px solid ${theme.colors.green};
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-size: ${theme.fontSizes.xs};
  font-family: ${theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-left: 15px;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: ${theme.fontSizes.smish};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Link href="/" aria-label="home">
          MLN
        </Link>
      </StyledLogo>

      <StyledNav>
        <StyledLinks>
          <ol>
            <li>
              <Link href="/#about">Sobre</Link>
            </li>
            <li>
              <Link href="/#experience">Experiência</Link>
            </li>
            <li>
              <Link href="/#projects">Trabalhos</Link>
            </li>
            <li>
              <Link href="/#contact">Contato</Link>
            </li>
          </ol>
        </StyledLinks>

        <StyledResumeButton
          href="/curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Currículo
        </StyledResumeButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
