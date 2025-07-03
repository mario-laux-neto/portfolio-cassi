// src/components/sections/PainPointHero.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 120px 0 0 0;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.lightGray} 0%,
    rgba(46, 134, 193, 0.05) 100%
  );
  position: relative;

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 100px 0 0 0;
  }
`;

const StyledPainPoint = styled.h1`
  font-size: clamp(32px, 6vw, 56px);
  font-weight: 700;
  color: ${theme.colors.primary};
  line-height: 1.2;
  margin-bottom: 20px;
  max-width: 800px;

  .highlight {
    color: ${theme.colors.success};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${theme.colors.success};
      border-radius: 2px;
    }
  }
`;

const StyledSubtitle = styled.p`
  font-size: clamp(18px, 3vw, 24px);
  color: ${theme.colors.mediumGray};
  line-height: 1.5;
  margin-bottom: 40px;
  max-width: 600px;
`;

const StyledCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const StyledMainCTA = styled.a`
  background: linear-gradient(135deg, ${theme.colors.success} 0%, #1e8449 100%);
  color: ${theme.colors.white};
  padding: 18px 40px;
  border-radius: ${theme.borderRadius.lg};
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: ${theme.shadows.lg};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(39, 174, 96, 0.4);
    background: linear-gradient(
      135deg,
      #1e8449 0%,
      ${theme.colors.success} 100%
    );
  }

  svg {
    font-size: 20px;
  }
`;

const StyledTrustIndicators = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const StyledTrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.mediumGray};
  font-size: 14px;

  svg {
    color: ${theme.colors.success};
    font-size: 16px;
  }
`;

const PainPointHero = () => {
  const trustItems = [
    "CREFITO Ativo",
    "Mais de 500 pacientes",
    "10 anos de experiência",
    "Avaliação gratuita",
  ];

  return (
    <StyledHeroSection id="home">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <StyledPainPoint>
          Livre-se da <span className="highlight">dor</span> e recupere sua
          <span className="highlight"> qualidade de vida</span>
        </StyledPainPoint>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <StyledSubtitle>
          Tratamento fisioterapêutico personalizado, baseado em evidências
          científicas e focado nos seus resultados. Sua primeira consulta inclui
          avaliação completa gratuita.
        </StyledSubtitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <StyledCTAContainer>
          <StyledMainCTA
            href="https://wa.me/5554996837282?text=Olá! Gostaria de agendar minha avaliação gratuita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Agendar Avaliação Gratuita
          </StyledMainCTA>

          <StyledTrustIndicators>
            {trustItems.map((item, index) => (
              <StyledTrustItem key={index}>
                <FaCheckCircle />
                {item}
              </StyledTrustItem>
            ))}
          </StyledTrustIndicators>
        </StyledCTAContainer>
      </motion.div>
    </StyledHeroSection>
  );
};

export default PainPointHero;
