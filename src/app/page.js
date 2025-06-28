// src/app/page.js
"use client";
import styled from "styled-components";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";

const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

export default function Home() {
  return (
    <StyledMainContainer>
      <Hero />
      <StyledSection>
        <About />
      </StyledSection>
      <StyledSection>
        <Experience />
      </StyledSection>
      <styledSection>
        <Projects />
      </styledSection>
      <StyledSection>
        <Contact />
      </StyledSection>
    </StyledMainContainer>
  );
}
