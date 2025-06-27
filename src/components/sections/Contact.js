// src/components/sections/Contact.js
"use client";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: ${theme.colors.green};
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.md};
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: ${theme.fontSizes.sm};
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    color: ${theme.colors.lightestSlate};
  }

  .email-link {
    color: ${theme.colors.green};
    background-color: transparent;
    border: 1px solid ${theme.colors.green};
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: ${theme.fontSizes.sm};
    font-family: ${theme.fonts.mono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-top: 50px;
    display: inline-block;

    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    }
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  a {
    padding: 10px;
    color: ${theme.colors.lightSlate};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      color: ${theme.colors.green};
      transform: translateY(-3px);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="title">Entre em Contato</h2>

      <p>
        Estou sempre aberto a novas oportunidades e conexões interessantes. Se
        você tem alguma pergunta, projeto ou apenas quer trocar uma ideia,
        ficarei feliz em conversar!
      </p>

      <a
        className="email-link"
        href="https://wa.me/5554996837282"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vamos Conversar!
      </a>

      <StyledSocialLinks>
        <a
          href="https://github.com/mario-laux-neto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/m%C3%A1rio-laux-neto/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/mario_laux_neto/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FiInstagram />
        </a>
        <a href="mailto:marioneto@unochapeco.edu.br" aria-label="Email">
          <FiMail />
        </a>
      </StyledSocialLinks>
    </StyledContactSection>
  );
};

export default Contact;
