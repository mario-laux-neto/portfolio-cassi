// src/components/sections/SolutionsGrid.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import {
  FaBone,
  FaRunning,
  FaHeart,
  FaBaby,
  FaLungs,
  FaBrain,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const StyledSolutionsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    ${theme.colors.lightGray} 0%,
    rgba(46, 134, 193, 0.02) 100%
  );
`;

const StyledSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: ${theme.colors.mediumGray};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const StyledSolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StyledSolutionCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 40px 30px;
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.lg};

    .cta-button {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary},
      ${theme.colors.success}
    );
  }
`;

const StyledProblemSection = styled.div`
  margin-bottom: 25px;

  .problem-icon {
    font-size: 48px;
    color: #e74c3c;
    margin-bottom: 15px;
  }

  .problem-title {
    font-size: 20px;
    font-weight: 600;
    color: #e74c3c;
    margin-bottom: 10px;
  }

  .problem-description {
    font-size: 14px;
    color: ${theme.colors.mediumGray};
    line-height: 1.5;
  }
`;

const StyledArrow = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  svg {
    font-size: 24px;
    color: ${theme.colors.primary};
  }
`;

const StyledSolutionSection = styled.div`
  margin-bottom: 30px;

  .solution-icon {
    font-size: 48px;
    color: ${theme.colors.success};
    margin-bottom: 15px;
  }

  .solution-title {
    font-size: 22px;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: 15px;
  }

  .solution-description {
    font-size: 16px;
    color: ${theme.colors.darkGray};
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .solution-benefits {
    list-style: none;
    padding: 0;

    li {
      font-size: 14px;
      color: ${theme.colors.mediumGray};
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;

      &::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: ${theme.colors.success};
        font-weight: bold;
      }
    }
  }
`;

const StyledCTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.primaryDark}
  );
  color: ${theme.colors.white};
  padding: 12px 20px;
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      135deg,
      ${theme.colors.primaryDark},
      ${theme.colors.primary}
    );
    transform: translateY(-2px);
  }

  svg {
    font-size: 16px;
  }
`;

const SolutionsGrid = () => {
  const solutions = [
    {
      problemIcon: <FaBone className="problem-icon" />,
      problemTitle: "Dor nas Costas Crônica",
      problemDescription: "Dor constante que limita suas atividades diárias",
      solutionIcon: <FaBone className="solution-icon" />,
      solutionTitle: "Fisioterapia Ortopédica Especializada",
      solutionDescription:
        "Tratamento focado na causa raiz da dor, não apenas nos sintomas",
      benefits: [
        "Alívio da dor em 2-4 sessões",
        "Fortalecimento muscular direcionado",
        "Correção postural definitiva",
        "Exercícios personalizados para casa",
      ],
    },
    {
      problemIcon: <FaRunning className="problem-icon" />,
      problemTitle: "Lesão Esportiva",
      problemDescription: "Impedindo você de praticar o esporte que ama",
      solutionIcon: <FaRunning className="solution-icon" />,
      solutionTitle: "Fisioterapia Esportiva",
      solutionDescription:
        "Recuperação completa e retorno seguro à atividade física",
      benefits: [
        "Protocolo específico por modalidade",
        "Prevenção de re-lesões",
        "Otimização de performance",
        "Acompanhamento até o retorno total",
      ],
    },
    {
      problemIcon: <FaHeart className="problem-icon" />,
      problemTitle: "Incontinência Urinária",
      problemDescription: "Constrangimento e limitação social",
      solutionIcon: <FaHeart className="solution-icon" />,
      solutionTitle: "Fisioterapia Pélvica",
      solutionDescription:
        "Tratamento discreto e eficaz para saúde íntima feminina",
      benefits: [
        "Fortalecimento do assoalho pélvico",
        "Melhora da qualidade de vida",
        "Tratamento sem cirurgia",
        "Resultados em 6-8 semanas",
      ],
    },
    {
      problemIcon: <FaBaby className="problem-icon" />,
      problemTitle: "Dores na Gestação",
      problemDescription: "Desconforto que interfere na gravidez",
      solutionIcon: <FaBaby className="solution-icon" />,
      solutionTitle: "Fisioterapia Obstétrica",
      solutionDescription: "Cuidado especializado para gestantes e pós-parto",
      benefits: [
        "Alívio de dores lombares",
        "Preparação para o parto",
        "Recuperação pós-parto",
        "Exercícios seguros para grávidas",
      ],
    },
    {
      problemIcon: <FaLungs className="problem-icon" />,
      problemTitle: "Dificuldade Respiratória",
      problemDescription: "Falta de ar que limita suas atividades",
      solutionIcon: <FaLungs className="solution-icon" />,
      solutionTitle: "Fisioterapia Respiratória",
      solutionDescription:
        "Melhora da capacidade pulmonar e qualidade respiratória",
      benefits: [
        "Expansão da capacidade pulmonar",
        "Técnicas de higiene brônquica",
        "Reabilitação pós-COVID",
        "Exercícios respiratórios específicos",
      ],
    },
    {
      problemIcon: <FaBrain className="problem-icon" />,
      problemTitle: "Sequelas Neurológicas",
      problemDescription: "Limitações motoras após AVC ou lesões",
      solutionIcon: <FaBrain className="solution-icon" />,
      solutionTitle: "Fisioterapia Neurológica",
      solutionDescription: "Reabilitação neuromotora personalizada",
      benefits: [
        "Recuperação de movimentos",
        "Melhora do equilíbrio",
        "Estímulo da neuroplasticidade",
        "Maior independência funcional",
      ],
    },
  ];

  return (
    <StyledSolutionsSection id="solucoes">
      <StyledSectionHeader>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Como Posso Te Ajudar
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Cada problema tem uma solução específica. Veja como posso transformar
          seu desconforto em bem-estar
        </motion.p>
      </StyledSectionHeader>

      <StyledSolutionsGrid>
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <StyledSolutionCard>
              <StyledProblemSection>
                {solution.problemIcon}
                <div className="problem-title">{solution.problemTitle}</div>
                <div className="problem-description">
                  {solution.problemDescription}
                </div>
              </StyledProblemSection>

              <StyledArrow>
                <FaArrowRight />
              </StyledArrow>

              <StyledSolutionSection>
                {solution.solutionIcon}
                <div className="solution-title">{solution.solutionTitle}</div>
                <div className="solution-description">
                  {solution.solutionDescription}
                </div>

                <ul className="solution-benefits">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </StyledSolutionSection>

              <StyledCTAButton
                className="cta-button"
                href={`https://wa.me/5554996837282?text=Olá! Gostaria de saber mais sobre ${solution.solutionTitle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                Quero Saber Mais
              </StyledCTAButton>
            </StyledSolutionCard>
          </motion.div>
        ))}
      </StyledSolutionsGrid>
    </StyledSolutionsSection>
  );
};

export default SolutionsGrid;
