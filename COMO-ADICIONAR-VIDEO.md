# 🎥 Configuração de Vídeo - Coins for Study

## 📂 Estrutura de Arquivos

```
portifolio/
├── public/
│   └── videos/
│       └── Coins for study.mp4  ← Adicione seu vídeo aqui
└── src/
    └── components/
        └── sections/
            └── Projects.js
```

## 🚀 Como Adicionar o Vídeo

### Opção 1: Manual

1. **Navegue até** `public/videos/`
2. **Adicione seu arquivo** de vídeo
3. **Renomeie para** `Coins for study.mp4`
4. **Recarregue** a página

### Opção 2: Script Automático

```bash
# Execute na raiz do projeto
chmod +x setup-video.sh
./setup-video.sh
```

## 📋 Especificações do Vídeo

- **Nome:** `Coins for study.mp4` (exato, incluindo espaços)
- **Formato:** MP4 (recomendado)
- **Tamanho:** Máximo 50MB
- **Resolução:** Máximo 1920x1080
- **Duração:** Recomendado 30-60 segundos

## 🔍 Formatos Suportados

O componente suporta múltiplos formatos:

- **MP4** (melhor compatibilidade)
- **WebM** (menor tamanho)
- **OGG** (fallback)

## 🛠️ Solução de Problemas

### Vídeo não carrega?

1. ✅ Verifique se o arquivo está em `public/videos/`
2. ✅ Confirme o nome exato: `Coins for study.mp4`
3. ✅ Teste em outro navegador
4. ✅ Verifique o console do navegador

### Erro de formato?

- Converta para MP4 usando [HandBrake](https://handbrake.fr/) ou FFmpeg

### Arquivo muito grande?

- Comprima usando [CloudConvert](https://cloudconvert.com/)
- Ou reduza a qualidade/resolução

## 🎯 Resultado Esperado

Quando configurado corretamente:

- ✅ Botão "Vídeo Demo" no card do projeto
- ✅ Modal abre com player de vídeo
- ✅ Controles nativos do navegador
- ✅ Autoplay com mute (boas práticas)
- ✅ Fallback elegante se o vídeo falhar

## 🔧 Desenvolvimento

O componente está configurado para:

- **Detecção automática** de vídeo
- **Fallback inteligente** se arquivo não existir
- **Loading state** durante verificação
- **Retry mechanism** para reconectar
- **Responsive design** para mobile

---

💡 **Dica:** Se você não tem um vídeo ainda, o componente mostrará uma mensagem elegante explicando como adicionar o arquivo.
