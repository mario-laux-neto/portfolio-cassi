// src/components/FlashlightEffect.js
"use client";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledFlashlight = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    600px at var(--x, 50%) var(--y, 50%),
    rgba(29, 78, 216, 0.15),
    transparent 80%
  );
  opacity: 0;
  transition: opacity 30ms;

  &.active {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const FlashlightEffect = () => {
  const flashlightRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const flashlight = flashlightRef.current;
    if (!flashlight) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      flashlight.style.setProperty("--x", `${x}px`);
      flashlight.style.setProperty("--y", `${y}px`);
    };

    const handleMouseEnter = () => {
      flashlight.classList.add("active");
    };

    const handleMouseLeave = () => {
      flashlight.classList.remove("active");
    };

    // Event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return <StyledFlashlight ref={flashlightRef} />;
};

export default FlashlightEffect;
