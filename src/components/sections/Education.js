// src/components/sections/Education.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import {
  FaGraduationCap,
  FaCertificate,
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";

const StyledEducationSection = styled.section`
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

const StyledEducationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 40px;
`;

const StyledEducationCategory = styled.div`
  .category-title {
    font-size: 24px;
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      color: ${theme.colors.success};
      font-size: 28px;
    }
  }
`;

const StyledEducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledEducationCard = styled(motion.div)`
  background: linear-gradient(135deg, ${theme.colors.pastelPink}, ${theme.colors.pastelYellow}); // Alterado para fundo com tons pastel
  border-radius: ${theme.borderRadius.lg};
  padding: 30px;
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid ${theme.colors.success};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const StyledEducationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledEducationIcon = styled.div`
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

const StyledEducationInfo = styled.div`
  flex: 1;

  .degree-title {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: 5px;
    line-height: 1.3;
  }

  .institution {
    font-size: 16px;
    color: ${theme.colors.success};
    font-weight: 500;
    margin-bottom: 8px;
  }

  .period {
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

const StyledEducationDescription = styled.p`
  font-size: 15px;
  color: ${theme.colors.mediumGray};
  line-height: 1.6;
  margin-bottom: 15px;
`;

const StyledEducationDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 6px;
    font-size: 14px;
    color: ${theme.colors.mediumGray};
    line-height: 1.4;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 6px;
      width: 4px;
      height: 4px;
      background: ${theme.colors.success};
      border-radius: 50%;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledCertificationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary}10,
    ${theme.colors.success}10
  );
  border: 1px solid ${theme.colors.success}30;
  color: ${theme.colors.primary};
  padding: 8px 12px;
  border-radius: ${theme.borderRadius.sm};
  font-size: 12px;
  font-weight: 500;
  margin-top: 15px;

  svg {
    font-size: 14px;
    color: ${theme.colors.success};
  }
`;

