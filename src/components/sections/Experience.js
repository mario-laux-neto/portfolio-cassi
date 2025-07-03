// src/components/sections/Experience.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

const StyledExperienceSection = styled.section`
  padding: 100px 0;
  background: ${theme.colors.white};
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

const StyledTimeline = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${theme.colors.primary},
      ${theme.colors.success}
    );
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const StyledExperienceItem = styled(motion.div)`
  display: flex;
  justify-content: ${(props) => (props.isRight ? "flex-end" : "flex-start")};
  margin-bottom: 50px;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: 60px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 30px;
    width: 16px;
    height: 16px;
    background: ${theme.colors.success};
    border: 4px solid ${theme.colors.white};
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: ${theme.shadows.md};
    z-index: 2;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const StyledExperienceCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 30px;
  box-shadow: ${theme.shadows.md};
  width: 45%;
  position: relative;
  border-left: 4px solid ${theme.colors.primary};

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
    transition: all 0.3s ease;
  }
`;

const StyledCompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const StyledCompanyIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.success}
  );
  border-radius: ${theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: 20px;
  flex-shrink: 0;
`;

const StyledCompanyInfo = styled.div`
  flex: 1;

  .company-name {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: 5px;
  }

  .location {
    font-size: 14px;
    color: ${theme.colors.mediumGray};
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      font-size: 12px;
    }
  }
`;

const StyledPosition = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-bottom: 10px;
`;

const StyledPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${theme.colors.success};
  font-weight: 500;
  margin-bottom: 15px;

  svg {
    font-size: 12px;
  }
`;

const StyledDescription = styled.p`
  font-size: 16px;
  color: ${theme.colors.mediumGray};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const StyledResponsibilities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 14px;
    color: ${theme.colors.mediumGray};
    line-height: 1.5;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 8px;
      width: 6px;
      height: 6px;
      background: ${theme.colors.success};
      border-radius: 50%;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      position: "Estagiária de Fisioterapia",
      company: "Hospital Central de Lisboa",
      location: "Lisboa, Portugal",
      period: "2023 - Presente",
      description:
        "Atuação em fisioterapia neurológica e traumato-ortopédica, com foco em aprendizado prático e desenvolvimento profissional.",
      responsibilities: [
        "Acompanhamento de pacientes neurológicos",
        "Participação em sessões de reabilitação pós-cirúrgica",
        "Colaboração com equipes multidisciplinares",
      ],
    },
  ];

  return (
    <StyledExperienceSection id="experience">
      <StyledSectionHeader>
        <h2 className="numbered-heading">Experiência Profissional</h2>
        <p>
          O meu percurso profissional tem sido marcado pela diversidade de
          contextos clínicos e pela busca constante da excelência no cuidado aos
          pacientes.
        </p>
      </StyledSectionHeader>

      <StyledTimeline>
        {experiences.map((experience, index) => (
          <StyledExperienceItem
            key={index}
            isRight={index % 2 === 1}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <StyledExperienceCard>
              <StyledCompanyHeader>
                <StyledCompanyIcon>
                  <FaBuilding />
                </StyledCompanyIcon>
                <StyledCompanyInfo>
                  <div className="company-name">{experience.company}</div>
                  <div className="location">
                    <FaMapMarkerAlt />
                    {experience.location}
                  </div>
                </StyledCompanyInfo>
              </StyledCompanyHeader>

              <StyledPosition>{experience.position}</StyledPosition>

              <StyledPeriod>
                <FaCalendarAlt />
                {experience.period}
              </StyledPeriod>

              <StyledDescription>{experience.description}</StyledDescription>

              <StyledResponsibilities>
                {experience.responsibilities.map(
                  (responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  )
                )}
              </StyledResponsibilities>
            </StyledExperienceCard>
          </StyledExperienceItem>
        ))}
      </StyledTimeline>
    </StyledExperienceSection>
  );
};
export default Experience;
