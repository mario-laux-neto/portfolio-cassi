import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import FlashlightEffect from "../components/FlashlightEffect";
import { useRouter } from "next/router";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiTypescript,
  SiExpo,
  SiJavascript,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from "../../styles/GlobalStyle";

const StyledFrontEndPage = styled.div`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.lightestSlate};
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${theme.fontSizes.h3};
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.md};
      margin-bottom: 15px;
    }

    @media (max-width: 480px) {
      font-size: ${theme.fontSizes.sm};
      margin-bottom: 10px;
    }
  }

  p {
    font-size: ${theme.fontSizes.md};
    text-align: center;
    max-width: 90%;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.sm};
      padding: 0 10px;
    }

    @media (max-width: 480px) {
      font-size: ${theme.fontSizes.xs};
      padding: 0 5px;
    }
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  background-color: ${theme.colors.navy};
  color: ${theme.colors.lightestSlate};
  border: 2px solid ${theme.colors.lightSlate};
  border-radius: 5px;
  cursor: pointer;
  font-size: ${theme.fontSizes.md};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.colors.lightSlate};
    color: ${theme.colors.navy};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    top: 15px;
    left: 15px;
    padding: 8px 12px;
    font-size: ${theme.fontSizes.sm};

    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    padding: 6px 10px;
    font-size: ${theme.fontSizes.xs};

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const StyledSeparator = styled.hr`
  width: 100%;
  border: 0;
  height: 3px;
  background: ${theme.colors.lightSlate};
  margin: 60px 0 20px 0;

  @media (max-width: 768px) {
    margin: 40px 0 15px 0;
    height: 2px;
  }

  @media (max-width: 480px) {
    margin: 30px 0 10px 0;
    height: 1px;
  }
`;

const StyledProject = styled.div`
  text-align: center;
  margin: 40px 0;
  width: 100%;
  max-width: 800px;

  h2 {
    font-size: ${theme.fontSizes.md};
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.sm};
      margin-bottom: 8px;
    }

    @media (max-width: 480px) {
      font-size: ${theme.fontSizes.xs};
      margin-bottom: 6px;
    }
  }

  p {
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.xs};
      margin-bottom: 8px;
      padding: 0 10px;
    }

    @media (max-width: 480px) {
      margin-bottom: 6px;
      padding: 0 5px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;

    @media (max-width: 768px) {
      border-radius: 8px;
    }

    @media (max-width: 480px) {
      border-radius: 6px;
    }
  }

  .skills-list {
    display: flex;
    gap: 15px;
    justify-content: center;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 10px;
    }

    @media (max-width: 480px) {
      gap: 8px;
    }

    li {
      @media (max-width: 480px) {
        min-width: 60px;
      }
    }

    .icon {
      font-size: 24px;
      display: block;
      margin-bottom: 5px;

      @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 4px;
      }

      @media (max-width: 480px) {
        font-size: 18px;
        margin-bottom: 3px;
      }
    }

    p {
      font-size: ${theme.fontSizes.xs};
      margin: 0;

      @media (max-width: 480px) {
        font-size: 10px;
      }
    }
  }

  /* Estilização das bolinhas do slider */
  .slick-dots {
    bottom: -30px;

    @media (max-width: 768px) {
      bottom: -25px;
    }

    @media (max-width: 480px) {
      bottom: -20px;
    }

    li {
      margin: 0 5px;

      @media (max-width: 480px) {
        margin: 0 3px;
      }

      button {
        &:before {
          color: white !important;
          font-size: 12px !important;
          opacity: 0.5 !important;

          @media (max-width: 480px) {
            font-size: 10px !important;
          }
        }
      }

      &.slick-active button:before {
        color: white !important;
        opacity: 1 !important;
      }
    }
  }
`;

const CustomVideoPlayer = styled.video`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  margin: 40px auto;
  display: block;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);
  border: 2px solid ${theme.colors.lightSlate};

  &:focus {
    outline: 2px solid ${theme.colors.green};
  }

  @media (max-width: 768px) {
    max-width: 350px;
    margin: 30px auto;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    margin: 20px auto;
    border-radius: 10px;
    border: 1px solid ${theme.colors.lightSlate};
  }
