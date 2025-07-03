// src/components/sections/Projects.js
"use client";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import Link from "next/link";
import {
  FaBone,
  FaHeart,
  FaBaby,
  FaBrain,
  FaRunning,
  FaHandsHelping,
  FaEye,
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaVolumeUp,
  FaVolumeMute,
  FaWhatsapp,
  FaCalendarAlt,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

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
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const StyledCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  background-color: ${theme.colors.white};
  border-radius: 12px;
  box-shadow: ${theme.shadows.md};
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid ${theme.colors.lightGray};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.primary};
  }
`;

const StyledCardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const StyledCardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${theme.colors.mediumGray};
  flex-grow: 1;
`;

const StyledCardActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  margin-top: auto;

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    padding: 0.75rem 0.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.8rem;
    text-align: center;
    min-height: 44px;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    svg {
      font-size: 1rem;
      flex-shrink: 0;
    }
  }

  .btn-whatsapp {
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    border-color: ${theme.colors.success};
  }

  .btn-whatsapp:hover {
    background-color: #1e8449;
    border-color: #1e8449;
  }

  .btn-agendar {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  }

  .btn-agendar:hover {
    background-color: ${theme.colors.primaryDark};
    border-color: ${theme.colors.primaryDark};
  }

  .btn-saiba-mais {
    background-color: transparent;
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }

  .btn-saiba-mais:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  /* Responsividade para cards com 3 botões */
  &.three-buttons {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;

    a:nth-child(3) {
      grid-column: 1 / -1;
    }
  }

  /* Responsividade para cards com 2 botões */
  &.two-buttons {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    a {
      font-size: 0.85rem;
      padding: 0.8rem;
    }
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

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const StyledModalContent = styled.div`
  background-color: ${theme.colors.lightNavy};
  border-radius: 15px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  /* Estilo da barra de rolagem */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.navy};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.green};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.lightGreen};
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.green} ${theme.colors.navy};
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid ${theme.colors.navy};

  h3 {
    color: ${theme.colors.lightestSlate};
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.lightSlate};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.lightestSlate};
    background-color: ${theme.colors.navy};
  }
`;

const StyledCarousel = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isVideo",
})`
  position: relative;
  width: 100%;
  height: ${(props) => (props.isVideo ? "450px" : "400px")};
  overflow: hidden;
`;

const StyledCarouselImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "translateX",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.lightSlate};
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => props.translateX}%);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: ${theme.colors.navy};
  }
`;

const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.navy};
  border-radius: 8px;
  overflow: hidden;

  &:hover .video-controls {
    opacity: 1;
  }
`;

const StyledVideoControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 20px 15px 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;

  &.show {
    opacity: 1;
  }

  .controls-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const StyledProgressBar = styled.div`
  flex: 1;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  margin: 0 10px;
  position: relative;

  .progress-fill {
    height: 100%;
    background-color: ${theme.colors.green};
    border-radius: 2px;
    transition: width 0.1s ease;
  }

  &:hover .progress-fill {
    background-color: ${theme.colors.lightGreen};
  }
`;

const StyledTimeDisplay = styled.span`
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  min-width: 60px;
  text-align: center;
`;

const StyledVideoControlsTop = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
`;

const StyledVideoControlButton = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  padding: 8px;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.green};
    color: ${theme.colors.lightestNavy};
  }

  &.fullscreen-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: rgba(100, 255, 218, 0.1);
    border: 2px solid ${theme.colors.green};
    color: ${theme.colors.green};
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &:hover {
      background-color: ${theme.colors.green};
      color: ${theme.colors.lightestNavy};
    }
  }
`;

const StyledVideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: ${theme.colors.navy};

  &:focus {
    outline: 2px solid ${theme.colors.green};
  }

  /* Esconder controles nativos */
  &::-webkit-media-controls {
    display: none !important;
  }

  &::-webkit-media-controls-panel {
    display: none !important;
  }

  &::-webkit-media-controls-play-button {
    display: none !important;
  }

  &::-webkit-media-controls-start-playback-button {
    display: none !important;
  }
