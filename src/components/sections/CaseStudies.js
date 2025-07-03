// src/components/sections/CaseStudies.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import {
  FaUserMd,
  FaClipboardList,
  FaHeartbeat,
  FaChartLine,
  FaCalendarCheck,
  FaStethoscope,
} from "react-icons/fa";

const StyledCaseStudiesSection = styled.section`
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

const StyledCaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const StyledCaseStudyCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 35px;
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid ${theme.colors.primary};

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

const StyledCaseHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.lightGray};

  .case-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(
      135deg,
      ${theme.colors.primary},
      ${theme.colors.success}
    );
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: 20px;
    flex-shrink: 0;
  }

  .case-info {
    flex: 1;

    .case-title {
      font-size: 20px;
      font-weight: 600;
      color: ${theme.colors.primary};
      margin-bottom: 5px;
      line-height: 1.3;
    }

    .case-subtitle {
      font-size: 14px;
      color: ${theme.colors.mediumGray};
      display: flex;
      align-items: center;
      gap: 5px;

      svg {
        font-size: 12px;
        color: ${theme.colors.success};
      }
    }
  }
`;

const StyledCaseSection = styled.div`
  margin-bottom: 25px;

  .section-title {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${theme.colors.success};
      font-size: 16px;
    }
  }

  .section-content {
    font-size: 15px;
    color: ${theme.colors.mediumGray};
    line-height: 1.6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledOutcomesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 15px;
    color: ${theme.colors.mediumGray};
    line-height: 1.5;

    &:before {
      content: "✓";
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

const StyledTreatmentBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;

  .treatment-badge {
    background: linear-gradient(
      135deg,
      ${theme.colors.primary}10,
      ${theme.colors.success}10
    );
    border: 1px solid ${theme.colors.success}30;
    color: ${theme.colors.primary};
    padding: 6px 10px;
    border-radius: ${theme.borderRadius.sm};
    font-size: 12px;
    font-weight: 500;
  }
`;

const StyledSuccessMetric = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.success}10,
    ${theme.colors.primary}10
  );
  border-radius: ${theme.borderRadius.sm};
  padding: 15px;
  margin-top: 20px;
  text-align: center;

  .metric-value {
    font-size: 24px;
    font-weight: 700;
    color: ${theme.colors.success};
    margin-bottom: 5px;
  }

  .metric-label {
    font-size: 13px;
    color: ${theme.colors.mediumGray};
    font-weight: 500;
  }