`;

const CustomPrevArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      left: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      cursor: "pointer",
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.3s",
    }}
    onClick={onClick}
    onMouseEnter={(e) =>
      (e.target.style.backgroundColor = "rgba(59, 130, 246, 1)")
    }
    onMouseLeave={(e) =>
      (e.target.style.backgroundColor = "rgba(59, 130, 246, 0.8)")
    }
  >
    <MdArrowBackIos style={{ color: "white", fontSize: "20px" }} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      right: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      cursor: "pointer",
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.3s",
    }}
    onClick={onClick}
    onMouseEnter={(e) =>
      (e.target.style.backgroundColor = "rgba(59, 130, 246, 1)")
    }
    onMouseLeave={(e) =>
      (e.target.style.backgroundColor = "rgba(59, 130, 246, 0.8)")
    }
  >
    <MdArrowForwardIos style={{ color: "white", fontSize: "20px" }} />
  </div>
);

const FrontEnd = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 className="icon" style={{ color: "#E34F26" }} />,
    },
    {
      name: "CSS",
      icon: <SiCss3 className="icon" style={{ color: "#1572B6" }} />,
    },
    {
      name: "React",
      icon: <SiReact className="icon" style={{ color: "#61DAFB" }} />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="icon" style={{ color: "#000000" }} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="icon" style={{ color: "#38B2AC" }} />,
    },
    {
      name: "Git",
      icon: <SiGit className="icon" style={{ color: "#F05032" }} />,
    },
  ];

  const coinsSkills = [
    {
      name: "React",
      icon: <SiReact className="icon" style={{ color: "#61DAFB" }} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="icon" style={{ color: "#3178C6" }} />,
    },
    {
      name: "Expo",
      icon: <SiExpo className="icon" style={{ color: "#000020" }} />,
    },
    {
      name: "Git",
      icon: <SiGit className="icon" style={{ color: "#F05032" }} />,
    },
  ];

  const singleSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <GlobalStyle />
      <FlashlightEffect />
      <StyledFrontEndPage>
        <StyledButton onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar
        </StyledButton>
        <h1>Front-end</h1>
        <p>
          Bem-vindo à página de Front-end! Explore projetos focados em
          interfaces de usuário e design interativo.
        </p>

        {/* Separador */}
        <StyledSeparator />

        {/* Primeiro Projeto */}
        <StyledProject>
          <h1>Projeto 1: DeliveExpress</h1>
          <h2>
            Um sistema de delivery moderno, projetado para oferecer uma
            experiência de usuário intuitiva e eficiente. A aplicação conta com
            funcionalidades como autenticação de usuários, vitrine de produtos
            dinâmica, carrinho interativo, gestão de endereços, sistema de
            cupons e histórico de pedidos.
          </h2>
          <h2>
            <strong>Visão Geral:</strong> A aplicação comunica-se com uma API
            para gerenciar dados de produtos, usuários e pedidos, suportando
            painéis de administração e entregadores, consolidando um ecossistema
            completo de delivery.
          </h2>
          <p>
            <strong>Tecnologias Utilizadas:</strong>
          </p>
          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i} style={{ textAlign: "center" }}>
                {skill.icon}
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
          <Slider {...sliderSettings}>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/login.png"
                alt="Projeto DeliveExpress - Foto 1"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/cadastro.png"
                alt="Projeto DeliveExpress - Foto 2"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/home.png"
                alt="Projeto DeliveExpress - Foto 3"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/cupons.png"
                alt="Projeto DeliveExpress - Foto 3"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/carrinho.png"
                alt="Projeto DeliveExpress - Foto 3"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/endereco.png"
                alt="Projeto DeliveExpress - Foto 3"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/pagamento.png"
                alt="Projeto DeliveExpress - Foto 3"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/finalizar.png"
                alt="Projeto DeliveExpress - Foto 3"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/deliveexpress/produtos.png"
                alt="Projeto DeliveExpress - Foto 3"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
          </Slider>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href="https://github.com/mario-laux-neto/front-delivery.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.lightSlate,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightSlate)
              }
            >
              <SiGithub
                className="icon"
                style={{ color: "#000", marginRight: "5px" }}
              />
              Repositório no GitHub
            </a>
          </div>
        </StyledProject>

        {/* Separador */}
        <StyledSeparator />

        {/* Segundo Projeto */}
        <StyledProject>
          <h1>Projeto 2: Coins For Study</h1>

          <h2>
            Uma plataforma de estudos gamificada, desenvolvida para engajar e
            motivar alunos através de uma experiência de aprendizado interativa.
            O aplicativo inclui funcionalidades como um sistema de recompensas
            com moedas, atividades interativas, acompanhamento de notas e
            frequência, e uma loja virtual para o resgate de pontos.
          </h2>
          <h2>
            <strong>Visão Geral:</strong> A aplicação foi estruturada com um
            front-end em React Native que se comunica com uma API central. Essa
            API é responsável por gerenciar todos os dados de usuários (alunos e
            professores), o conteúdo acadêmico e o sistema de gamificação,
            suportando tanto a área do aluno quanto possíveis painéis de
            administração.
          </h2>
          <p>
            <strong>Tecnologias Utilizadas:</strong>
          </p>
          <ul className="skills-list">
            {coinsSkills.map((skill, i) => (
              <li key={i} style={{ textAlign: "center" }}>
                {skill.icon}
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
          <p>Uma demonstração do projeto Coins For Study em ação.</p>
          <CustomVideoPlayer controls preload="metadata">
            <source src="/videos/deliveexpress-demo.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </CustomVideoPlayer>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="https://github.com/mario-laux-neto/app_coins_abex3_vivi.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.lightSlate,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightSlate)
              }
            >
              <SiGithub
                className="icon"
                style={{ color: "#000", marginRight: "5px" }}
              />
              Repositório no GitHub
            </a>
          </div>
        </StyledProject>

        {/* Separador */}
        <StyledSeparator />

        {/* Terceiro Projeto */}
        <StyledProject>
          <h1>Projeto 3: Cópia Login Rocketseat</h1>

          <h2>
            Um projeto de estudo focado na recriação de uma aplicação moderna,
            desenvolvido com o objetivo de replicar funcionalidades e a
            interface de um design de referência. O repositório demonstra a
            aplicação prática de tecnologias de front-end na construção de uma
            cópia funcional.
          </h2>
          <h2>
            <strong>Visão Geral:</strong> O desenvolvimento foi orientado pela
            análise de uma interface existente, utilizando ferramentas modernas
            como React e Vite. O foco foi traduzir um conceito visual em
            componentes interativos, consolidando o conhecimento na estruturação
            de um front-end performático e bem organizado.
          </h2>
          <p>
            <strong>Tecnologias Utilizadas:</strong>
          </p>
          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i} style={{ textAlign: "center" }}>
                {skill.icon}
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>

          <Slider {...singleSliderSettings}>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/rocket/login.png"
                alt="Projeto Cópia Login Rocketseat - Foto 1"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
          </Slider>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="https://github.com/mario-laux-neto/rocketseat.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.lightSlate,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightSlate)
              }
            >
              <SiGithub
                className="icon"
                style={{ color: "#000", marginRight: "5px" }}
              />
              Repositório no GitHub
            </a>
          </div>
        </StyledProject>

        {/* Separador */}
        <StyledSeparator />

        {/* Quarto Projeto */}
        <StyledProject>
          <h1>Projeto 4: Massoterapia</h1>

          <h2>
            Um site institucional de página única (one-page), criado para a
            apresentação profissional de um serviço de massoterapia. O design é
            focado em transmitir bem-estar e confiança, guiando o visitante
            através das informações sobre os serviços oferecidos, o ambiente e
            as formas de contato.
          </h2>
          <h2>
            <strong>Visão Geral:</strong> O projeto foi construído puramente com
            tecnologias de front-end (HTML, CSS e JavaScript), resultando em um
            site estático, leve e de rápido carregamento. A estrutura foi
            pensada para ser clara e objetiva, funcionando como um portfólio
            digital informativo, com design responsivo que se adapta a celulares
            e computadores.
          </h2>
          <p>
            <strong>Tecnologias Utilizadas:</strong>
          </p>
          <ul className="skills-list">
            <li style={{ textAlign: "center" }}>
              <SiHtml5 className="icon" style={{ color: "#E34F26" }} />
              <p>HTML5</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiCss3 className="icon" style={{ color: "#1572B6" }} />
              <p>CSS3</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiJavascript className="icon" style={{ color: "#F7DF1E" }} />
              <p>JavaScript</p>
            </li>
          </ul>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Veja como ficou o site acessando o link abaixo:
          </p>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="https://mario-laux-neto.github.io/sitemassoterapia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.green,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightGreen)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
            >
              Acessar Site
            </a>
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="https://github.com/mario-laux-neto/sitemassoterapia.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.lightSlate,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightSlate)
              }
            >
              <SiGithub
                className="icon"
                style={{ color: "#000", marginRight: "5px" }}
              />
              Repositório no GitHub
            </a>
          </div>
        </StyledProject>

        {/* Separador */}
        <StyledSeparator />

        {/* Quinto Projeto */}
        <StyledProject>
          <h1>Projeto 5: Yu-Gi-Ho interativo</h1>

          <h2>
            Um clone do popular jogo de cartas Yu-Gi-Oh, desenvolvido como um
            projeto de estudo para praticar lógica de programação e manipulação
            de interface. A aplicação recria a experiência de um duelo,
            permitindo a interação com cartas e um campo de batalha digital, com
            foco na jogabilidade e no design temático.
          </h2>
          <h2>
            <strong>Visão Geral:</strong> Este projeto foi desenvolvido
            inteiramente com tecnologias de front-end (HTML, CSS e JavaScript
            puro), sem o uso de frameworks. O desafio principal foi implementar
            a lógica do jogo e as interações do usuário diretamente através da
            manipulação do DOM, gerenciando o estado do duelo e as ações das
            cartas de forma procedural.
          </h2>
          <p>
            <strong>Tecnologias Utilizadas:</strong> HTML5, CSS3 e JavaScript
            (Puro/Vanilla).
          </p>
          <ul className="skills-list">
            <li style={{ textAlign: "center" }}>
              <SiHtml5 className="icon" style={{ color: "#E34F26" }} />
              <p>HTML5</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiCss3 className="icon" style={{ color: "#1572B6" }} />
              <p>CSS3</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiJavascript className="icon" style={{ color: "#F7DF1E" }} />
              <p>JavaScript</p>
            </li>
          </ul>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Veja como ficou o site acessando o link abaixo:
          </p>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="https://mario-laux-neto.github.io/projeto-clone-yu-gi-oh/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.green,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightGreen)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
            >
              Acessar Site
            </a>
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="https://github.com/mario-laux-neto/projeto-clone-yu-gi-oh.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.lightSlate,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightSlate)
              }
            >
              <SiGithub
                className="icon"
                style={{ color: "#000", marginRight: "5px" }}
              />
              Repositório no GitHub
            </a>
          </div>
        </StyledProject>

        {/* Separador */}
        <StyledSeparator />

        {/* Sexto Projeto */}
        <StyledProject>
          <h1>Projeto 6: Sistema de controle de vacinação</h1>

          <h2>
            Um sistema de gestão para o controle de vacinação de suínos,
            desenvolvido para otimizar o registro e o gerenciamento de dados em
            um ambiente de produção. A plataforma permite que vacinadores
            registrem as aplicações em campo e que administradores tenham uma
            visão completa e centralizada de todas as operações através de um
            painel de controle.
          </h2>
          <h2>
            <strong>Visão Geral:</strong> A arquitetura do projeto consiste em
            um front-end interativo, que inclui os formulários de registro e o
            painel administrativo, comunicando-se com uma API no back-end. Esta
            API é responsável por processar e armazenar todos os dados — como
            usuários, tipos de vacinas e logs de atividades — em um banco de
            dados, garantindo a segurança e a integridade das informações.
          </h2>
          <p>
            <strong>Tecnologias Utilizadas:</strong>
          </p>
          <ul className="skills-list">
            <li style={{ textAlign: "center" }}>
              <SiNextdotjs className="icon" style={{ color: "#000" }} />
              <p>Next.js</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiNodedotjs className="icon" style={{ color: "#339933" }} />
              <p>Node.js</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiJavascript className="icon" style={{ color: "#F7DF1E" }} />
              <p>JavaScript</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiTailwindcss className="icon" style={{ color: "#38B2AC" }} />
              <p>Tailwind</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiCss3 className="icon" style={{ color: "#1572B6" }} />
              <p>CSS3</p>
            </li>
          </ul>
          <Slider {...sliderSettings}>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/login.png"
                alt="Projeto Sistema de Vacinação - Foto 1"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/form1.png"
                alt="Projeto Sistema de Vacinação - Foto 2"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/form2.png"
                alt="Projeto Sistema de Vacinação - Foto 3"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/home.png"
                alt="Projeto Sistema de Vacinação - Foto 4"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/gereusu.png"
                alt="Projeto Sistema de Vacinação - Foto 5"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/cadvacinas.png"
                alt="Projeto Sistema de Vacinação - Foto 6"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/atividade.png"
                alt="Projeto Sistema de Vacinação - Foto 6"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/excel.png"
                alt="Projeto Sistema de Vacinação - Foto 6"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <img
                src="/images/pig/senha.png"
                alt="Projeto Sistema de Vacinação - Foto 6"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
          </Slider>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href="https://github.com/mario-laux-neto/pig.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.lightSlate,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightSlate)
              }
            >
              <SiGithub
                className="icon"
                style={{ color: "#000", marginRight: "5px" }}
              />
              Repositório no GitHub
            </a>
          </div>
        </StyledProject>

        {/* Separador */}
        <StyledSeparator />

        {/* Sétimo Projeto */}
        <StyledProject>
          <h1>Projeto 7: Calculadora Padrão</h1>

          <h2>
            Uma calculadora digital funcional, desenvolvida como um projeto de
            estudo para aprimorar as habilidades em lógica de programação e
            manipulação de interface com JavaScript. A aplicação simula as
            operações de uma calculadora padrão, com um design limpo e focado na
            experiência do usuário.
          </h2>
          <h2>
            <strong>Visão Geral:</strong> O projeto foi construído utilizando
            apenas as tecnologias fundamentais do front-end. O principal desafio
            foi implementar a lógica das operações matemáticas e gerenciar a
            exibição dos números e resultados na tela, controlando o estado da
            calculadora inteiramente através de JavaScript puro e manipulação
            direta do DOM.
          </h2>
          <p>
            <strong>Tecnologias Utilizadas:</strong>
          </p>
          <ul className="skills-list">
            <li style={{ textAlign: "center" }}>
              <SiHtml5 className="icon" style={{ color: "#E34F26" }} />
              <p>HTML5</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiCss3 className="icon" style={{ color: "#1572B6" }} />
              <p>CSS3</p>
            </li>
            <li style={{ textAlign: "center" }}>
              <SiJavascript className="icon" style={{ color: "#F7DF1E" }} />
              <p>JavaScript</p>
            </li>
          </ul>
          <Slider {...singleSliderSettings}></Slider>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="https://mario-laux-neto.github.io/calculadora/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.green,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightGreen)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
            >
              Acessar Site
            </a>
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="https://github.com/mario-laux-neto/calculadora.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: theme.colors.lightSlate,
                color: theme.colors.navy,
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = theme.colors.green)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = theme.colors.lightSlate)
              }
            >
              <SiGithub
                className="icon"
                style={{ color: "#000", marginRight: "5px" }}
              />
              Repositório no GitHub
            </a>
          </div>
        </StyledProject>

        {/* Separador */}
        <StyledSeparator />
      </StyledFrontEndPage>
    </>
  );
};

export default FrontEnd;
