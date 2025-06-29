// src/components/sections/Projects.js
"use client";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import Link from "next/link";

const StyledProjectsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const StyledTitle = styled.h2`
  font-size: clamp(24px, 5vw, 32px);
  margin: 0 0 50px 0;
  color: ${theme.colors.lightestSlate};
  font-weight: 600;
`;

const StyledCategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Espaçamento entre os cards */
  justify-content: center;
  margin-top: 40px;
`;

const StyledPreview = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.9);
  color: ${theme.colors.lightestSlate};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: opacity 0.3s ease-in-out;

  h4 {
    font-size: ${theme.fontSizes.md};
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: ${theme.fontSizes.sm};
      margin: 5px 0;
    }
  }
`;

const StyledCategoryCard = styled.div`
  background-color: ${theme.colors.lightNavy};
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(2, 12, 27, 0.2);
  width: 300px; /* Mantendo a largura do card */
  height: auto; /* Ajustando a altura para caber todo o conteúdo */
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(2, 12, 27, 0.4);
  }
`;

const StyledCardContent = styled.div`
  padding: 1.5rem;
`;

const StyledCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.lightestSlate};
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const StyledCardTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  .icon {
    color: ${theme.colors.green};
    font-size: 1.5rem;
  }
`;

const StyledCardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${theme.colors.lightSlate};
`;

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center; /* Centralizando os botões */
  gap: 1rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .btn-primary {
    background-color: ${theme.colors.green};
    color: ${theme.colors.lightestNavy};
  }

  .btn-primary:hover {
    background-color: ${theme.colors.lightGreen};
  }

  .btn-secondary {
    background-color: ${theme.colors.lightNavy};
    color: ${theme.colors.lightSlate};
  }

  .btn-secondary:hover {
    background-color: ${theme.colors.lightestNavy};
    color: ${theme.colors.lightestSlate};
  }
`;

const StyledCardButton = styled.a`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  background-color: ${theme.colors.green};
  color: ${theme.colors.lightestNavy};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${theme.colors.lightGreen};
    transform: scale(1.1);
  }
`;

const StyledCardBottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: ${theme.colors.blue};
`;

const Projects = () => {
  return (
    <StyledProjectsSection id="projects">
      <StyledTitle className="numbered-heading">
        Categorias de Projetos
      </StyledTitle>

      <StyledCategoriesGrid>
        <StyledCategoryCard>
          <StyledCardContent>
            <StyledCardTitle>Front-end e Back-end</StyledCardTitle>
            <StyledCardDescription>
              Projetos focados em interfaces de usuário, design interativo, servidores e APIs robustas.
            </StyledCardDescription>
            <StyledCardActions>
              <Link href="/front-end" className="btn-primary">
                Ver Projetos
              </Link>
            </StyledCardActions>
            <StyledCardBottomBar />
          </StyledCardContent>
        </StyledCategoryCard>
      </StyledCategoriesGrid>
    </StyledProjectsSection>
  );
};

export default Projects;
