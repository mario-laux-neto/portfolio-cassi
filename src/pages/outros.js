import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import FlashlightEffect from "../components/FlashlightEffect";
import { useRouter } from "next/router";
import GlobalStyle from "../../styles/GlobalStyle";

const StyledOutrosPage = styled.div`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.lightestSlate};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

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

    @media (max-width: 768px) {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 480px) {
      width: 12px;
      height: 12px;
    }
  }
`;

const Outros = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <GlobalStyle />
      <FlashlightEffect />
      <StyledOutrosPage>
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
        <h1>Outros Projetos</h1>
        <p>
          Bem-vindo à página de outros projetos! Explore diversos projetos
          experimentais e inovadores.
        </p>
        <p
          style={{
            marginTop: "20px",
            fontSize: theme.fontSizes.md,
            color: theme.colors.lightSlate,
          }}
        >
          Os projetos ainda não foram adicionados, mas logo estarão disponíveis.
        </p>
      </StyledOutrosPage>
    </>
  );
};

export default Outros;
