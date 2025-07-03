// src/app/page.js
"use client";
import styled from "styled-components";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import SpecializationAreas from "@/components/sections/SpecializationAreas";
import CaseStudies from "@/components/sections/CaseStudies";
import Education from "@/components/sections/Education";
import Testimonials from "@/components/sections/Testimonials";

const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 0;

  @media (min-width: 1080px) {
    .section-with-padding {
      padding: 0 150px;
    }
  }

  @media (max-width: 1080px) {
    .section-with-padding {
      padding: 0 100px;
    }
  }

  @media (max-width: 768px) {
    .section-with-padding {
      padding: 0 50px;
    }
  }

  @media (max-width: 480px) {
    .section-with-padding {
      padding: 0 25px;
    }
  }
`;

export default function Home() {
  return (
    <StyledMainContainer>
      {/* 1. APRESENTAÇÃO PROFISSIONAL */}
      <Hero />

      {/* 2. SOBRE MIM - Biografia Profissional */}
      <div className="section-with-padding">
        <About />
      </div>

      {/* 3. ÁREAS DE ATUAÇÃO - Especialidades */}
      <div className="section-with-padding">
        <SpecializationAreas />
      </div>

      {/* 4. EXPERIÊNCIA PROFISSIONAL */}
      {/* <div className="section-with-padding">
        <Experience />
      </div> */}

      {/* 5. FORMAÇÃO E CERTIFICAÇÕES */}
      <div className="section-with-padding">
        <Education />
      </div>

      {/* 6. CASOS DE SUCESSO */}
      <div className="section-with-padding">
        <CaseStudies />
      </div>

      {/* 7. TESTEMUNHOS */}
      <div className="section-with-padding">
        <Testimonials />
      </div>
    </StyledMainContainer>
  );
}
