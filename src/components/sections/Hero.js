// src/components/sections/Hero.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  padding: 120px 0 0 0;

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 100px 0 0 0;
  }

  @media (max-width: 480px) {
    padding: 80px 0 0 0;
  }
`;

const StyledOverline = styled.h1`
  color: ${theme.colors.green};
  margin: 0 0 30px 4px;
  font-size: clamp(${theme.fontSizes.sm}, 5vw, ${theme.fontSizes.md});
  font-family: ${theme.fonts.mono};
  font-weight: 400;

  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }
`;

const StyledTitle = styled.h2`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: ${theme.colors.lightestSlate};
  line-height: 1.1;
  margin: 0 0 50px 0;

  @media (max-width: 480px) {
    font-size: clamp(32px, 8vw, 60px);
    margin: 0 0 15px 0;
  }
`;

const StyledSubtitle = styled.h3`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: ${theme.colors.slate};
  line-height: 1.1;
  margin: 0 0 30px;

  @media (max-width: 480px) {
    font-size: clamp(32px, 8vw, 60px);
    margin: 0 0 20px;
  }
`;

const StyledDescription = styled.div`
  margin: 20px 0 0;
  max-width: 540px;

  p {
    font-size: ${theme.fontSizes.xl};
    line-height: 1.3;
    color: ${theme.colors.slate};
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.lg};
    }
  }
`;

const StyledEmailLink = styled.a`
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

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 18px 50px;
  }
`;

const Hero = () => {
  const one = <StyledOverline>Olá, meu nome é</StyledOverline>;
  const two = <StyledTitle>Mário Laux Neto</StyledTitle>;
  const three = <StyledSubtitle>Full-Stack em desenvolvimento</StyledSubtitle>;
  const four = (
    <StyledDescription>
      <p>
        Graduando em Sistemas de Informação e desenvolvedor focado no ecossistema JavaScript. Atualmente, como estagiário no Centro de Residência em Software do Pollen Parque, desenvolvo projetos práticos com HTML, CSS, React.js e Next.js. Minha experiência anterior nas áreas administrativa e contábil  me proporcionou forte organização e atenção aos detalhes, competências que aplico hoje na criação de software de qualidade.
      </p>
    </StyledDescription>
  );
  const five = (
    <StyledEmailLink href="https://wa.me/5554996837282" target="_blank" rel="noopener noreferrer">
      Entre em contato!
    </StyledEmailLink>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </StyledHeroSection>
  );
};

export default Hero;
