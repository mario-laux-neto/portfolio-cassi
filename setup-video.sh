#!/bin/bash

# Script para criar um vídeo de exemplo para o projeto Coins for Study
# Execute este script na pasta raiz do projeto

echo "🎬 Criando estrutura de vídeos..."

# Criar a pasta de vídeos se não existir
mkdir -p public/videos

echo "📁 Pasta criada: public/videos"

echo "📝 Para adicionar o vídeo do Coins for Study:"
echo "   1. Coloque seu arquivo de vídeo em: public/videos/"
echo "   2. Renomeie para: 'deliveexpress-demo.mp4'"
echo "   3. Certifique-se de que o arquivo não exceda 50MB"

echo ""
echo "✅ Estrutura preparada!"
echo "🎯 Quando adicionar o vídeo, ele aparecerá automaticamente no modal do projeto."

# Se ffmpeg estiver instalado, criar um vídeo de exemplo
if command -v ffmpeg &> /dev/null; then
    echo ""
    echo "🔄 ffmpeg detectado! Criando vídeo de demonstração..."
    
    # Criar um vídeo de 15 segundos com gradiente e texto
    ffmpeg -f lavfi -i "color=c=0x0a192f:size=1280x720:duration=15,format=rgb24[bg];color=c=0x64ffda:size=400x100:duration=15[text]" \
           -f lavfi -i "sine=frequency=440:duration=15" \
           -filter_complex "[bg][text]overlay=(W-w)/2:(H-h)/2:enable='between(t,0,15)'" \
           -c:v libx264 -c:a aac -pix_fmt yuv420p -shortest \
           "public/videos/deliveexpress-demo.mp4" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "✅ Vídeo de demonstração criado com sucesso!"
        echo "📍 Localização: public/videos/deliveexpress-demo.mp4"
    else
        echo "❌ Erro ao criar vídeo de demonstração"
        echo "💡 Criando vídeo mais simples..."
        
        # Fallback: criar vídeo mais simples
        ffmpeg -f lavfi -i testsrc2=duration=10:size=1280x720:rate=30 \
               -f lavfi -i sine=frequency=1000:duration=10 \
               -c:v libx264 -c:a aac -shortest \
               "public/videos/deliveexpress-demo.mp4" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo "✅ Vídeo simples criado com sucesso!"
        fi
    fi
else
    echo ""
    echo "ℹ️  Para criar um vídeo de teste automaticamente, instale ffmpeg:"
    echo "   - Ubuntu/Debian: sudo apt install ffmpeg"
    echo "   - macOS: brew install ffmpeg"
    echo "   - Windows: winget install ffmpeg"
    echo ""
    echo "💡 Ou use o arquivo HTML de demonstração em:"
    echo "   public/demo-video-content.html"
    echo "   (Você pode gravar a tela deste arquivo para criar o vídeo)"
fi

echo ""
echo "🚀 Agora você pode testar o componente de vídeo!"
echo "🎮 Recursos do player implementados:"
echo "   ✅ Tela cheia (Botão no canto superior direito)"
echo "   ✅ Play/Pause"
echo "   ✅ Mute/Unmute"
echo "   ✅ Barra de progresso clicável"
echo "   ✅ Controles escondem automaticamente"
echo "   ✅ Suporte a múltiplos formatos de vídeo"