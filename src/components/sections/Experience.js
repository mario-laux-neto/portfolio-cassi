// src/components/sections/Experience.js
'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const StyledExperienceSection = styled.section`
  h2 {
    font-size: ${theme.fontSizes.h3};
    margin-bottom: 30px;
  }
`;

const StyledTabContainer = styled.div`
  display: flex;
  min-height: 340px;
`;

const StyledTabList = styled.div`
  position: relative;
  width: max-content;
  z-index: 3;
`;

const StyledTabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px; /* Altura da aba */
  padding: 0 20px;
  background-color: transparent;
  border: 0;
  border-left: 2px solid ${theme.colors.lightestNavy};
  color: ${({ isActive }) => (isActive ? theme.colors.green : theme.colors.slate)};
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.smish};
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: ${theme.colors.lightNavy};
    color: ${theme.colors.green};
  }
`;

const StyledHighlight = styled.div.withConfig({
  shouldForwardProp: (prop) => !['activeTab'].includes(prop),
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px; /* Altura da aba */
  border-radius: 4px;
  background: ${theme.colors.green};
  transform: translateY(calc(${({ activeTab }) => activeTab} * 42px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  h3 {
    font-size: ${theme.fontSizes.xxl};
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  .company {
    color: ${theme.colors.green};
  }

  p {
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.smish};
    color: ${theme.colors.lightSlate};
  }

  ul {
    padding: 0;
    margin: 20px 0 0;
    list-style: none;
    font-size: ${theme.fontSizes.lg};

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${theme.colors.green};
      }
    }
  }

  .skills-section {
    margin-top: 25px;
    
    h4 {
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
      color: ${theme.colors.lightSlate};
      margin-bottom: 10px;
      font-family: ${theme.fonts.mono};
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      
      .skill-tag {
        background-color: ${theme.colors.lightNavy};
        color: ${theme.colors.green};
        padding: 4px 8px;
        border-radius: 3px;
        font-size: ${theme.fontSizes.xs};
        font-family: ${theme.fonts.mono};
        border: 1px solid ${theme.colors.lightestNavy};
      }
    }
  }
`;


const jobsData = [
    {
      company: 'CRS - Pollen Parque',
      role: 'Estagiário em Desenvolvimento',
      date: 'Abril 2025 - Presente',
      tasks: [
        'Desenvolvimento de aplicações web modernas utilizando React.js e Next.js',
        'Colaboração em projetos do Centro de Residência em Software',
        'Aplicação de boas práticas de desenvolvimento e versionamento com Git'
      ],
      skills: ['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'Git']
    },
    {
      company: 'Santa Maria Imóveis',
      role: 'Assistente Administrativo',
      date: 'Junho 2024 - Dezembro 2024 - 7 meses',
      tasks: [
        'Responsável por uma variedade de rotinas administrativas, incluindo atendimento direto ao cliente',
        'Atualização e gestão de dados em planilhas de controle',
        'Controle de cobranças de condomínios e processos de cancelamento de seguros',
        'Conferência e organização de documentos'
      ],
      skills: ['Atendimento ao Cliente', 'Excel', 'Gestão de Dados', 'Organização']
    },
    {
      company: 'Cotrisal',
      role: 'Auxiliar Administrativo',
      date: 'Dezembro 2021 - Janeiro 2024 - 2 anos e 2 meses',
      tasks: [
        'Conferência e lançamento de caixas financeiros',
        'Organização e distribuição de documentos contábeis',
        'Atualização de dados em planilhas de controle',
        'Garantia da precisão das informações financeiras'
      ],
      skills: ['Contabilidade', 'Excel', 'Controle Financeiro', 'Atenção aos Detalhes']
    },
    {
      company: 'Cotrisal',
      role: 'Estagiário',
      date: 'Fevereiro 2021 - Dezembro 2021 - 11 meses',
      tasks: [
        'Gestão e organização de documentos empresariais',
        'Separação e arquivamento de notas fiscais e documentos importantes',
        'Manutenção da integridade do arquivo morto da empresa',
        'Garantia de fácil acesso às informações arquivadas'
      ],
      skills: ['Organização', 'Gestão Documental', 'Arquivamento', 'Atenção aos Detalhes']
    },
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <StyledExperienceSection id="experience">
            <h2>Onde Trabalhei</h2>
            <StyledTabContainer>
                <StyledTabList role="tablist" aria-label="Job tabs">
                    {jobsData && jobsData.map((job, i) => (
                        <StyledTabButton
                            key={i}
                            isActive={activeTab === i}
                            onClick={() => setActiveTab(i)}
                            id={`tab-${i}`}
                            role="tab"
                            aria-selected={activeTab === i}
                            aria-controls={`panel-${i}`}
                        >
                            <span>{job.company}</span>
                        </StyledTabButton>
                    ))}
                    <StyledHighlight activeTab={activeTab} />
                </StyledTabList>

                <div>
                    {jobsData && jobsData.map((job, i) => (
                        <StyledTabContent
                            key={i}
                            id={`panel-${i}`}
                            role="tabpanel"
                            tabIndex={activeTab === i ? '0' : '-1'}
                            aria-labelledby={`tab-${i}`}
                            hidden={activeTab !== i}
                        >
                            <h3>
                                <span>{job.role}</span>
                                <span className="company">
                                    &nbsp;@&nbsp;
                                    <a href="#" className="inline-link">{job.company}</a>
                                </span>
                            </h3>
                            <p>{job.date}</p>
                            <ul>
                                {job.tasks.map((task, j) => <li key={j}>{task}</li>)}
                            </ul>
                            
                            {job.skills && (
                                <div className="skills-section">
                                    <h4>Competências:</h4>
                                    <div className="skills-list">
                                        {job.skills.map((skill, k) => (
                                            <span key={k} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </StyledTabContent>
                    ))}
                </div>
            </StyledTabContainer>
        </StyledExperienceSection>
    );
};

export default Experience;