`;

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: FaHeartbeat,
      title: "Recuperação Pós-AVC",
      subtitle: "Paciente de 68 anos",
      duration: "6 meses de tratamento",
      condition:
        "Paciente com hemiplegia direita após AVC isquémico, com limitações severas na mobilidade e atividades de vida diária.",
      approach:
        "Aplicação do Conceito Bobath combinado com treino de marcha em passadeira, terapia por constrainção induzida e exercícios funcionais específicos.",
      treatments: [
        "Conceito Bobath",
        "Treino de Marcha",
        "Terapia por Constrainção",
        "Eletroestimulação",
      ],
      outcomes: [
        "Recuperação de 80% da função motora do membro superior",
        "Marcha independente com auxiliar de marcha",
        "Retorno parcial às atividades de vida diária",
        "Melhoria significativa na qualidade de vida",
      ],
      successMetric: {
        value: "80%",
        label: "Recuperação Funcional",
      },
    },
    {
      icon: FaStethoscope,
      title: "Reabilitação Pós-Cirúrgica de Joelho",
      subtitle: "Atleta de 28 anos",
      duration: "4 meses de tratamento",
      condition:
        "Atleta submetido a reconstrução do ligamento cruzado anterior (LCA) com necessidade de retorno ao desporto de alta competição.",
      approach:
        "Protocolo de reabilitação em fases progressivas, incluindo fortalecimento específico, propriocepção avançada e treino desportivo funcional.",
      treatments: [
        "Fortalecimento Progressivo",
        "Propriocepção",
        "Treino Pliométrico",
        "Return to Sport",
      ],
      outcomes: [
        "Retorno completo à competição em 4 meses",
        "Força muscular igual ou superior ao membro contralateral",
        "Testes funcionais dentro da normalidade",
        "Prevenção de recidivas com programa preventivo",
      ],
      successMetric: {
        value: "100%",
        label: "Retorno ao Desporto",
      },
    },
    {
      icon: FaUserMd,
      title: "Tratamento de Lombalgia Crónica",
      subtitle: "Profissional de escritório de 45 anos",
      duration: "3 meses de tratamento",
      condition:
        "Lombalgia crónica há 2 anos com limitação funcional severa e impacto significativo no trabalho e atividades diárias.",
      approach:
        "Abordagem multimodal incluindo educação do paciente, exercícios de estabilização lombar, terapia manual e modificações ergonómicas.",
      treatments: [
        "RPG",
        "Pilates Clínico",
        "Terapia Manual",
        "Educação Postural",
      ],
      outcomes: [
        "Redução de 90% da intensidade da dor",
        "Retorno completo às atividades laborais",
        "Melhoria da postura e ergonomia",
        "Autonomia na gestão dos sintomas",
      ],
      successMetric: {
        value: "90%",
        label: "Redução da Dor",
      },
    },
    {
      icon: FaHeartbeat,
      title: "Reabilitação Respiratória Pós-COVID",
      subtitle: "Paciente de 55 anos",
      duration: "2 meses de tratamento",
      condition:
        "Sequelas respiratórias pós-COVID-19 com dispneia aos esforços e limitação da capacidade funcional.",
      approach:
        "Programa de reabilitação respiratória personalizado com exercícios respiratórios, treino aeróbico gradual e técnicas de conservação de energia.",
      treatments: [
        "Exercícios Respiratórios",
        "Treino Aeróbico",
        "Técnicas de Relaxamento",
        "Educação",
      ],
      outcomes: [
        "Melhoria significativa da capacidade pulmonar",
        "Redução da dispneia aos esforços",
        "Aumento da tolerância ao exercício",
        "Retorno às atividades quotidianas normais",
      ],
      successMetric: {
        value: "85%",
        label: "Melhoria Respiratória",
      },
    },
    {
      icon: FaUserMd,
      title: "Tratamento de Escoliose Adolescente",
      subtitle: "Adolescente de 16 anos",
      duration: "8 meses de tratamento",
      condition:
        "Escoliose idiopática com curva torácica de 35° com indicação para tratamento conservador.",
      approach:
        "Método Schroth específico para escoliose, combinado com exercícios de fortalecimento e consciencialização postural.",
      treatments: [
        "Método Schroth",
        "RPG",
        "Fortalecimento Core",
        "Consciencialização Postural",
      ],
      outcomes: [
        "Estabilização da progressão da curva",
        "Melhoria da postura e simetria",
        "Fortalecimento da musculatura paravertebral",
        "Evitou necessidade de cirurgia",
      ],
      successMetric: {
        value: "0°",
        label: "Progressão da Curva",
      },
    },
    {
      icon: FaStethoscope,
      title: "Reabilitação de Fratura do Fémur",
      subtitle: "Idosa de 78 anos",
      duration: "5 meses de tratamento",
      condition:
        "Fratura do colo do fémur tratada cirurgicamente com necessidade de recuperação da mobilidade e independência funcional.",
      approach:
        "Programa progressivo de mobilização, fortalecimento e treino de marcha com foco na prevenção de quedas.",
      treatments: [
        "Mobilização Progressiva",
        "Fortalecimento",
        "Treino de Marcha",
        "Prevenção de Quedas",
      ],
      outcomes: [
        "Recuperação completa da marcha independente",
        "Retorno ao domicílio com autonomia",
        "Fortalecimento muscular adequado para a idade",
        "Confiança e segurança na mobilidade",
      ],
      successMetric: {
        value: "100%",
        label: "Autonomia Funcional",
      },
    },
  ];

  return (
    <StyledCaseStudiesSection id="cases">
      <StyledSectionHeader>
        <h2 className="numbered-heading">Casos de Sucesso</h2>
        <p>
          Cada caso é único e especial. Apresento alguns exemplos
          representativos do meu trabalho, sempre respeitando a
          confidencialidade dos pacientes e focando nos resultados alcançados.
        </p>
      </StyledSectionHeader>

      <StyledCaseStudiesGrid>
        {caseStudies.map((caseStudy, index) => (
          <StyledCaseStudyCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <StyledCaseHeader>
              <div className="case-icon">
                <caseStudy.icon />
              </div>
              <div className="case-info">
                <div className="case-title">{caseStudy.title}</div>
                <div className="case-subtitle">
                  <FaCalendarCheck />
                  {caseStudy.subtitle} • {caseStudy.duration}
                </div>
              </div>
            </StyledCaseHeader>

            <StyledCaseSection>
              <div className="section-title">
                <FaClipboardList />
                Condição Inicial
              </div>
              <div className="section-content">{caseStudy.condition}</div>
            </StyledCaseSection>

            <StyledCaseSection>
              <div className="section-title">
                <FaUserMd />
                Abordagem Terapêutica
              </div>
              <div className="section-content">{caseStudy.approach}</div>
              <StyledTreatmentBadges>
                {caseStudy.treatments.map((treatment, treatIndex) => (
                  <span key={treatIndex} className="treatment-badge">
                    {treatment}
                  </span>
                ))}
              </StyledTreatmentBadges>
            </StyledCaseSection>

            <StyledCaseSection>
              <div className="section-title">
                <FaChartLine />
                Resultados Alcançados
              </div>
              <StyledOutcomesList>
                {caseStudy.outcomes.map((outcome, outcomeIndex) => (
                  <li key={outcomeIndex}>{outcome}</li>
                ))}
              </StyledOutcomesList>
            </StyledCaseSection>

            <StyledSuccessMetric>
              <div className="metric-value">
                {caseStudy.successMetric.value}
              </div>
              <div className="metric-label">
                {caseStudy.successMetric.label}
              </div>
            </StyledSuccessMetric>
          </StyledCaseStudyCard>
        ))}
      </StyledCaseStudiesGrid>
    </StyledCaseStudiesSection>
  );
};

export default CaseStudies;
