// src/components/sections/SpecializationAreas.js
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
  FaHandsHelping,
  FaStethoscope,
} from "react-icons/fa";

const StyledSpecializationSection = styled.section`
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
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  .numbered-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, 32px);
    font-weight: 600;
    color: ${theme.colors.primary};
    line-height: 1.1;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: "0" counter(section) ".";
      margin-right: 10px;
      color: ${theme.colors.success};
      font-family: ${theme.fonts.mono};
      font-size: clamp(16px, 3vw, 20px);
      font-weight: 400;
    }

    &:after {
      content: "";
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: ${theme.colors.lightGray};

      @media (max-width: 768px) {
        width: 100px;
        margin-left: 10px;
      }

      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  p {
    font-size: 18px;
    color: ${theme.colors.mediumGray};
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const StyledSpecializationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StyledSpecializationCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 40px 30px;
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.lg};
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

const StyledSpecializationIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.success}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 32px;
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.md};
`;

const StyledSpecializationTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-bottom: 15px;
  line-height: 1.3;
`;

const StyledSpecializationDescription = styled.p`
  font-size: 16px;
  color: ${theme.colors.mediumGray};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const StyledSpecializationTechniques = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 14px;
    color: ${theme.colors.mediumGray};

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: ${theme.colors.success};
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SpecializationAreas = () => {
  const specializations = [
    {
      icon: FaBone,
      title: "Fisioterapia Traumato-Ortopédica",
      description:
        "Especializado no tratamento de lesões do sistema músculo-esquelético, pós-cirúrgico e reabilitação desportiva.",
      techniques: [
        "Terapia Manual Ortopédica",
        "Mobilização Articular",
        "Exercícios Terapêuticos",
        "Reabilitação Pós-Cirúrgica",
      ],
    },
    {
      icon: FaBrain,
      title: "Fisioterapia Neurológica",
      description:
        "Tratamento de patologias do sistema nervoso central e periférico, com foco na recuperação funcional.",
      techniques: [
        "Conceito Bobath",
        "Facilitação Neuromuscular Proprioceptiva",
        "Treino de Marcha",
        "Estimulação Sensorial",
      ],
    },
    {
      icon: FaLungs,
      title: "Fisioterapia Respiratória",
      description:
        "Cuidados especializados para patologias respiratórias e prevenção de complicações pulmonares.",
      techniques: [
        "Técnicas de Higiene Brônquica",
        "Reeducação Respiratória",
        "Ventilação Não Invasiva",
        "Exercícios Respiratórios",
      ],
    },
    {
      icon: FaRunning,
      title: "Fisioterapia Desportiva",
      description:
        "Prevenção, tratamento e reabilitação de lesões relacionadas com a prática desportiva.",
      techniques: [
        "Avaliação Biomecânica",
        "Prevenção de Lesões",
        "Return to Sport",
        "Análise do Movimento",
      ],
    },
    {
      icon: FaHeart,
      title: "Fisioterapia na Saúde da Mulher",
      description:
        "Cuidados especializados em saúde feminina, incluindo fisioterapia pélvica e obstétrica.",
      techniques: [
        "Fisioterapia Pélvica",
        "Preparação para o Parto",
        "Pós-Parto",
        "Disfunções do Pavimento Pélvico",
      ],
    },
    {
      icon: FaBaby,
      title: "Fisioterapia Pediátrica",
      description:
        "Tratamento especializado para crianças e adolescentes, promovendo o desenvolvimento motor.",
      techniques: [
        "Desenvolvimento Neuropsicomotor",
        "Tratamento de Torcicolos",
        "Escoliose Infantil",
        "Distúrbios Respiratórios",
      ],
    },
    {
      icon: FaHandsHelping,
      title: "Terapia Manual",
      description:
        "Técnicas manuais especializadas para tratamento de disfunções articulares e musculares.",
      techniques: [
        "Osteopatia",
        "Quiropraxia",
        "Massagem Terapêutica",
        "Mobilização Neural",
      ],
    },
    {
      icon: FaStethoscope,
      title: "Fisioterapia Geriátrica",
      description:
        "Cuidados especializados para a população idosa, promovendo autonomia e qualidade de vida.",
      techniques: [
        "Prevenção de Quedas",
        "Treino de Equilíbrio",
        "Fortalecimento Funcional",
        "Manutenção da Independência",
      ],
    },
  ];

  return (
    <StyledSpecializationSection id="specializations">
      <StyledSectionHeader>
        <h2 className="numbered-heading">Áreas de Especialização</h2>
        <p>
          Com formação contínua e experiência clínica diversificada, ofereço
          tratamentos especializados em múltiplas áreas da fisioterapia, sempre
          baseados nas mais recentes evidências científicas.
        </p>
      </StyledSectionHeader>

      <StyledSpecializationsGrid>
        {specializations.map((specialization, index) => (
          <StyledSpecializationCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <StyledSpecializationIcon>
              <specialization.icon />
            </StyledSpecializationIcon>

            <StyledSpecializationTitle>
              {specialization.title}
            </StyledSpecializationTitle>

            <StyledSpecializationDescription>
              {specialization.description}
            </StyledSpecializationDescription>

            <StyledSpecializationTechniques>
              {specialization.techniques.map((technique, techIndex) => (
                <li key={techIndex}>{technique}</li>
              ))}
            </StyledSpecializationTechniques>
          </StyledSpecializationCard>
        ))}
      </StyledSpecializationsGrid>
    </StyledSpecializationSection>
  );
};

export default SpecializationAreas;
