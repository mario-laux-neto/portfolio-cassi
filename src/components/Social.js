// src/components/Social.js
"use client";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { theme } from "../../styles/theme";

const StyledSocialContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

const StyledSocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;

      svg {
        width: 22px;
        height: 22px;
        color: ${theme.colors.lightSlate};
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
          color: ${theme.colors.green};
          transform: translateY(-2px);
        }
      }
    }
  }
`;

const Social = () => {
  return (
    <StyledSocialContainer>
      <StyledSocialList>
        <li>
          <a
            href="https://github.com/mario-laux-neto"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/m%C3%A1rio-laux-neto/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mario_laux_neto/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </li>
      </StyledSocialList>
    </StyledSocialContainer>
  );
};

export default Social;
