import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import FlashlightEffect from "../components/FlashlightEffect";
import { useRouter } from "next/router";

const StyledPortfoliosPage = styled.div`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.lightestSlate};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  h1 {
    font-size: ${theme.fontSizes.h3};
    margin-bottom: 20px;
  }

  p {
    font-size: ${theme.fontSizes.md};
    text-align: center;
    max-width: 600px;
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
`;

const Portfolios = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <FlashlightEffect />
      <StyledPortfoliosPage>
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
        <h1>Portfólios</h1>
        <p>
          Bem-vindo à página de Portfólios! Explore projetos pessoais e
          interativos.
        </p>
        <p style={{ marginTop: '20px', fontSize: theme.fontSizes.md, color: theme.colors.lightSlate }}>
          Os projetos ainda não foram adicionados, mas logo estarão disponíveis.
        </p>
      </StyledPortfoliosPage>
    </>
  );
};

export default Portfolios;