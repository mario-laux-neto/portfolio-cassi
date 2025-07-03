// src/components/sections/Testimonials.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import { FaQuoteLeft, FaStar, FaUserCircle, FaHeart } from "react-icons/fa";

const StyledTestimonialsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    ${theme.colors.lightGray} 0%,
    rgba(46, 134, 193, 0.02) 100%
  );
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

const StyledTestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledTestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const StyledTestimonialCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 35px;
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid ${theme.colors.success};

  &:hover {
    transform: translateY(-5px);
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
      ${theme.colors.success},
      ${theme.colors.primary}
    );
  }
`;

const StyledQuoteIcon = styled.div`
  position: absolute;
  top: -15px;
  left: 30px;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    135deg,
    ${theme.colors.success},
    ${theme.colors.primary}
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: 18px;
  box-shadow: ${theme.shadows.sm};
`;

const StyledTestimonialContent = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;

  .testimonial-text {
    font-size: 16px;
    color: ${theme.colors.mediumGray};
    line-height: 1.7;
    font-style: italic;
    margin-bottom: 20px;
  }

  .condition-treated {
    font-size: 14px;
    color: ${theme.colors.success};
    font-weight: 500;
    background: ${theme.colors.success}10;
    padding: 8px 12px;
    border-radius: ${theme.borderRadius.sm};
    display: inline-block;
    margin-bottom: 15px;
  }
`;

const StyledPatientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .patient-avatar {
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

  .patient-details {
    flex: 1;

    .patient-name {
      font-size: 16px;
      font-weight: 600;
      color: ${theme.colors.primary};
      margin-bottom: 3px;
    }

    .patient-info {
      font-size: 13px;
      color: ${theme.colors.mediumGray};
    }
  }
`;

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;

  .stars {
    display: flex;
    gap: 2px;

    svg {
      color: #ffd700;
      font-size: 14px;
    }
  }

  .rating-text {
    font-size: 12px;
    color: ${theme.colors.mediumGray};
    margin-left: 8px;
  }
`;

const StyledProfessionalTestimonials = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid ${theme.colors.lightGray};

  .section-subtitle {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: 30px;
  }
`;

const StyledColleagueCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 30px;
  box-shadow: ${theme.shadows.sm};
  border: 2px solid ${theme.colors.primary}20;
  position: relative;

  &:hover {
    border-color: ${theme.colors.primary}40;
    box-shadow: ${theme.shadows.md};
  }

  .colleague-content {
    font-size: 15px;
    color: ${theme.colors.mediumGray};
    line-height: 1.6;
    font-style: italic;
    margin-bottom: 20px;
  }

  .colleague-info {
    display: flex;
    align-items: center;
    gap: 12px;

    .colleague-avatar {
      width: 45px;
      height: 45px;
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
      font-size: 16px;
      flex-shrink: 0;
    }

    .colleague-details {
      .colleague-name {
        font-size: 15px;
        font-weight: 600;
        color: ${theme.colors.primary};
        margin-bottom: 2px;
      }

      .colleague-title {
        font-size: 12px;
        color: ${theme.colors.mediumGray};
      }
    }
  }
`;

const Testimonials = () => {
  const patientTestimonials = [
    {
      text: "Cassiane demonstrou grande dedicação e empatia durante o estágio. Sua abordagem humanizada e técnica foi essencial para minha recuperação.",
      condition: "Reabilitação Pós-Cirúrgica",
      patient: {
        name: "Ana P.",
        info: "45 anos, Professora",
        initials: "AP",
      },
      rating: 5,
    },
  ];

  const colleagueTestimonials = [
    {
      text: "O Dr. Mário é um excelente colega de profissão. A sua dedicação aos pacientes e o conhecimento técnico são admiráveis. É sempre uma referência quando preciso de uma segunda opinião em casos complexos.",
      colleague: {
        name: "Dra. Patrícia Costa",
        title: "Fisioterapeuta - Hospital de Santa Maria",
        initials: "PC",
      },
    },
    {
      text: "Trabalho com o Dr. Mário há vários anos e posso afirmar que é um profissional de excelência. A sua abordagem multidisciplinar e o cuidado com cada paciente fazem dele uma referência na área.",
      colleague: {
        name: "Dr. Carlos Mendes",
        title: "Médico Fisiatra - Clínica do Movimento",
        initials: "CM",
      },
    },
  ];

  return (
    <StyledTestimonialsSection id="testimonials">
      <StyledSectionHeader>
        <h2 className="numbered-heading">Testemunhos</h2>
        <p>
          O reconhecimento dos pacientes e colegas é a maior recompensa do meu
          trabalho. Estas palavras refletem o impacto positivo que procuro ter
          na vida de cada pessoa.
        </p>
      </StyledSectionHeader>

      <StyledTestimonialsContainer>
        <StyledTestimonialsGrid>
          {patientTestimonials.map((testimonial, index) => (
            <StyledTestimonialCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StyledQuoteIcon>
                <FaQuoteLeft />
              </StyledQuoteIcon>

              <StyledTestimonialContent>
                <div className="condition-treated">{testimonial.condition}</div>
                <div className="testimonial-text">"{testimonial.text}"</div>
              </StyledTestimonialContent>

              <StyledPatientInfo>
                <div className="patient-avatar">
                  {testimonial.patient.initials}
                </div>
                <div className="patient-details">
                  <div className="patient-name">{testimonial.patient.name}</div>
                  <div className="patient-info">{testimonial.patient.info}</div>
                </div>
              </StyledPatientInfo>

              <StyledRating>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="rating-text">
                  Avaliação: {testimonial.rating}/5
                </span>
              </StyledRating>
            </StyledTestimonialCard>
          ))}
        </StyledTestimonialsGrid>

        <StyledProfessionalTestimonials>
          <h3 className="section-subtitle">Reconhecimento Profissional</h3>
          <StyledTestimonialsGrid>
            {colleagueTestimonials.map((testimonial, index) => (
              <StyledColleagueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="colleague-content">"{testimonial.text}"</div>
                <div className="colleague-info">
                  <div className="colleague-avatar">
                    {testimonial.colleague.initials}
                  </div>
                  <div className="colleague-details">
                    <div className="colleague-name">
                      {testimonial.colleague.name}
                    </div>
                    <div className="colleague-title">
                      {testimonial.colleague.title}
                    </div>
                  </div>
                </div>
              </StyledColleagueCard>
            ))}
          </StyledTestimonialsGrid>
        </StyledProfessionalTestimonials>
      </StyledTestimonialsContainer>
    </StyledTestimonialsSection>
  );
};

export default Testimonials;
