// src/components/sections/Hero.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 120px 50px 50px 50px;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.lightGray} 0%,
    rgba(46, 134, 193, 0.05) 100%
  );
  position: relative;

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 100px 25px 50px 25px;
  }
`;

const StyledProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.success}
  );
  padding: 4px;
  margin-bottom: 30px;

  .image-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    color: ${theme.colors.primary};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;

    .image-inner {
      font-size: 45px;
    }
  }
`;

const StyledName = styled.h1`
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 700;
  color: ${theme.colors.primary};
  line-height: 1.2;
  margin-bottom: 10px;
  max-width: 800px;
`;

const StyledTitle = styled.h2`
  font-size: clamp(20px, 4vw, 28px);
  font-weight: 500;
  color: ${theme.colors.success};
  margin-bottom: 20px;
  max-width: 600px;
`;

const StyledSubtitle = styled.p`
  font-size: clamp(16px, 2.5vw, 20px);
  color: ${theme.colors.mediumGray};
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 700px;
`;

const StyledCredentials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledCredential = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${theme.colors.primary};
  font-weight: 500;

  svg {
    color: ${theme.colors.success};
    font-size: 16px;
  }
`;

const StyledContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const StyledContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  text-decoration: none;
  border-radius: ${theme.borderRadius.md};
  border: 2px solid ${theme.colors.primary};
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.sm};

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  svg {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;

    svg {
      font-size: 16px;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHeroSection id="home">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <StyledProfileImage>
          <div className="image-inner">MN</div>
        </StyledProfileImage>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <StyledName>Cassiane Amaral</StyledName>
        <StyledTitle>Estudante de Fisioterapia</StyledTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <StyledSubtitle>
          Profissional dedicada à reabilitação e bem-estar, com foco em
          tratamentos baseados em evidências científicas e cuidado humanizado.
        </StyledSubtitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <StyledCredentials>
          <StyledCredential>
            <FaMapMarkerAlt />
            CREFITO-XX XXXXXX-F
          </StyledCredential>
          <StyledCredential>
            <FaMapMarkerAlt />
            Especialista em Fisioterapia Traumato-Ortopédica
          </StyledCredential>
          <StyledCredential>
            <FaMapMarkerAlt />
            10+ anos de experiência
          </StyledCredential>
        </StyledCredentials>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <StyledContactLinks>
          <StyledContactLink
            href="mailto:mario.fisio@email.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
            E-mail
          </StyledContactLink>
          <StyledContactLink
            href="https://linkedin.com/in/mario-fisio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </StyledContactLink>
          <StyledContactLink
            href="tel:+55XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone />
            Contacto
          </StyledContactLink>
        </StyledContactLinks>
      </motion.div>
    </StyledHeroSection>
  );
};

export default Hero;
