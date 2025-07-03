// src/components/sections/FinalCTA.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaCalendarCheck,
  FaStethoscope,
  FaCheckCircle,
} from "react-icons/fa";

const StyledFinalSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryDark} 100%
  );
  color: ${theme.colors.white};
  text-align: center;
`;

const StyledHeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto 60px;

  .title {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 20px;
    opacity: 0.9;
    margin-bottom: 30px;
    line-height: 1.5;
  }
`;

const StyledEvaluationOffer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.lg};
  padding: 40px;
  margin: 40px auto;
  max-width: 600px;

  .offer-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${theme.colors.white};
  }

  .offer-description {
    font-size: 16px;
    opacity: 0.9;
    margin-bottom: 25px;
    line-height: 1.6;
  }
`;

const StyledOfferItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 30px;

  .offer-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    opacity: 0.9;

    svg {
      color: ${theme.colors.success};
      flex-shrink: 0;
    }
  }
`;

const StyledCTAButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

const StyledMainCTA = styled.a`
  background: linear-gradient(135deg, ${theme.colors.success} 0%, #1e8449 100%);
  color: ${theme.colors.white};
  padding: 20px 40px;
  border-radius: ${theme.borderRadius.lg};
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      135deg,
      #1e8449 0%,
      ${theme.colors.success} 100%
    );
  }

  svg {
    font-size: 20px;
  }
`;

const StyledSecondaryCTA = styled.a`
  background: transparent;
  color: ${theme.colors.white};
  padding: 20px 40px;
  border-radius: ${theme.borderRadius.lg};
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }

  svg {
    font-size: 18px;
  }
`;

const StyledClinicInfo = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${theme.borderRadius.lg};
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;

  .clinic-title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${theme.colors.white};
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    text-align: left;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`;

const StyledInfoCard = styled.div`
  .info-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    svg {
      font-size: 24px;
      color: ${theme.colors.success};
    }

    .info-title {
      font-size: 18px;
      font-weight: 600;
    }
  }

  .info-content {
    font-size: 15px;
    line-height: 1.6;
    opacity: 0.9;
  }
`;

const StyledUrgencyIndicator = styled.div`
  background: rgba(231, 76, 60, 0.2);
  border: 2px solid #e74c3c;
  border-radius: ${theme.borderRadius.md};
  padding: 20px;
  margin: 40px auto 0;
  max-width: 500px;

  .urgency-text {
    font-size: 16px;
    font-weight: 600;
    color: #ff6b6b;
  }
`;

const FinalCTA = () => {
  const evaluationItems = [
    "Avaliação postural completa",
    "Análise biomecânica",
    "Testes funcionais específicos",
    "Plano de tratamento personalizado",
  ];

  return (
    <StyledFinalSection id="agendar">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <StyledHeroContent>
          <h2 className="title">Vamos Começar Seu Tratamento?</h2>
          <p className="subtitle">
            Sua jornada para uma vida sem dor começa com uma conversa. Agende
            sua avaliação e descubra como posso te ajudar.
          </p>
        </StyledHeroContent>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <StyledEvaluationOffer>
          <div className="offer-title">
            <FaStethoscope style={{ marginRight: "10px" }} />
            Primeira Consulta Especial
          </div>
          <div className="offer-description">
            Na sua primeira visita, você recebe uma avaliação fisioterapêutica
            completa para identificarmos exatamente o que está causando seu
            problema.
          </div>

          <StyledOfferItems>
            {evaluationItems.map((item, index) => (
              <div key={index} className="offer-item">
                <FaCheckCircle />
                {item}
              </div>
            ))}
          </StyledOfferItems>

          <StyledCTAButtons>
            <StyledMainCTA
              href="https://wa.me/5554996837282?text=Olá! Gostaria de agendar minha primeira consulta fisioterapêutica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              Agendar Agora no WhatsApp
            </StyledMainCTA>

            <StyledSecondaryCTA href="tel:+5554999999999">
              <FaPhone />
              Ligar Diretamente
            </StyledSecondaryCTA>
          </StyledCTAButtons>
        </StyledEvaluationOffer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <StyledClinicInfo>
          <h3 className="clinic-title">Clínica FisioVida - Informações</h3>

          <div className="info-grid">
            <StyledInfoCard>
              <div className="info-header">
                <FaMapMarkerAlt />
                <div className="info-title">Localização</div>
              </div>
              <div className="info-content">
                Rua das Flores, 123 - Centro
                <br />
                Chapecó - SC, 89801-000
                <br />
                <em>Estacionamento gratuito</em>
              </div>
            </StyledInfoCard>

            <StyledInfoCard>
              <div className="info-header">
                <FaClock />
                <div className="info-title">Horário de Funcionamento</div>
              </div>
              <div className="info-content">
                <strong>Segunda a Sexta:</strong> 7h às 19h
                <br />
                <strong>Sábado:</strong> 8h às 12h
                <br />
                <em>Atendimento por agendamento</em>
              </div>
            </StyledInfoCard>

            <StyledInfoCard>
              <div className="info-header">
                <FaPhone />
                <div className="info-title">Contatos</div>
              </div>
              <div className="info-content">
                <strong>WhatsApp:</strong> (49) 99999-9999
                <br />
                <strong>Telefone:</strong> (49) 3333-4444
                <br />
                <strong>Email:</strong> contato@fisiovida.com.br
              </div>
            </StyledInfoCard>

            <StyledInfoCard>
              <div className="info-header">
                <FaCalendarCheck />
                <div className="info-title">Como Agendar</div>
              </div>
              <div className="info-content">
                <strong>WhatsApp:</strong> Resposta imediata
                <br />
                <strong>Telefone:</strong> Horário comercial
                <br />
                <em>Agenda online disponível</em>
              </div>
            </StyledInfoCard>
          </div>
        </StyledClinicInfo>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <StyledUrgencyIndicator>
          <div className="urgency-text">
            ⚠️ Não deixe a dor se tornar crônica. Quanto antes iniciarmos o
            tratamento, mais rápida será sua recuperação.
          </div>
        </StyledUrgencyIndicator>
      </motion.div>
    </StyledFinalSection>
  );
};

export default FinalCTA;
