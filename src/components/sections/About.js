// src/components/sections/About.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import { FaHeart, FaUserMd, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const StyledAboutSection = styled.section`
  padding: 100px 0;
  background: ${theme.colors.white};

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 768px) {
      display: block;
      gap: 0;
    }
  }
`;

const StyledText = styled.div`
  .numbered-heading {
    display: flex;
    align-items: center;
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

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: "";
      display: block;
      position: relative;
      top: -5px;
      width: 100%;
      height: 1px;
      margin-left: 20px;
      background-color: ${theme.colors.lightGray};

      @media (max-width: 768px) {
        margin-left: 10px;
      }

      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  div {
    margin-bottom: 25px;

    p {
      margin: 0 0 15px;
      font-size: 18px;
      line-height: 1.6;
      color: ${theme.colors.mediumGray};

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const StyledPhilosophySection = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.lightGray},
    rgba(46, 134, 193, 0.05)
  );
  padding: 30px;
  border-radius: ${theme.borderRadius.md};
  margin: 30px 0;
  border-left: 4px solid ${theme.colors.primary};

  .philosophy-title {
    font-size: 20px;
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
    font-style: italic;
    font-size: 16px;
    line-height: 1.6;
    color: ${theme.colors.mediumGray};
  }
`;

const StyledSkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${theme.fonts.mono};
    font-size: 14px;
    color: ${theme.colors.mediumGray};

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: ${theme.colors.success};
      font-size: 14px;
      line-height: 12px;
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    max-width: 70%;
  }

  .wrapper {
    box-shadow: 0 10px 30px -15px rgba(46, 134, 193, 0.7);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.success};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px rgba(46, 134, 193, 0.7);

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: ${theme.borderRadius.md};
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${theme.borderRadius.md};
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: ${theme.colors.primary};
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid ${theme.colors.success};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const StyledValues = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledValue = styled.div`
  padding: 20px;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.sm};
  border-left: 3px solid ${theme.colors.success};
  box-shadow: ${theme.shadows.sm};

  .value-icon {
    font-size: 24px;
    color: ${theme.colors.success};
    margin-bottom: 10px;
  }

  .value-title {
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: 8px;
    font-size: 16px;
  }

  .value-desc {
    font-size: 14px;
    color: ${theme.colors.mediumGray};
    line-height: 1.4;
  }
`;

const About = () => {
  const skills = [
    "Avaliação Postural",
    "Terapia Manual",
    "Exercícios Terapêuticos",
    "Fisioterapia Respiratória",
    "Eletroterapia",
    "Pilates Clínico",
    "Mobilização Neural",
    "Dry Needling",
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Cuidado Humanizado",
      desc: "Cada paciente é único e merece atenção personalizada",
    },
    {
      icon: FaUserMd,
      title: "Excelência Técnica",
      desc: "Formação contínua e técnicas baseadas em evidências",
    },
    {
      icon: FaHandsHelping,
      title: "Abordagem Holística",
      desc: "Tratamento integral considerando corpo, mente e contexto social",
    },
    {
      icon: FaLightbulb,
      title: "Inovação",
      desc: "Aplicação de novas tecnologias e métodos em reabilitação",
    },
  ];

  return (
    <StyledAboutSection id="about">
      <div className="inner">
        <StyledText>
          <h2 className="numbered-heading">Sobre Mim</h2>

          <div>
            <p>
              Olá! Sou Cassiane Amaral, estudante de Fisioterapia pela{" "}
              <strong>Universidade de Lisboa</strong>.
              Minha paixão pela fisioterapia nasceu da vontade de ajudar as pessoas a
              recuperarem sua funcionalidade e qualidade de vida.
            </p>
            <p>
              Durante minha graduação, tenho me dedicado a projetos acadêmicos e estágios
              que me proporcionaram experiência prática em diversas áreas da fisioterapia.
            </p>
          </div>

          <StyledPhilosophySection>
            <div className="philosophy-title">
              <FaHeart />A Minha Filosofia
            </div>
            <div className="philosophy-text">
              "O movimento é vida. Cada sessão é uma oportunidade de devolver
              esperança, funcionalidade e independência. Trabalho não apenas com
              o corpo, mas com a pessoa como um todo, respeitando as suas
              limitações e celebrando cada conquista."
            </div>
          </StyledPhilosophySection>

          <p>
            Aqui estão algumas das competências que desenvolvi ao longo da minha
            carreira:
          </p>

          <StyledSkillsList>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </StyledSkillsList>

          <StyledValues>
            {values.map((value, index) => (
              <StyledValue key={index}>
                <value.icon className="value-icon" />
                <div className="value-title">{value.title}</div>
                <div className="value-desc">{value.desc}</div>
              </StyledValue>
            ))}
          </StyledValues>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <div
              className="img"
              style={{
                width: "100%",
                height: "400px",
                background: `linear-gradient(135deg, ${theme.colors.primary}40, ${theme.colors.success}40)`,
                borderRadius: theme.borderRadius.md,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                color: theme.colors.white,
                fontWeight: "bold",
              }}
            >
              MN
            </div>
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
