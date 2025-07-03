// styles/theme.js - Tema Fisioterapia
export const theme = {
  colors: {
    // Tons de azul saúde e bem-estar
    primary: "#2E86C1", // Azul confiança
    primaryLight: "#5DADE2", // Azul claro
    primaryDark: "#1B4F72", // Azul escuro

    // Tons complementares de saúde
    secondary: "#48C9B0", // Verde menta (calmante)
    accent: "#F39C12", // Laranja suave (energia)

    // Neutros profissionais
    white: "#ffffff",
    lightGray: "#F8F9FA", // Fundo suave
    mediumGray: "#6C757D", // Texto secundário
    darkGray: "#343A40", // Texto principal

    // Cores específicas da área
    success: "#27AE60", // Verde sucesso
    trustBlue: "#3498DB", // Azul confiança

    // Compatibilidade com código existente
    green: "#2E86C1", // Mapeia para primary
    navy: "#F8F9FA", // Fundo claro
    lightNavy: "#ffffff",
    lightestNavy: "#E8F4FD",
    slate: "#6C757D",
    lightSlate: "#ADB5BD",
    lightestSlate: "#343A40",
  },

  fonts: {
    // Fontes profissionais e legíveis para área da saúde
    main: "'Lato', 'Roboto', 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'Montserrat', 'Lato', sans-serif",
    mono: "'Roboto Mono', 'Source Code Pro', monospace",
  },

  fontSizes: {
    xs: "12px",
    smish: "13px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    h3: "28px",
    h2: "32px",
    h1: "36px",
  },

  // Novos valores específicos para fisioterapia
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    pill: "50px",
  },

  shadows: {
    sm: "0 2px 4px rgba(0,0,0,0.1)",
    md: "0 4px 12px rgba(0,0,0,0.15)",
    lg: "0 8px 24px rgba(0,0,0,0.15)",
    xl: "0 12px 32px rgba(0,0,0,0.2)",
  },
};
