// src/components/sections/SocialProof.js
"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../styles/theme";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const StyledSocialSection = styled.section`
  padding: 80px 0;
  background-color: ${theme.colors.white};
  text-align: center;
`;

const StyledSectionTitle = styled.h2`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 15px;
`;

const StyledSectionSubtitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.mediumGray};
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledStat = styled.div`
  .number {
    font-size: 3rem;
    font-weight: 700;
    color: ${theme.colors.success};
    display: block;
    line-height: 1;
  }

  .label {
    font-size: 16px;
    color: ${theme.colors.mediumGray};
    margin-top: 8px;
  }
`;

const StyledTestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledTestimonialCard = styled.div`
  background: ${theme.colors.lightGray};
  padding: 30px;
  border-radius: ${theme.borderRadius.lg};
  position: relative;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.md};
  }

  .quote-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${theme.colors.primary};
    font-size: 24px;
    opacity: 0.3;
  }
`;

const StyledTestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.darkGray};
  margin-bottom: 20px;
  font-style: italic;
  margin-top: 20px;
`;

const StyledTestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .author-info {
    .name {
      font-weight: 600;
      color: ${theme.colors.primary};
      font-size: 14px;
    }

    .condition {
      font-size: 12px;
      color: ${theme.colors.mediumGray};
    }
  }
`;

const StyledStarRating = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 15px;

  svg {
    color: #ffd700;
    font-size: 18px;
  }
`;

const SocialProof = () => {
  const stats = [
    { number: "500+", label: "Pacientes Recuperados" },
    { number: "10", label: "Anos de Experiência" },
    { number: "95%", label: "Taxa de Sucesso" },
    { number: "4.9", label: "Avaliação Google" },
  ];

  const testimonials = [
    {
      text: "Após 3 meses de fisioterapia, consegui voltar a correr sem dor. O Dr. [Nome] foi fundamental na minha recuperação completa.",
      author: "Maria Silva",
      condition: "Lesão no joelho",
      rating: 5,
    },
    {
      text: "Sofria com dores nas costas há anos. Em apenas 6 sessões, já sentia uma melhora significativa. Tratamento excelente!",
      author: "João Santos",
      condition: "Dor lombar crônica",
      rating: 5,
    },
    {
      text: "Durante minha gravidez, o acompanhamento fisioterapêutico foi essencial. Parto tranquilo e recuperação rápida.",
      author: "Ana Costa",
      condition: "Fisioterapia obstétrica",
      rating: 5,
    },
  ];

  return (
    <StyledSocialSection id="resultados">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <StyledSectionTitle>Resultados Que Falam Por Si</StyledSectionTitle>
        <StyledSectionSubtitle>
          Mais de uma década ajudando pessoas a recuperarem sua qualidade de
          vida
        </StyledSectionSubtitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <StyledStatsContainer>
          {stats.map((stat, index) => (
            <StyledStat key={index}>
              <span className="number">{stat.number}</span>
              <span className="label">{stat.label}</span>
            </StyledStat>
          ))}
        </StyledStatsContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <StyledTestimonialsContainer>
          {testimonials.map((testimonial, index) => (
            <StyledTestimonialCard key={index}>
              <FaQuoteLeft className="quote-icon" />

              <StyledStarRating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </StyledStarRating>

              <StyledTestimonialText>
                "{testimonial.text}"
              </StyledTestimonialText>

              <StyledTestimonialAuthor>
                <div className="author-info">
                  <div className="name">{testimonial.author}</div>
                  <div className="condition">{testimonial.condition}</div>
                </div>
              </StyledTestimonialAuthor>
            </StyledTestimonialCard>
          ))}
        </StyledTestimonialsContainer>
      </motion.div>
    </StyledSocialSection>
  );
};

export default SocialProof;
