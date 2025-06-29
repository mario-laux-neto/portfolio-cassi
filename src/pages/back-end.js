import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import FlashlightEffect from "../components/FlashlightEffect";
import { useRouter } from "next/router";
import GlobalStyle from "../../styles/GlobalStyle";
import { SiGithub } from "react-icons/si";

const StyledBackEndPage = styled.div`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.lightestSlate};
  min-height: 100vh;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;

  h1 {
    font-size: ${theme.fontSizes.h3};
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: ${theme.fontSizes.h4};
    }

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.md};
      margin-bottom: 15px;
    }

    @media (max-width: 480px) {
      font-size: ${theme.fontSizes.sm};
    }
  }

  p {
    font-size: ${theme.fontSizes.lg};
    text-align: center;
    max-width: 600px;
    margin: 0 auto 40px auto;

    @media (max-width: 1024px) {
      font-size: ${theme.fontSizes.md};
    }

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.sm};
      margin: 0 auto 30px auto;
      padding: 0 10px;
    }

    @media (max-width: 480px) {
      font-size: ${theme.fontSizes.xs};
      margin: 0 auto 20px auto;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 5px;
  }
`;

const StyledProject = styled.div`
  background-color: ${theme.colors.lightNavy};
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-size: ${theme.fontSizes.lg};
    margin-bottom: 10px;
    color: ${theme.colors.green};

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.md};
    }

    @media (max-width: 480px) {
      font-size: ${theme.fontSizes.sm};
    }
  }

  p {
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 15px;
    color: ${theme.colors.lightSlate};

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.xs};
    }

    @media (max-width: 480px) {
      font-size: ${theme.fontSizes.xxs};
    }
  }

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      max-width: 150px;
    }

    @media (max-width: 480px) {
      max-width: 120px;
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

const StyledGitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background-color: ${theme.colors.green};
  color: ${theme.colors.navy} !important;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.colors.lightGreen};
    color: ${theme.colors.navy} !important;
  }

  &:focus {
    color: ${theme.colors.navy} !important;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.navy} !important;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: ${theme.fontSizes.sm};
    gap: 6px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: ${theme.fontSizes.xs};
    gap: 4px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const BackEnd = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <GlobalStyle />
      <FlashlightEffect />
      <StyledBackEndPage>
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
        <h1>Back-end</h1>
        <p>
          Bem-vindo à página de Back-end! Explore projetos focados em servidores
          e APIs robustas.
        </p>

        <CardsContainer>
          {/* Primeiro Projeto */}
          <StyledProject>
            <h2>Projeto 1: API Cinema</h2>
            <p>
              Uma API robusta para gerenciamento de cinema, com funcionalidades
              para controle de filmes, sessões, salas e vendas de ingressos.
              Inclui autenticação de usuários e integração com banco de dados.
            </p>
            <StyledGitHubButton
              href="https://github.com/mario-laux-neto/api-cinema.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
              Ver Código no GitHub
            </StyledGitHubButton>
          </StyledProject>

          {/* Segundo Projeto */}
          <StyledProject>
            <h2>Projeto 2: API Delivery</h2>
            <p>
              Sistema de API completo para delivery, oferecendo endpoints para
              gerenciamento de pedidos, produtos, usuários e entregadores.
              Suporte a autenticação JWT e integração com múltiplos métodos de
              pagamento.
            </p>
            <StyledGitHubButton
              href="https://github.com/mario-laux-neto/projeto-delivery.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
              Ver Código no GitHub
            </StyledGitHubButton>
          </StyledProject>

          {/* Terceiro Projeto */}
          <StyledProject>
            <h2>Projeto 3: API Vacinação</h2>
            <p>
              API especializada para controle de vacinação de suínos,
              desenvolvida para otimizar o registro e gerenciamento de dados em
              ambientes de produção. Inclui controle de usuários, tipos de
              vacinas e logs de atividades.
            </p>
            <p
              style={{ color: "#ffa726", fontWeight: "bold", fontSize: "14px" }}
            >
              🚧 Em desenvolvimento
            </p>
            <StyledGitHubButton
              href="https://github.com/mario-laux-neto/sistema-pig.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
              Ver Código no GitHub
            </StyledGitHubButton>
          </StyledProject>
        </CardsContainer>
      </StyledBackEndPage>
    </>
  );
};

export default BackEnd;