`;

const StyledVideoFallback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${theme.colors.lightSlate};
  text-align: center;
  padding: 2rem;

  .icon {
    font-size: 3rem;
    color: ${theme.colors.green};
    margin-bottom: 1rem;
  }

  h4 {
    color: ${theme.colors.lightestSlate};
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  small {
    color: ${theme.colors.slate};
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  .fallback-actions {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    button {
      background-color: ${theme.colors.green};
      color: ${theme.colors.lightestNavy};
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        background-color: ${theme.colors.lightGreen};
        transform: translateY(-2px);
      }
    }
  }
`;

const StyledCarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(100, 255, 218, 0.1);
  border: 2px solid ${theme.colors.green};
  color: ${theme.colors.green};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: ${theme.colors.green};
    color: ${theme.colors.lightestNavy};
  }

  &.prev {
    left: 15px;
  }

  &.next {
    right: 15px;
  }
`;

const StyledCarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
`;

const StyledIndicator = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.active ? theme.colors.green : theme.colors.lightSlate};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.active ? 1 : 0.5)};

  &:hover {
    background-color: ${theme.colors.green};
    opacity: 1;
  }
`;

const StyledModalDescription = styled.div`
  padding: 1.5rem;
  color: ${theme.colors.lightSlate};
  line-height: 1.6;

  h4 {
    color: ${theme.colors.lightestSlate};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;

    span {
      background-color: ${theme.colors.navy};
      color: ${theme.colors.green};
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Pausar vídeo quando modal é fechado
  useEffect(() => {
    if (!selectedProject && videoRef.current) {
      videoRef.current.pause();
    }
    // Reset video error quando um novo projeto é selecionado
    if (selectedProject) {
      setVideoError(false);
      setVideoLoading(false);
    }
  }, [selectedProject]);

  // Função para verificar se o vídeo existe
  const checkVideoExists = async (src) => {
    try {
      const response = await fetch(src, { method: "HEAD" });
      return response.ok;
    } catch {
      return false;
    }
  };

  // Função para alternar tela cheia
  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if (containerRef.current.webkitRequestFullscreen) {
          await containerRef.current.webkitRequestFullscreen();
        } else if (containerRef.current.mozRequestFullScreen) {
          await containerRef.current.mozRequestFullScreen();
        } else if (containerRef.current.msRequestFullscreen) {
          await containerRef.current.msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          await document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Erro ao alternar tela cheia:", error);
    }
  };

  // Função para alternar play/pause
  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Função para alternar mute
  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Função para atualizar tempo do vídeo
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
  };

  // Esconder controles após inatividade
  useEffect(() => {
    let timeout;

    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      clearTimeout(timeout);
    };
  }, [isPlaying]);

  // Listener para mudanças de tela cheia
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  // Dados das áreas de atuação
  const areasData = {
    "fisioterapia-ortopedica": {
      title: "Fisioterapia Ortopédica",
      description:
        "Tratamento especializado de lesões musculoesqueléticas, fraturas, entorses e problemas posturais. Foco na reabilitação funcional e prevenção de lesões.",
      type: "images",
      media: ["/images/ortopedica1.jpg", "/images/ortopedica2.jpg"],
      conditions: [
        "Dores nas costas e coluna",
        "Lesões esportivas",
        "Fraturas e entorses",
        "Artrite e artrose",
        "Problemas posturais",
        "Reabilitação pós-cirúrgica",
      ],
    },
    "fisioterapia-neurologica": {
      title: "Fisioterapia Neurológica",
      description:
        "Reabilitação de pacientes com distúrbios neurológicos, focando na melhoria da função motora, equilíbrio e coordenação.",
      type: "images",
      media: ["/images/neurologica1.jpg", "/images/neurologica2.jpg"],
      conditions: [
        "AVC (Derrame)",
        "Parkinson",
        "Esclerose Múltipla",
        "Paralisia cerebral",
        "Lesões medulares",
        "Distúrbios do equilíbrio",
      ],
    },
    "saude-da-mulher": {
      title: "Saúde da Mulher",
      description:
        "Cuidados especializados para mulheres em todas as fases da vida, incluindo gestação, pós-parto e saúde pélvica.",
      type: "images",
      media: ["/images/mulher1.jpg", "/images/mulher2.jpg"],
      conditions: [
        "Fisioterapia obstétrica",
        "Preparação para o parto",
        "Recuperação pós-parto",
        "Incontinência urinária",
        "Disfunções do assoalho pélvico",
        "Dores pélvicas",
      ],
    },
    "fisioterapia-pediatrica": {
      title: "Fisioterapia Pediátrica",
      description:
        "Tratamento especializado para bebês, crianças e adolescentes, promovendo o desenvolvimento motor adequado.",
      type: "images",
      media: ["/images/pediatrica1.jpg", "/images/pediatrica2.jpg"],
      conditions: [
        "Atrasos no desenvolvimento",
        "Paralisia cerebral infantil",
        "Problemas respiratórios",
        "Disfunções motoras",
        "Estimulação precoce",
        "Escoliose infantil",
      ],
    },
    "fisioterapia-respiratoria": {
      title: "Fisioterapia Respiratória",
      description:
        "Tratamento de disfunções respiratórias e reabilitação pulmonar para melhorar a capacidade respiratória.",
      type: "images",
      media: ["/images/respiratoria1.jpg", "/images/respiratoria2.jpg"],
      conditions: [
        "Asma e bronquite",
        "DPOC",
        "Pneumonia",
        "Reabilitação pulmonar",
        "Pós-COVID",
        "Disfunções respiratórias",
      ],
    },
    "fisioterapia-esportiva": {
      title: "Fisioterapia Esportiva",
      description:
        "Prevenção e tratamento de lesões esportivas, otimização do desempenho atlético e retorno seguro ao esporte.",
      type: "images",
      media: ["/images/esportiva1.jpg", "/images/esportiva2.jpg"],
      conditions: [
        "Lesões musculares",
        "Entorses articulares",
        "Tendinites",
        "Prevenção de lesões",
        "Otimização de performance",
        "Retorno ao esporte",
      ],
    },
  };

  const openModal = async (areaKey) => {
    const area = areasData[areaKey];
    setSelectedProject(area);
    setCurrentImageIndex(0);

    // Se for um projeto de vídeo, verificar se o vídeo existe
    if (area.type === "video") {
      setVideoLoading(true);
      const videoExists = await checkVideoExists(area.media[0]);
      if (!videoExists) {
        setVideoError(true);
      }
      setVideoLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.media.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <StyledProjectsSection id="areas">
      <StyledTitle className="numbered-heading">Áreas de Atuação</StyledTitle>

      <StyledCategoriesGrid>
        <StyledCategoryCard>
          <StyledCardContent>
            <StyledCardTitle>
              <FaBone style={{ marginRight: "8px", color: "#2E86C1" }} />
              Fisioterapia Ortopédica
            </StyledCardTitle>
            <StyledCardDescription>
              Tratamento especializado de lesões musculoesqueléticas, fraturas,
              entorses e problemas posturais. Foco na reabilitação funcional e
              prevenção de lesões.
            </StyledCardDescription>
            <StyledCardActions className="three-buttons">
              <a
                href="https://wa.me/5554996837282?text=Gostaria de saber mais sobre Fisioterapia Ortopédica"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <button
                onClick={() => openModal("fisioterapia-ortopedica")}
                className="btn-saiba-mais"
              >
                <FaEye /> Saiba Mais
              </button>
              <a
                href="https://wa.me/5554996837282?text=Gostaria de agendar uma avaliação de Fisioterapia Ortopédica"
                className="btn-agendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarAlt /> Agendar
              </a>
            </StyledCardActions>
          </StyledCardContent>
        </StyledCategoryCard>

        <StyledCategoryCard>
          <StyledCardContent>
            <StyledCardTitle>
              <FaBrain style={{ marginRight: "8px", color: "#2E86C1" }} />
              Fisioterapia Neurológica
            </StyledCardTitle>
            <StyledCardDescription>
              Reabilitação de pacientes com distúrbios neurológicos, focando na
              melhoria da função motora, equilíbrio e coordenação.
            </StyledCardDescription>
            <StyledCardActions className="three-buttons">
              <a
                href="https://wa.me/5554996837282?text=Gostaria de saber mais sobre Fisioterapia Neurológica"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <button
                onClick={() => openModal("fisioterapia-neurologica")}
                className="btn-saiba-mais"
              >
                <FaEye /> Saiba Mais
              </button>
              <a
                href="https://wa.me/5554996837282?text=Gostaria de agendar uma avaliação de Fisioterapia Neurológica"
                className="btn-agendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarAlt /> Agendar
              </a>
            </StyledCardActions>
          </StyledCardContent>
        </StyledCategoryCard>

        <StyledCategoryCard>
          <StyledCardContent>
            <StyledCardTitle>
              <FaHeart style={{ marginRight: "8px", color: "#2E86C1" }} />
              Saúde da Mulher
            </StyledCardTitle>
            <StyledCardDescription>
              Cuidados especializados para mulheres em todas as fases da vida,
              incluindo gestação, pós-parto e saúde pélvica.
            </StyledCardDescription>
            <StyledCardActions className="three-buttons">
              <a
                href="https://wa.me/5554996837282?text=Gostaria de saber mais sobre Saúde da Mulher"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <button
                onClick={() => openModal("saude-da-mulher")}
                className="btn-saiba-mais"
              >
                <FaEye /> Saiba Mais
              </button>
              <a
                href="https://wa.me/5554996837282?text=Gostaria de agendar uma avaliação de Saúde da Mulher"
                className="btn-agendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarAlt /> Agendar
              </a>
            </StyledCardActions>
          </StyledCardContent>
        </StyledCategoryCard>

        <StyledCategoryCard>
          <StyledCardContent>
            <StyledCardTitle>
              <FaBaby style={{ marginRight: "8px", color: "#2E86C1" }} />
              Fisioterapia Pediátrica
            </StyledCardTitle>
            <StyledCardDescription>
              Tratamento especializado para bebês, crianças e adolescentes,
              promovendo o desenvolvimento motor adequado.
            </StyledCardDescription>
            <StyledCardActions className="three-buttons">
              <a
                href="https://wa.me/5554996837282?text=Gostaria de saber mais sobre Fisioterapia Pediátrica"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <button
                onClick={() => openModal("fisioterapia-pediatrica")}
                className="btn-saiba-mais"
              >
                <FaEye /> Saiba Mais
              </button>
              <a
                href="https://wa.me/5554996837282?text=Gostaria de agendar uma avaliação de Fisioterapia Pediátrica"
                className="btn-agendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarAlt /> Agendar
              </a>
            </StyledCardActions>
          </StyledCardContent>
        </StyledCategoryCard>

        <StyledCategoryCard>
          <StyledCardContent>
            <StyledCardTitle>
              <FaRunning style={{ marginRight: "8px", color: "#2E86C1" }} />
              Fisioterapia Respiratória
            </StyledCardTitle>
            <StyledCardDescription>
              Tratamento de disfunções respiratórias e reabilitação pulmonar
              para melhorar a capacidade respiratória.
            </StyledCardDescription>
            <StyledCardActions className="three-buttons">
              <a
                href="https://wa.me/5554996837282?text=Gostaria de saber mais sobre Fisioterapia Respiratória"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <button
                onClick={() => openModal("fisioterapia-respiratoria")}
                className="btn-saiba-mais"
              >
                <FaEye /> Saiba Mais
              </button>
              <a
                href="https://wa.me/5554996837282?text=Gostaria de agendar uma avaliação de Fisioterapia Respiratória"
                className="btn-agendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarAlt /> Agendar
              </a>
            </StyledCardActions>
          </StyledCardContent>
        </StyledCategoryCard>

        <StyledCategoryCard>
          <StyledCardContent>
            <StyledCardTitle>
              <FaHandsHelping
                style={{ marginRight: "8px", color: "#2E86C1" }}
              />
              Fisioterapia Esportiva
            </StyledCardTitle>
            <StyledCardDescription>
              Prevenção e tratamento de lesões esportivas, otimização do
              desempenho atlético e retorno seguro ao esporte.
            </StyledCardDescription>
            <StyledCardActions className="three-buttons">
              <a
                href="https://wa.me/5554996837282?text=Gostaria de saber mais sobre Fisioterapia Esportiva"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <button
                onClick={() => openModal("fisioterapia-esportiva")}
                className="btn-saiba-mais"
              >
                <FaEye /> Saiba Mais
              </button>
              <a
                href="https://wa.me/5554996837282?text=Gostaria de agendar uma avaliação de Fisioterapia Esportiva"
                className="btn-agendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarAlt /> Agendar
              </a>
            </StyledCardActions>
          </StyledCardContent>
        </StyledCategoryCard>
      </StyledCategoriesGrid>

      {/* Modal com Carrossel */}
      {selectedProject && (
        <StyledModal onClick={closeModal}>
          <StyledModalContent onClick={(e) => e.stopPropagation()}>
            <StyledModalHeader>
              <h3>{selectedProject.title}</h3>
              <StyledCloseButton onClick={closeModal}>
                <FaTimes />
              </StyledCloseButton>
            </StyledModalHeader>

            <StyledCarousel isVideo={selectedProject.type === "video"}>
              {selectedProject.type === "video" ? (
                // Renderização para vídeo
                <StyledCarouselImage translateX={0}>
                  {videoLoading ? (
                    <StyledVideoFallback>
                      <FaPlay className="icon" />
                      <h4>Carregando vídeo...</h4>
                      <p>Verificando disponibilidade do vídeo demo.</p>
                    </StyledVideoFallback>
                  ) : !videoError ? (
                    <StyledVideoContainer ref={containerRef}>
                      <StyledVideoPlayer
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        preload="metadata"
                        onLoadStart={() =>
                          console.log(
                            "Carregando vídeo:",
                            selectedProject.media[0]
                          )
                        }
                        onError={(e) => {
                          console.error("Erro ao carregar vídeo:", {
                            src: selectedProject.media[0],
                            error: e.target.error,
                            networkState: e.target.networkState,
                            readyState: e.target.readyState,
                          });
                          setVideoError(true);
                        }}
                        onCanPlay={() =>
                          console.log("Vídeo pronto para reproduzir")
                        }
                        onLoadedMetadata={() =>
                          console.log("Metadados carregados")
                        }
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onTimeUpdate={handleTimeUpdate}
                      >
                        <source
                          src={selectedProject.media[0]}
                          type="video/mp4"
                        />
                        <source
                          src={selectedProject.media[0]}
                          type="video/webm"
                        />
                        <source
                          src={selectedProject.media[0]}
                          type="video/ogg"
                        />
                        Seu navegador não suporta o elemento de vídeo.
                      </StyledVideoPlayer>

                      {/* Controles personalizados */}
                      <StyledVideoControls
                        className={`video-controls ${
                          showControls ? "show" : ""
                        }`}
                      >
                        <div className="controls-row">
                          <StyledVideoControlButton onClick={togglePlayPause}>
                            {isPlaying ? <FaPause /> : <FaPlay />}
                          </StyledVideoControlButton>

                          <StyledVideoControlButton onClick={toggleMute}>
                            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                          </StyledVideoControlButton>

                          <StyledTimeDisplay>
                            {Math.floor(currentTime / 60)}:
                            {Math.floor(currentTime % 60)
                              .toString()
                              .padStart(2, "0")}
                          </StyledTimeDisplay>

                          <StyledProgressBar
                            onClick={(e) => {
                              if (!videoRef.current || !duration) return;
                              const rect =
                                e.currentTarget.getBoundingClientRect();
                              const percent =
                                (e.clientX - rect.left) / rect.width;
                              const newTime = percent * duration;
                              videoRef.current.currentTime = newTime;
                            }}
                          >
                            <div
                              className="progress-fill"
                              style={{
                                width: `${
                                  duration ? (currentTime / duration) * 100 : 0
                                }%`,
                              }}
                            />
                          </StyledProgressBar>

                          <StyledTimeDisplay>
                            {Math.floor(duration / 60)}:
                            {Math.floor(duration % 60)
                              .toString()
                              .padStart(2, "0")}
                          </StyledTimeDisplay>
                        </div>
                      </StyledVideoControls>

                      {/* Botão de tela cheia */}
                      <StyledVideoControlButton
                        className="fullscreen-btn"
                        onClick={toggleFullscreen}
                        title={
                          isFullscreen ? "Sair da tela cheia" : "Tela cheia"
                        }
                      >
                        {isFullscreen ? <FaCompress /> : <FaExpand />}
                      </StyledVideoControlButton>
                    </StyledVideoContainer>
                  ) : (
                    <StyledVideoFallback>
                      <FaPlay className="icon" />
                      <h4>Vídeo Demo Indisponível</h4>
                      <p>Para visualizar o vídeo demo do Coins for Study:</p>
                      <small>
                        1. Adicione o arquivo <code>Coins for study.mp4</code>{" "}
                        na pasta <code>/public/videos/</code>
                        <br />
                        2. Certifique-se de que o nome do arquivo está correto
                        (incluindo espaços)
                        <br />
                        3. O vídeo deve estar em formato MP4
                      </small>
                      <div className="fallback-actions">
                        <button onClick={() => setVideoError(false)}>
                          <FaPlay /> Tentar Novamente
                        </button>
                        <button
                          onClick={() =>
                            window.open(
                              "https://github.com/usuario/coins-for-study",
                              "_blank"
                            )
                          }
                        >
                          <FaGithub /> Ver Repositório
                        </button>
                      </div>
                    </StyledVideoFallback>
                  )}
                </StyledCarouselImage>
              ) : (
                // Renderização para imagens (carrossel normal)
                selectedProject.media.map((image, index) => (
                  <StyledCarouselImage
                    key={index}
                    translateX={(index - currentImageIndex) * 100}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} - Imagem ${index + 1}`}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div style={{ display: "none", fontSize: "1rem" }}>
                      Imagem {index + 1}
                    </div>
                  </StyledCarouselImage>
                ))
              )}

              {selectedProject.type === "images" &&
                selectedProject.media.length > 1 && (
                  <>
                    <StyledCarouselButton className="prev" onClick={prevImage}>
                      <FaChevronLeft />
                    </StyledCarouselButton>
                    <StyledCarouselButton className="next" onClick={nextImage}>
                      <FaChevronRight />
                    </StyledCarouselButton>
                  </>
                )}
            </StyledCarousel>

            {selectedProject.type === "images" &&
              selectedProject.media.length > 1 && (
                <StyledCarouselIndicators>
                  {selectedProject.media.map((_, index) => (
                    <StyledIndicator
                      key={index}
                      active={index === currentImageIndex}
                      onClick={() => goToImage(index)}
                    />
                  ))}
                </StyledCarouselIndicators>
              )}

            <StyledModalDescription>
              <h4>Sobre o Projeto</h4>
              <p>{selectedProject.description}</p>

              <div className="tech-stack">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </StyledModalDescription>
          </StyledModalContent>
        </StyledModal>
      )}
    </StyledProjectsSection>
  );
};

export default Projects;
