## **📋 Como adicionar seu currículo:**

### **Método 1: Download direto (Recomendado)**

1. **Converter seu currículo para PDF**
2. **Renomear para `curriculo.pdf`**
3. **Colocar na pasta `public/`**

```
meu-portifolio/
├── public/
│   ├── headshot.jpeg    ← Sua foto
│   └── curriculo.pdf    ← Seu currículo aqui
└── src/
```

### **Método 2: Atualizar o header**

Se o botão "Currículo" não estiver funcionando, vou atualizar:

```jsx
// No Header.js
<StyledResumeButton
  href="/curriculo.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Currículo
</StyledResumeButton>
```

### **Método 3: Adicionar na Hero section**

Posso adicionar um botão "Ver Currículo" na seção principal:

```jsx
// Adicionar junto com "Entre em contato!"
const six = (
  <StyledEmailLink
    href="/curriculo.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Ver Currículo
  </StyledEmailLink>
);
```

### **🎯 Qual método você prefere?**

1. **Só colocar o PDF na pasta public** (mais simples)
2. **Adicionar botão na Hero section**
3. **Verificar/corrigir o botão do header**

**O mais importante é colocar o arquivo `curriculo.pdf` na pasta `public/`!**
