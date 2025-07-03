// src/components/sections/SpecialistProfile.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import {
  FaCertificate,
  FaGraduationCap,
  FaAward,
  FaHeart,
  FaBrain,
  FaStethoscope,
} from "react-icons/fa";
import Image from "next/image";

const StyledSpecialistSection = styled.section`
  padding: 100px 0;
  background: ${theme.colors.white};

  .inner {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 60px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
    }
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;

  .image-wrapper {
    position: relative;
    border-radius: ${theme.borderRadius.lg};
    overflow: hidden;
    box-shadow: ${theme.shadows.lg};

    &::after {
      content: "";
      position: absolute;
      top: 20px;
      left: 20px;
      width: 100%;
      height: 100%;
      border: 3px solid ${theme.colors.primary};
      border-radius: ${theme.borderRadius.lg};
      z-index: -1;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      transition: all 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
`;

const StyledContent = styled.div`
  .title {
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 20px;
    color: ${theme.colors.success};
    font-weight: 600;
    margin-bottom: 30px;
  }

  .philosophy {
    background: linear-gradient(
      135deg,
      ${theme.colors.lightGray},
      rgba(46, 134, 193, 0.05)
    );
    padding: 25px;
    border-radius: ${theme.borderRadius.md};
    margin-bottom: 40px;
    border-left: 4px solid ${theme.colors.primary};

    .philosophy-title {
      font-size: 18px;
      font-weight: 600;
      color: ${theme.colors.primary};
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        color: ${theme.colors.success};
      }
    }

    .philosophy-text {
      font-size: 16px;
      line-height: 1.6;
      color: ${theme.colors.darkGray};
      font-style: italic;
    }
  }

  .description {
    font-size: 16px;
    line-height: 1.7;
    color: ${theme.colors.darkGray};
    margin-bottom: 30px;

    p {
      margin-bottom: 20px;
    }
  }
`;

const StyledCredentials = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const StyledCredentialCard = styled.div`
  background: ${theme.colors.lightGray};
  padding: 20px;
  border-radius: ${theme.borderRadius.md};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.md};
  }

  .icon {
    font-size: 32px;
    color: ${theme.colors.primary};
    margin-bottom: 15px;
  }

  .title {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: 8px;
  }

  .description {
    font-size: 12px;
    color: ${theme.colors.mediumGray};
    line-height: 1.4;
  }
`;

const StyledCREFITO = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.primaryDark}
  );
  color: ${theme.colors.white};
  padding: 20px;
  border-radius: ${theme.borderRadius.md};
  text-align: center;
  margin-top: 30px;

  .label {
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.9;
    margin-bottom: 5px;
  }

  .number {
    font-size: 24px;
    font-weight: 700;
  }
`;

const SpecialistProfile = () => {
  const credentials = [
    {
      icon: <FaGraduationCap className="icon" />,
      title: "Graduação",
      description: "Fisioterapia - Universidade Regional de Blumenau",
    },
    {
      icon: <FaCertificate className="icon" />,
      title: "Especialização",
      description: "Ortopedia e Traumatologia - CREFITO/SC",
    },
    {
      icon: <FaAward className="icon" />,
      title: "Pós-Graduação",
      description: "Terapia Manual e Osteopatia",
    },
    {
      icon: <FaStethoscope className="icon" />,
      title: "Formação",
      description: "Pilates Clínico e RPG",
    },
  ];

  return (
    <StyledSpecialistSection id="especialista">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StyledImageContainer>
            <div className="image-wrapper">
              <Image
                src="/fisioterapeuta-profile.jpg"
                alt="Dr. [Nome] - Fisioterapeuta"
                width={400}
                height={500}
                style={{ objectFit: "cover" }}
              />
            </div>
          </StyledImageContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StyledContent>
            <h2 className="title">Dr. [Nome do Fisioterapeuta]</h2>
            <div className="subtitle">
              Fisioterapeuta Especialista em Reabilitação
            </div>

            <div className="philosophy">
              <div className="philosophy-title">
                <FaHeart />
                Minha Filosofia de Cuidado
              </div>
              <div className="philosophy-text">
                "Acredito que cada paciente é único e merece um tratamento
                personalizado. Meu compromisso é não apenas tratar os sintomas,
                mas identificar e corrigir as causas dos problemas, promovendo
                uma recuperação completa e duradoura."
              </div>
            </div>

            <div className="description">
              <p>
                Com mais de 10 anos de experiência na área da fisioterapia,
                dedico-me integralmente ao bem-estar dos meus pacientes. Formado
                pela Universidade Regional de Blumenau e especialista em
                Ortopedia e Traumatologia, combino técnicas tradicionais com as
                mais modernas evidências científicas.
              </p>

              <p>
                Minha abordagem é sempre humanizada e centrada no paciente.
                Acredito que a comunicação clara, a educação do paciente sobre
                sua condição e o envolvimento ativo no processo de recuperação
                são fundamentais para alcançar os melhores resultados.
              </p>
            </div>

            <StyledCredentials>
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StyledCredentialCard>
                    {credential.icon}
                    <div className="title">{credential.title}</div>
                    <div className="description">{credential.description}</div>
                  </StyledCredentialCard>
                </motion.div>
              ))}
            </StyledCredentials>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <StyledCREFITO>
                <div className="label">Registro Profissional</div>
                <div className="number">CREFITO-12 / 12345-F</div>
              </StyledCREFITO>
            </motion.div>
          </StyledContent>
        </motion.div>
      </div>
    </StyledSpecialistSection>
  );
};

export default SpecialistProfile;