const Education = () => {
  const academicEducation = [
    {
      icon: FaGraduationCap,
      title: "Licenciatura em Fisioterapia",
      institution: "Escola Superior de Saúde de Lisboa",
      period: "2010 - 2014",
      description:
        "Formação completa em fisioterapia com classificação final de 16 valores. Projeto final sobre reabilitação neurológica.",
      details: [
        "Anatomia Humana e Fisiologia",
        "Biomecânica e Cinesiologia",
        "Técnicas de Avaliação Fisioterapêutica",
        "Fisioterapia Especializada por Sistemas",
        "Estágios em Hospitais e Clínicas",
      ],
    },
    {
      icon: FaUniversity,
      title: "Mestrado em Fisioterapia Neurológica",
      institution: "Faculdade de Motricidade Humana - UL",
      period: "2018 - 2020",
      description:
        "Especialização avançada em reabilitação neurológica com dissertação sobre plasticidade neural em doentes com AVC.",
      details: [
        "Neuroplasticidade e Recuperação Funcional",
        "Métodos Avançados de Avaliação",
        "Tecnologias de Reabilitação",
        "Investigação Clínica em Fisioterapia",
        "Dissertação: 'Efeitos da Realidade Virtual na Reabilitação do Membro Superior'",
      ],
    },
    {
      icon: FaGraduationCap,
      title: "Graduação em Fisioterapia",
      institution: "Universidade de Lisboa",
      period: "2021 - Presente",
      description:
        "Curso em andamento com foco em fisioterapia geral e especializações futuras em áreas como neurologia e ortopedia.",
    },
  ];

  const specializations = [
    {
      icon: FaCertificate,
      title: "Especialização em Fisioterapia Traumato-Ortopédica",
      institution: "Associação Portuguesa de Fisioterapeutas",
      period: "2016 - 2017",
      description:
        "Certificação oficial de especialista pelo CREFITO, com competências avançadas em traumato-ortopedia.",
      details: [
        "Avaliação e Diagnóstico Diferencial",
        "Terapia Manual Ortopédica",
        "Reabilitação Pós-Cirúrgica",
        "Biomecânica do Movimento",
      ],
    },
    {
      icon: FaBookOpen,
      title: "Pós-Graduação em Terapia Manual",
      institution: "Instituto Superior de Ciências da Saúde Norte",
      period: "2017 - 2018",
      description:
        "Formação intensiva em técnicas manuais baseadas em evidência científica.",
      details: [
        "Conceito Mulligan",
        "Técnicas de Maitland",
        "Mobilização Neural",
        "Manipulação Articular",
      ],
    },
  ];

  const certifications = [
    {
      icon: FaAward,
      title: "Curso Bobath - Conceito de Tratamento Neuroevolutivo",
      institution: "IBITA International",
      period: "2019",
      description:
        "Certificação internacional para tratamento de adultos com lesões neurológicas.",
      details: [
        "Curso Básico - 8 semanas",
        "Certificação Internacional",
        "Tratamento de Hemiplegia",
        "Análise do Movimento Patológico",
      ],
    },
    {
      icon: FaCertificate,
      title: "Dry Needling - Punção Seca",
      institution: "Trigger Point Academy",
      period: "2020",
      description:
        "Certificação em técnicas de punção seca para tratamento de pontos gatilho miofasciais.",
      details: [
        "Nível 1 e 2",
        "Anatomia Aplicada",
        "Técnicas Seguras",
        "Tratamento da Dor Miofascial",
      ],
    },
    {
      icon: FaBookOpen,
      title: "Pilates Clínico",
      institution: "Polestar Pilates",
      period: "2021",
      description:
        "Formação completa em Pilates aplicado à reabilitação fisioterapêutica.",
      details: [
        "Módulo Básico e Avançado",
        "Solo e Equipamentos",
        "Aplicação Clínica",
        "Patologias Específicas",
      ],
    },
    {
      icon: FaAward,
      title: "Kinesio Taping",
      institution: "Kinesio Taping Association",
      period: "2018",
      description: "Certificação oficial em bandagem neuromuscular.",
      details: [
        "Fundamentos do Método",
        "Aplicações Clínicas",
        "Técnicas Avançadas",
        "Certificação Internacional",
      ],
    },
  ];

  const continuousEducation = [
    {
      icon: FaBookOpen,
      title: "Formação Contínua Anual",
      institution: "Diversos Fornecedores",
      period: "2014 - Presente",
      description:
        "Compromisso com a atualização constante através de cursos, workshops e congressos.",
      details: [
        "40+ horas de formação anual",
        "Congressos Nacionais e Internacionais",
        "Workshops Práticos",
        "Webinars Científicos",
      ],
    },
  ];

  return (
    <StyledEducationSection id="education">
      <StyledSectionHeader>
        <h2 className="numbered-heading">Formação e Certificações</h2>
        <p>
          A minha formação é o alicerce da prática clínica de excelência.
          Mantenho-me constantemente atualizado com as mais recentes evidências
          científicas.
        </p>
      </StyledSectionHeader>

      <StyledEducationContainer>
        {/* Formação Académica */}
        <StyledEducationCategory>
          <h3 className="category-title">
            <FaGraduationCap />
            Formação Académica
          </h3>
          <StyledEducationGrid>
            {academicEducation.map((education, index) => (
              <StyledEducationCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StyledEducationHeader>
                  <StyledEducationIcon>
                    <education.icon />
                  </StyledEducationIcon>
                  <StyledEducationInfo>
                    <div className="degree-title">{education.title}</div>
                    <div className="institution">{education.institution}</div>
                    <div className="period">
                      <FaCalendarAlt />
                      {education.period}
                    </div>
                  </StyledEducationInfo>
                </StyledEducationHeader>

                <StyledEducationDescription>
                  {education.description}
                </StyledEducationDescription>

                <StyledEducationDetails>
                  {education.details?.map((detail, detIndex) => (
                    <li key={detIndex}>{detail}</li>
                  ))}
                </StyledEducationDetails>
              </StyledEducationCard>
            ))}
          </StyledEducationGrid>
        </StyledEducationCategory>

        {/* Especializações */}
        <StyledEducationCategory>
          <h3 className="category-title">
            <FaCertificate />
            Especializações
          </h3>
          <StyledEducationGrid>
            {specializations.map((specialization, index) => (
              <StyledEducationCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StyledEducationHeader>
                  <StyledEducationIcon>
                    <specialization.icon />
                  </StyledEducationIcon>
                  <StyledEducationInfo>
                    <div className="degree-title">{specialization.title}</div>
                    <div className="institution">
                      {specialization.institution}
                    </div>
                    <div className="period">
                      <FaCalendarAlt />
                      {specialization.period}
                    </div>
                  </StyledEducationInfo>
                </StyledEducationHeader>

                <StyledEducationDescription>
                  {specialization.description}
                </StyledEducationDescription>

                <StyledEducationDetails>
                  {specialization.details?.map((detail, detIndex) => (
                    <li key={detIndex}>{detail}</li>
                  ))}
                </StyledEducationDetails>

                <StyledCertificationBadge>
                  <FaAward />
                  Certificação Oficial
                </StyledCertificationBadge>
              </StyledEducationCard>
            ))}
          </StyledEducationGrid>
        </StyledEducationCategory>

        {/* Certificações */}
        <StyledEducationCategory>
          <h3 className="category-title">
            <FaAward />
            Certificações Profissionais
          </h3>
          <StyledEducationGrid>
            {certifications.map((certification, index) => (
              <StyledEducationCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StyledEducationHeader>
                  <StyledEducationIcon>
                    <certification.icon />
                  </StyledEducationIcon>
                  <StyledEducationInfo>
                    <div className="degree-title">{certification.title}</div>
                    <div className="institution">
                      {certification.institution}
                    </div>
                    <div className="period">
                      <FaCalendarAlt />
                      {certification.period}
                    </div>
                  </StyledEducationInfo>
                </StyledEducationHeader>

                <StyledEducationDescription>
                  {certification.description}
                </StyledEducationDescription>

                <StyledEducationDetails>
                  {certification.details?.map((detail, detIndex) => (
                    <li key={detIndex}>{detail}</li>
                  ))}
                </StyledEducationDetails>
              </StyledEducationCard>
            ))}
          </StyledEducationGrid>
        </StyledEducationCategory>

        {/* Formação Contínua */}
        <StyledEducationCategory>
          <h3 className="category-title">
            <FaBookOpen />
            Formação Contínua
          </h3>
          <StyledEducationGrid>
            {continuousEducation.map((education, index) => (
              <StyledEducationCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StyledEducationHeader>
                  <StyledEducationIcon>
                    <education.icon />
                  </StyledEducationIcon>
                  <StyledEducationInfo>
                    <div className="degree-title">{education.title}</div>
                    <div className="institution">{education.institution}</div>
                    <div className="period">
                      <FaCalendarAlt />
                      {education.period}
                    </div>
                  </StyledEducationInfo>
                </StyledEducationHeader>

                <StyledEducationDescription>
                  {education.description}
                </StyledEducationDescription>

                <StyledEducationDetails>
                  {education.details?.map((detail, detIndex) => (
                    <li key={detIndex}>{detail}</li>
                  ))}
                </StyledEducationDetails>
              </StyledEducationCard>
            ))}
          </StyledEducationGrid>
        </StyledEducationCategory>
      </StyledEducationContainer>
    </StyledEducationSection>
  );
};

export default Education;
