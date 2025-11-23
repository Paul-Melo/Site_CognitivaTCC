# 📝 Guia Completo de Edição Manual - Site Equilíbrio Cognitivo

**Versão:** 1.0  
**Data:** 15 de agosto de 2025  
**Autor:** Manus AI  
**Destinado a:** Usuários que desejam editar o site manualmente

---

## 📚 Índice

1. [Introdução](#introdução)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Editando Textos e Conteúdo](#editando-textos-e-conteúdo)
4. [Personalizando Cores e Estilos CSS](#personalizando-cores-e-estilos-css)
5. [Modificando Fontes e Tipografia](#modificando-fontes-e-tipografia)
6. [Editando Botões e Elementos Interativos](#editando-botões-e-elementos-interativos)
7. [Alterando Imagens](#alterando-imagens)
8. [Modificando Links e Contatos](#modificando-links-e-contatos)
9. [Dicas de Segurança](#dicas-de-segurança)
10. [Solução de Problemas](#solução-de-problemas)

---

## 🎯 Introdução

Este guia foi criado para permitir que você faça modificações no site Equilíbrio Cognitivo de forma autônoma e segura. Você aprenderá a editar textos, alterar cores, modificar fontes, personalizar botões e muito mais, sem precisar de conhecimento avançado em programação.

### ⚠️ Importante - Antes de Começar

**SEMPRE faça backup dos arquivos antes de editá-los!** Copie os arquivos originais para uma pasta de backup antes de fazer qualquer alteração. Isso permitirá que você restaure o site caso algo dê errado.

### 🛠️ Ferramentas Necessárias

Para editar o site, você precisará de:
- **Editor de texto/código:** Visual Studio Code (recomendado), Sublime Text, ou Notepad++
- **Navegador web:** Para visualizar as alterações
- **Conhecimento básico:** Saber localizar e abrir arquivos no computador

---

## 📁 Estrutura do Projeto

Antes de começar a editar, é importante entender como o projeto está organizado:

```
equilibrio-cognitivo/
├── src/
│   ├── App.jsx                 # ⭐ ARQUIVO PRINCIPAL - Contém todo o conteúdo do site
│   ├── App.css                 # ⭐ ESTILOS PRINCIPAIS - Cores, fontes, etc.
│   ├── assets/                 # 📁 Imagens do site
│   │   ├── logo-cognitiva.png
│   │   ├── hero-optimized.png
│   │   └── ...
│   └── components/             # 📁 Componentes especiais
│       ├── FAQ.jsx             # ⭐ Página de Perguntas Frequentes
│       └── PrivacyPolicy.jsx   # ⭐ Política de Privacidade
├── public/
│   └── index.html              # ⭐ Configurações da página (título, meta tags)
└── package.json                # Configurações do projeto
```

### 🎯 Arquivos Mais Importantes para Edição

1. **`src/App.jsx`** - Contém TODO o texto e conteúdo do site
2. **`src/App.css`** - Contém as cores, fontes e estilos visuais
3. **`src/components/FAQ.jsx`** - Perguntas e respostas da página FAQ
4. **`src/components/PrivacyPolicy.jsx`** - Conteúdo da política de privacidade
5. **`public/index.html`** - Título da página e configurações SEO

---


## ✏️ Editando Textos e Conteúdo

### 📍 Localizando Textos no Arquivo Principal

Todo o conteúdo textual do site está no arquivo `src/App.jsx`. Este arquivo contém desde o nome da psicóloga até os textos dos serviços e informações de contato.

### 🔍 Como Encontrar e Editar Textos Específicos

#### 1. **Nome da Psicóloga**

**Localização:** Procure por "Ana Clara Mendes" no arquivo `src/App.jsx`

**Exemplo de código:**
```jsx
<div className="text-white/60 text-sm">
  CRP 06/123456 | Dra. Ana Clara Mendes
</div>
```

**Para alterar:** Substitua "Ana Clara Mendes" pelo nome desejado:
```jsx
<div className="text-white/60 text-sm">
  CRP 06/123456 | Dra. Maria Silva Santos
</div>
```

#### 2. **Número do CRP**

**Localização:** Procure por "CRP 06/123456" no arquivo

**Para alterar:** Substitua pelo número real do CRP:
```jsx
CRP 06/987654 | Dra. Ana Clara Mendes
```

#### 3. **Título Principal (Hero Section)**

**Localização:** Procure por "Terapia Cognitivo-Comportamental para ansiedade e foco"

**Código atual:**
```jsx
<h1 className="text-4xl md:text-6xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6 leading-tight">
  Terapia Cognitivo-Comportamental para 
  <span className="text-[var(--cognitiva-dourado)]"> ansiedade e foco</span>
</h1>
```

**Para alterar:** Modifique o texto mantendo a estrutura:
```jsx
<h1 className="text-4xl md:text-6xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6 leading-tight">
  Psicoterapia Especializada para 
  <span className="text-[var(--cognitiva-dourado)]"> bem-estar mental</span>
</h1>
```

#### 4. **Subtítulo do Hero**

**Localização:** Procure por "Atendimento online e presencial baseado em evidências científicas"

**Para alterar:**
```jsx
<p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
  Seu novo subtítulo aqui
</p>
```

#### 5. **Informações da Psicóloga (Seção Sobre)**

**Localização:** Procure pela seção que começa com "Psicóloga clínica especialista"

**Código atual:**
```jsx
<p className="text-lg text-gray-700 mb-8 leading-relaxed">
  Psicóloga clínica especialista em Terapia Cognitivo-Comportamental (TCC) 
  com mais de 8 anos de experiência no atendimento de adultos e adolescentes.
</p>
```

**Para personalizar:** Altere a descrição conforme necessário:
```jsx
<p className="text-lg text-gray-700 mb-8 leading-relaxed">
  Sua nova descrição profissional aqui. Mantenha um tom profissional 
  e inclua suas especializações e experiência.
</p>
```

#### 6. **Preços dos Serviços**

**Localização:** Procure por "R$ 180", "R$ 160", "R$ 280"

**Exemplo para Terapia Individual:**
```jsx
<div className="text-3xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">
  R$ 180
</div>
```

**Para alterar preços:**
```jsx
<div className="text-3xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">
  R$ 200
</div>
```

#### 7. **Informações de Contato**

**Localização:** Procure por telefone, email e endereço

**Telefone:**
```jsx
<div className="text-gray-700">(11) 99999-9999</div>
```

**Email:**
```jsx
<div className="text-gray-700">contato@equilibriocognitivo.com.br</div>
```

**Endereço:**
```jsx
<div className="text-gray-700">
  Rua das Flores, 123 - Vila Madalena<br />São Paulo - SP
</div>
```

### 📝 Dicas para Edição de Texto

1. **Mantenha a estrutura HTML:** Não remova as tags `<div>`, `<p>`, `<h1>`, etc.
2. **Preserve as classes CSS:** Não altere os valores de `className`
3. **Cuidado com aspas:** Use aspas duplas (") para atributos HTML
4. **Teste após cada alteração:** Salve o arquivo e visualize no navegador

### 🔄 Como Visualizar as Alterações

Após editar o texto:

1. **Salve o arquivo** (Ctrl+S)
2. **Abra o terminal** na pasta do projeto
3. **Execute o comando:** `npm run dev`
4. **Abra o navegador** em `http://localhost:5173`
5. **Verifique as alterações**

---


## 🎨 Personalizando Cores e Estilos CSS

### 🎯 Sistema de Cores do Site

O site utiliza um sistema de variáveis CSS que facilita muito a alteração das cores. Todas as cores principais estão definidas no arquivo `src/App.css` e podem ser modificadas facilmente.

### 📍 Localizando as Variáveis de Cor

**Arquivo:** `src/App.css`  
**Seção:** Procure por "Cores personalizadas do projeto Cognitiva"

**Código atual:**
```css
:root {
  /* Cores personalizadas do projeto Cognitiva */
  --cognitiva-bege: #F0EAD2;
  --cognitiva-dourado: #C9A66B;
  --cognitiva-azul-petroleo: #2C5F5D;
  --cognitiva-verde-salvia: #9CAF88;
  --cognitiva-branco-suave: #FAF9F6;
}
```

### 🎨 Guia Completo de Cores

#### **Paleta de Cores Atual**

| Variável CSS | Cor Atual | Onde é Usada | Código Hex |
|--------------|-----------|--------------|------------|
| `--cognitiva-bege` | Bege claro | Fundos suaves, seções destacadas | `#F0EAD2` |
| `--cognitiva-dourado` | Dourado elegante | Botões principais, destaques, acentos | `#C9A66B` |
| `--cognitiva-azul-petroleo` | Azul petróleo | Títulos, textos principais, navbar | `#2C5F5D` |
| `--cognitiva-verde-salvia` | Verde sálvia | Gradientes, seções especiais | `#9CAF88` |
| `--cognitiva-branco-suave` | Branco suave | Fundos principais | `#FAF9F6` |

#### **Como Alterar as Cores**

Para mudar qualquer cor do site, você precisa alterar o valor hexadecimal correspondente no arquivo `src/App.css`.

**Exemplo - Alterando a cor dourada:**

**Antes:**
```css
--cognitiva-dourado: #C9A66B;
```

**Depois (para um tom mais rosado):**
```css
--cognitiva-dourado: #D4A574;
```

**Depois (para um tom mais escuro):**
```css
--cognitiva-dourado: #B8956A;
```

### 🔧 Alterações Específicas de Cor

#### **1. Mudando a Cor dos Botões Principais**

Os botões principais usam a variável `--cognitiva-dourado`. Para alterar:

1. **Abra** `src/App.css`
2. **Localize** a linha `--cognitiva-dourado: #C9A66B;`
3. **Substitua** o código da cor:

```css
/* Para um azul elegante */
--cognitiva-dourado: #4A90E2;

/* Para um verde moderno */
--cognitiva-dourado: #27AE60;

/* Para um roxo sofisticado */
--cognitiva-dourado: #8E44AD;
```

#### **2. Alterando a Cor dos Títulos**

Os títulos principais usam `--cognitiva-azul-petroleo`. Para modificar:

```css
/* Cor atual */
--cognitiva-azul-petroleo: #2C5F5D;

/* Para um azul marinho */
--cognitiva-azul-petroleo: #1E3A8A;

/* Para um cinza escuro elegante */
--cognitiva-azul-petroleo: #374151;

/* Para um verde escuro */
--cognitiva-azul-petroleo: #065F46;
```

#### **3. Modificando Cores de Fundo**

Para alterar as cores de fundo das seções:

```css
/* Fundo bege atual */
--cognitiva-bege: #F0EAD2;

/* Para um cinza claro */
--cognitiva-bege: #F3F4F6;

/* Para um azul muito claro */
--cognitiva-bege: #EFF6FF;

/* Para um verde muito claro */
--cognitiva-bege: #F0FDF4;
```

### 🌈 Criando Sua Própria Paleta de Cores

#### **Passo 1: Escolha uma Cor Principal**

Decida qual será a cor principal do seu site (equivalente ao dourado atual). Esta cor será usada nos botões e destaques.

#### **Passo 2: Defina a Cor dos Textos**

Escolha uma cor escura para títulos e textos importantes (equivalente ao azul petróleo atual).

#### **Passo 3: Selecione Cores de Apoio**

Escolha cores mais suaves para fundos e elementos secundários.

#### **Exemplo de Nova Paleta - Tema Azul Profissional:**

```css
:root {
  /* Nova paleta azul profissional */
  --cognitiva-bege: #F8FAFC;          /* Cinza muito claro */
  --cognitiva-dourado: #3B82F6;       /* Azul vibrante */
  --cognitiva-azul-petroleo: #1E293B; /* Cinza azulado escuro */
  --cognitiva-verde-salvia: #64748B;   /* Cinza azulado médio */
  --cognitiva-branco-suave: #FFFFFF;   /* Branco puro */
}
```

#### **Exemplo de Nova Paleta - Tema Verde Natureza:**

```css
:root {
  /* Nova paleta verde natureza */
  --cognitiva-bege: #F0FDF4;          /* Verde muito claro */
  --cognitiva-dourado: #22C55E;       /* Verde vibrante */
  --cognitiva-azul-petroleo: #14532D; /* Verde escuro */
  --cognitiva-verde-salvia: #16A34A;   /* Verde médio */
  --cognitiva-branco-suave: #FEFFFE;   /* Branco levemente esverdeado */
}
```

### 🎨 Ferramentas para Escolher Cores

#### **Sites Recomendados para Paletas:**

1. **Coolors.co** - Gerador de paletas automático
2. **Adobe Color** - Ferramenta profissional da Adobe
3. **Material Design Colors** - Paletas do Google
4. **Paletton** - Criador de esquemas de cores

#### **Como Usar Códigos Hex:**

Todas as cores no CSS usam códigos hexadecimais (ex: `#C9A66B`). Estes códigos representam:
- **#** - Indica que é um código hex
- **Primeiros 2 dígitos** - Quantidade de vermelho (00-FF)
- **Próximos 2 dígitos** - Quantidade de verde (00-FF)
- **Últimos 2 dígitos** - Quantidade de azul (00-FF)

### 🔍 Testando Alterações de Cor

#### **Processo Recomendado:**

1. **Faça backup** do arquivo `App.css` original
2. **Altere uma cor por vez** para ver o efeito
3. **Salve o arquivo** (Ctrl+S)
4. **Recarregue o navegador** (F5) para ver as mudanças
5. **Se não gostar**, desfaça a alteração (Ctrl+Z)

#### **Dica Importante:**

Sempre teste as cores em diferentes seções do site para garantir que ficaram harmoniosas. Uma cor que fica boa nos botões pode não ficar boa nos títulos.

### ⚠️ Cuidados com Acessibilidade

#### **Contraste de Cores:**

Certifique-se de que há contraste suficiente entre texto e fundo para facilitar a leitura:

- **Texto escuro em fundo claro** - Sempre funciona bem
- **Texto claro em fundo escuro** - Certifique-se de que o contraste é alto
- **Evite** combinações como texto amarelo em fundo branco

#### **Teste de Legibilidade:**

Após alterar as cores, verifique se:
- Os textos estão legíveis
- Os botões se destacam claramente
- As seções estão bem delimitadas visualmente

---


## 📝 Modificando Fontes e Tipografia

### 🎯 Sistema de Fontes do Site

O site utiliza fontes do sistema que são automaticamente selecionadas pelo navegador para garantir boa legibilidade e carregamento rápido. Você pode personalizar tanto o tipo de fonte quanto os tamanhos.

### 📍 Onde Estão Definidas as Fontes

As configurações de fonte estão espalhadas pelo arquivo `src/App.jsx` nas classes CSS dos elementos. Vamos aprender a identificar e modificar cada tipo de texto.

### 🔤 Tipos de Texto e Seus Tamanhos

#### **Tabela de Referência de Tamanhos:**

| Elemento | Classe CSS Atual | Tamanho Aproximado | Onde Aparece |
|----------|------------------|-------------------|--------------|
| Título Principal | `text-4xl md:text-6xl` | 36px / 60px | Hero section |
| Títulos de Seção | `text-3xl md:text-4xl` | 30px / 36px | "Sobre", "Serviços", etc. |
| Subtítulos | `text-xl md:text-2xl` | 20px / 24px | Subtítulos das seções |
| Texto Normal | `text-lg` | 18px | Parágrafos principais |
| Texto Pequeno | `text-sm` | 14px | Informações secundárias |

### 📏 Como Alterar Tamanhos de Fonte

#### **Sistema de Classes Tailwind:**

O site usa Tailwind CSS, que tem um sistema de classes predefinidas para tamanhos:

```
text-xs    = 12px
text-sm    = 14px
text-base  = 16px
text-lg    = 18px
text-xl    = 20px
text-2xl   = 24px
text-3xl   = 30px
text-4xl   = 36px
text-5xl   = 48px
text-6xl   = 60px
text-7xl   = 72px
text-8xl   = 96px
text-9xl   = 128px
```

#### **Exemplo Prático - Alterando o Título Principal:**

**Localização:** Procure por "Terapia Cognitivo-Comportamental" no arquivo `src/App.jsx`

**Código atual:**
```jsx
<h1 className="text-4xl md:text-6xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6 leading-tight">
```

**Para aumentar o tamanho:**
```jsx
<h1 className="text-5xl md:text-7xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6 leading-tight">
```

**Para diminuir o tamanho:**
```jsx
<h1 className="text-3xl md:text-5xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6 leading-tight">
```

### 🎨 Alterando Tipos de Fonte

#### **Método 1: Usando Fontes do Sistema**

Para alterar para fontes diferentes, você pode modificar o arquivo `src/App.css` adicionando uma nova regra:

```css
/* Adicione no final do arquivo App.css */
body {
  font-family: 'Georgia', 'Times New Roman', serif; /* Para uma fonte serifada */
}

/* OU */
body {
  font-family: 'Arial', 'Helvetica', sans-serif; /* Para uma fonte mais limpa */
}

/* OU */
body {
  font-family: 'Courier New', monospace; /* Para uma fonte monoespaçada */
}
```

#### **Método 2: Usando Google Fonts**

Para usar fontes do Google Fonts:

**Passo 1:** Adicione no arquivo `public/index.html`, dentro da tag `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**Passo 2:** Adicione no arquivo `src/App.css`:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

#### **Fontes Recomendadas para Sites Profissionais:**

**Para Psicólogos/Saúde:**
- **Roboto** - Moderna e legível
- **Open Sans** - Amigável e profissional
- **Lato** - Elegante e suave
- **Source Sans Pro** - Limpa e confiável

**Exemplo com Open Sans:**
```html
<!-- No index.html -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
```

```css
/* No App.css */
body {
  font-family: 'Open Sans', sans-serif;
}
```

### ⚖️ Modificando Pesos da Fonte (Negrito, Normal, etc.)

#### **Classes de Peso Disponíveis:**

```
font-thin       = 100
font-extralight = 200
font-light      = 300
font-normal     = 400
font-medium     = 500
font-semibold   = 600
font-bold       = 700
font-extrabold  = 800
font-black      = 900
```

#### **Exemplo - Alterando Títulos de Seção:**

**Localização:** Procure por títulos como "Dra. Ana Clara Mendes"

**Código atual:**
```jsx
<h2 className="text-3xl md:text-4xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
```

**Para deixar menos pesado:**
```jsx
<h2 className="text-3xl md:text-4xl font-semibold text-[var(--cognitiva-azul-petroleo)] mb-6">
```

**Para deixar mais pesado:**
```jsx
<h2 className="text-3xl md:text-4xl font-extrabold text-[var(--cognitiva-azul-petroleo)] mb-6">
```

### 📐 Ajustando Espaçamento Entre Linhas

#### **Classes de Line Height:**

```
leading-none     = line-height: 1
leading-tight    = line-height: 1.25
leading-snug     = line-height: 1.375
leading-normal   = line-height: 1.5
leading-relaxed  = line-height: 1.625
leading-loose    = line-height: 2
```

#### **Exemplo - Melhorando Legibilidade de Parágrafos:**

**Código atual:**
```jsx
<p className="text-lg text-gray-700 mb-8 leading-relaxed">
```

**Para espaçamento mais apertado:**
```jsx
<p className="text-lg text-gray-700 mb-8 leading-normal">
```

**Para espaçamento mais solto:**
```jsx
<p className="text-lg text-gray-700 mb-8 leading-loose">
```

### 🎯 Modificações Específicas por Seção

#### **1. Barra de Prova Ética (Topo)**

**Localização:** Procure por "Dra. Ana Clara Mendes • Psicóloga"

**Código atual:**
```jsx
<div className="bg-[var(--cognitiva-azul-petroleo)] text-white py-2 px-4 text-center text-sm">
```

**Para aumentar o texto:**
```jsx
<div className="bg-[var(--cognitiva-azul-petroleo)] text-white py-2 px-4 text-center text-base">
```

#### **2. Menu de Navegação**

**Localização:** Procure pelos botões "Home", "Sobre", etc.

**Código atual:**
```jsx
<button className="text-gray-700 hover:text-[var(--cognitiva-dourado)] transition-colors">
```

**Para texto maior no menu:**
```jsx
<button className="text-lg text-gray-700 hover:text-[var(--cognitiva-dourado)] transition-colors">
```

#### **3. Preços dos Serviços**

**Localização:** Procure por "R$ 180", "R$ 160", etc.

**Código atual:**
```jsx
<div className="text-3xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">
```

**Para preços maiores:**
```jsx
<div className="text-4xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">
```

**Para preços menores:**
```jsx
<div className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">
```

### 📱 Responsividade de Fontes

#### **Entendendo as Classes Responsivas:**

O site usa classes que mudam conforme o tamanho da tela:

- **Sem prefixo** - Aplica em telas pequenas (mobile)
- **md:** - Aplica em telas médias (tablet) e maiores
- **lg:** - Aplica em telas grandes (desktop) e maiores

**Exemplo:**
```jsx
className="text-lg md:text-xl lg:text-2xl"
```

Isso significa:
- Mobile: 18px
- Tablet: 20px  
- Desktop: 24px

#### **Ajustando para Melhor Legibilidade Mobile:**

Se o texto estiver muito pequeno no celular, aumente o tamanho base:

**Antes:**
```jsx
className="text-sm md:text-lg"
```

**Depois:**
```jsx
className="text-base md:text-lg"
```

### 🔧 Dicas Avançadas de Tipografia

#### **1. Criando Hierarquia Visual:**

Use tamanhos diferentes para criar uma hierarquia clara:

```jsx
/* Título principal */
className="text-4xl font-bold"

/* Subtítulo */
className="text-2xl font-semibold"

/* Texto normal */
className="text-lg font-normal"

/* Texto secundário */
className="text-sm font-light"
```

#### **2. Melhorando Legibilidade:**

Para textos longos, use:
```jsx
className="text-lg leading-relaxed"
```

Para títulos impactantes, use:
```jsx
className="text-4xl font-bold leading-tight"
```

#### **3. Testando em Diferentes Dispositivos:**

Sempre teste as alterações de fonte em:
- Celular (tela pequena)
- Tablet (tela média)
- Desktop (tela grande)

Use as ferramentas de desenvolvedor do navegador (F12) para simular diferentes tamanhos de tela.

---


## 🔘 Editando Botões e Elementos Interativos

### 🎯 Tipos de Botões no Site

O site possui diferentes tipos de botões, cada um com seu próprio estilo e função. Vamos aprender a identificar e personalizar cada tipo.

### 📍 Identificando os Botões

#### **Tabela de Referência dos Botões:**

| Tipo de Botão | Onde Aparece | Cor Atual | Função |
|---------------|--------------|-----------|---------|
| Botão Principal | "Agendar Consulta", "Agendar Sessão" | Dourado | Ações principais |
| Botão Secundário | "Voltar", "Continuar" | Cinza/Transparente | Navegação |
| Botão de Menu | "Home", "Sobre", "Serviços" | Transparente | Navegação |
| Botão de Envio | "Enviar Mensagem" | Dourado | Formulários |

### 🎨 Personalizando Botões Principais

#### **Localização dos Botões Principais:**

Procure por botões com a classe `bg-[var(--cognitiva-dourado)]` no arquivo `src/App.jsx`.

**Exemplo de código atual:**
```jsx
<Button 
  onClick={() => setShowScheduleModal(true)}
  className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-8 py-4 text-lg rounded-full"
>
  <Calendar className="mr-2" size={20} />
  Agendar Consulta
</Button>
```

#### **Modificando a Cor do Botão:**

**Método 1 - Alterando a variável CSS (recomendado):**

No arquivo `src/App.css`, altere:
```css
--cognitiva-dourado: #C9A66B; /* Cor atual */
```

Para:
```css
--cognitiva-dourado: #3B82F6; /* Azul moderno */
/* OU */
--cognitiva-dourado: #10B981; /* Verde elegante */
/* OU */
--cognitiva-dourado: #8B5CF6; /* Roxo sofisticado */
```

**Método 2 - Alterando diretamente no botão:**

Substitua `bg-[var(--cognitiva-dourado)]` por uma cor específica:
```jsx
className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
```

#### **Modificando o Tamanho dos Botões:**

**Classes de padding disponíveis:**
```
px-2 py-1  = Muito pequeno
px-4 py-2  = Pequeno
px-6 py-3  = Médio
px-8 py-4  = Grande (atual)
px-10 py-5 = Muito grande
```

**Exemplo - Botão menor:**
```jsx
className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-6 py-3 text-base rounded-full"
```

**Exemplo - Botão maior:**
```jsx
className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-10 py-5 text-xl rounded-full"
```

#### **Alterando o Formato dos Botões:**

**Formatos disponíveis:**
```
rounded-none   = Quadrado (sem bordas arredondadas)
rounded-sm     = Levemente arredondado
rounded        = Arredondado normal
rounded-lg     = Bem arredondado
rounded-full   = Totalmente arredondado (atual)
```

**Exemplo - Botão retangular:**
```jsx
className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-8 py-4 text-lg rounded-lg"
```

### 🔄 Personalizando Efeitos Hover

#### **Entendendo o Efeito Hover:**

O efeito hover é o que acontece quando você passa o mouse sobre o botão. Atualmente usa `/90` que significa 90% de opacidade.

**Código atual:**
```jsx
hover:bg-[var(--cognitiva-dourado)]/90
```

**Alternativas de hover:**

**Hover mais sutil:**
```jsx
hover:bg-[var(--cognitiva-dourado)]/95
```

**Hover mais dramático:**
```jsx
hover:bg-[var(--cognitiva-dourado)]/80
```

**Hover com cor diferente:**
```jsx
hover:bg-blue-700  /* Se o botão for azul */
```

**Hover com escala (botão cresce):**
```jsx
hover:bg-[var(--cognitiva-dourado)]/90 hover:scale-105 transition-transform
```

### 🎯 Modificando Botões Específicos

#### **1. Botão "Agendar Consulta" do Hero**

**Localização:** Procure pelo primeiro botão grande na página

**Código atual:**
```jsx
<Button 
  onClick={() => setShowScheduleModal(true)}
  className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-8 py-4 text-lg rounded-full"
>
  <Calendar className="mr-2" size={20} />
  Agendar Consulta
</Button>
```

**Para um estilo mais moderno:**
```jsx
<Button 
  onClick={() => setShowScheduleModal(true)}
  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all"
>
  <Calendar className="mr-2" size={24} />
  Agendar Consulta
</Button>
```

#### **2. Botões dos Serviços**

**Localização:** Procure por "Agendar Consulta", "Agendar Online", "Agendar Premium"

**Para diferenciar cada serviço:**

**Terapia Individual (Azul):**
```jsx
className="bg-blue-600 hover:bg-blue-700 text-white"
```

**Terapia Online (Verde):**
```jsx
className="bg-green-600 hover:bg-green-700 text-white"
```

**Sessão Premium (Roxo):**
```jsx
className="bg-purple-600 hover:bg-purple-700 text-white"
```

#### **3. Botão de Envio do Formulário**

**Localização:** Procure por "Enviar Mensagem"

**Para um estilo mais chamativo:**
```jsx
<Button
  type="submit"
  disabled={isLoading}
  className="w-full bg-gradient-to-r from-[var(--cognitiva-dourado)] to-yellow-600 hover:from-yellow-600 hover:to-[var(--cognitiva-dourado)] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
>
  {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
</Button>
```

### 🎨 Criando Estilos de Botão Personalizados

#### **Botão com Gradiente:**
```jsx
className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full"
```

#### **Botão com Borda:**
```jsx
className="border-2 border-[var(--cognitiva-dourado)] text-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)] hover:text-white px-8 py-4 rounded-full transition-colors"
```

#### **Botão com Sombra:**
```jsx
className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
```

#### **Botão Minimalista:**
```jsx
className="bg-transparent text-[var(--cognitiva-azul-petroleo)] hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors"
```

### 📱 Botões Responsivos

#### **Ajustando Tamanho por Dispositivo:**

**Para botões que ficam menores no mobile:**
```jsx
className="bg-[var(--cognitiva-dourado)] text-white px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg rounded-full"
```

**Para botões que ocupam toda a largura no mobile:**
```jsx
className="w-full md:w-auto bg-[var(--cognitiva-dourado)] text-white px-8 py-4 text-lg rounded-full"
```

### 🔧 Modificando Ícones dos Botões

#### **Alterando Tamanho dos Ícones:**

**Código atual:**
```jsx
<Calendar className="mr-2" size={20} />
```

**Para ícone maior:**
```jsx
<Calendar className="mr-2" size={24} />
```

**Para ícone menor:**
```jsx
<Calendar className="mr-2" size={16} />
```

#### **Removendo Ícones:**

Simplesmente delete a linha do ícone:
```jsx
{/* Remova esta linha */}
<Calendar className="mr-2" size={20} />
```

#### **Alterando Posição do Ícone:**

**Ícone à direita:**
```jsx
Agendar Consulta
<Calendar className="ml-2" size={20} />
```

### 🎯 Botões do Menu de Navegação

#### **Localização:** Procure pelos botões "Home", "Sobre", "O que é TCC", etc.

**Código atual:**
```jsx
<button 
  onClick={() => scrollToSection('sobre')} 
  className="text-gray-700 hover:text-[var(--cognitiva-dourado)] transition-colors"
>
  Sobre
</button>
```

#### **Personalizações do Menu:**

**Menu com fundo:**
```jsx
<button 
  onClick={() => scrollToSection('sobre')} 
  className="text-gray-700 hover:text-white hover:bg-[var(--cognitiva-dourado)] px-4 py-2 rounded-lg transition-all"
>
  Sobre
</button>
```

**Menu com sublinhado:**
```jsx
<button 
  onClick={() => scrollToSection('sobre')} 
  className="text-gray-700 hover:text-[var(--cognitiva-dourado)] border-b-2 border-transparent hover:border-[var(--cognitiva-dourado)] pb-1 transition-all"
>
  Sobre
</button>
```

### ⚡ Adicionando Animações aos Botões

#### **Animação de Pulsação:**
```jsx
className="bg-[var(--cognitiva-dourado)] text-white px-8 py-4 rounded-full animate-pulse"
```

#### **Animação de Bounce:**
```jsx
className="bg-[var(--cognitiva-dourado)] text-white px-8 py-4 rounded-full hover:animate-bounce"
```

#### **Transições Suaves:**
```jsx
className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-8 py-4 rounded-full transition-all duration-300 ease-in-out"
```

### 🔍 Testando Alterações de Botões

#### **Checklist de Teste:**

1. **Clique no botão** - Funciona corretamente?
2. **Passe o mouse** - O efeito hover está bom?
3. **Teste no mobile** - O botão não está muito pequeno/grande?
4. **Verifique contraste** - O texto está legível?
5. **Teste acessibilidade** - É possível navegar com Tab?

#### **Dicas de Boas Práticas:**

- **Mantenha consistência** - Use o mesmo estilo para botões similares
- **Tamanho adequado** - Botões muito pequenos são difíceis de clicar no mobile
- **Contraste suficiente** - Garanta que o texto seja legível
- **Feedback visual** - Sempre tenha um efeito hover ou active

---


## 🖼️ Alterando Imagens

### 📍 Localizando as Imagens do Site

Todas as imagens estão na pasta `src/assets/` e são importadas no arquivo `src/App.jsx`. Vamos aprender a substituir e personalizar cada uma.

### 📂 Imagens Atuais do Site

#### **Tabela de Referência das Imagens:**

| Nome do Arquivo | Onde Aparece | Tamanho Recomendado | Formato |
|-----------------|--------------|-------------------|---------|
| `logo-cognitiva.png` | Logo no header e footer | 200x80px | PNG |
| `hero-optimized.png` | Fundo da seção principal | 1920x1080px | PNG/JPG |
| `psicologa-profissional.jpg` | Foto da psicóloga | 400x400px | JPG |
| `tcc-equilibrio.png` | Seção "O que é TCC" | 600x400px | PNG/JPG |

### 🔄 Como Substituir Imagens

#### **Passo 1: Preparar a Nova Imagem**

1. **Redimensione** a imagem para o tamanho recomendado
2. **Otimize** o arquivo (use ferramentas como TinyPNG)
3. **Renomeie** com o mesmo nome do arquivo original OU use um nome novo

#### **Passo 2: Substituir o Arquivo**

**Método A - Mesmo Nome (Mais Fácil):**
1. Substitua o arquivo na pasta `src/assets/`
2. Mantenha o mesmo nome
3. A imagem será atualizada automaticamente

**Método B - Nome Diferente:**
1. Coloque a nova imagem na pasta `src/assets/`
2. Atualize a importação no `src/App.jsx`

### 🎯 Substituindo Imagens Específicas

#### **1. Logo da Empresa**

**Localização da importação:** No início do arquivo `src/App.jsx`
```jsx
import logoCognitiva from './assets/logo-cognitiva.png'
```

**Para usar uma nova logo:**

**Método A - Substituir arquivo:**
- Substitua `logo-cognitiva.png` na pasta `assets/` pela sua nova logo

**Método B - Novo arquivo:**
```jsx
import logoCognitiva from './assets/minha-nova-logo.png'
```

**Ajustando tamanho da logo:**

Procure por `className="h-10 w-auto"` no código e altere:
```jsx
<img src={logoCognitiva} alt="Equilíbrio Cognitivo" className="h-12 w-auto" />
```

Tamanhos disponíveis: `h-8`, `h-10`, `h-12`, `h-16`, `h-20`, etc.

#### **2. Imagem de Fundo do Hero**

**Localização da importação:**
```jsx
import heroBg from './assets/hero-optimized.png'
```

**Localização no código:** Procure por `backgroundImage`
```jsx
style={{
  backgroundImage: `url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}}
```

**Para substituir:**
1. Coloque sua nova imagem na pasta `assets/`
2. Atualize a importação:
```jsx
import heroBg from './assets/minha-imagem-hero.jpg'
```

**Dicas para imagem de fundo:**
- **Tamanho ideal:** 1920x1080px ou maior
- **Formato:** JPG para fotos, PNG para ilustrações
- **Qualidade:** Alta resolução mas otimizada para web

#### **3. Foto da Psicóloga**

**Localização da importação:**
```jsx
import psicologaProfissional from './assets/psicologa-profissional.jpg'
```

**Localização no código:** Procure por `psicologaProfissional`
```jsx
<img 
  src={psicologaProfissional} 
  alt="Dra. Ana Clara Mendes" 
  className="w-full h-auto rounded-lg shadow-lg"
  loading="lazy"
/>
```

**Para substituir:**
1. Substitua o arquivo `psicologa-profissional.jpg` OU
2. Use um novo arquivo e atualize a importação

**Ajustando o formato da foto:**

**Foto circular:**
```jsx
className="w-full h-auto rounded-full shadow-lg"
```

**Foto com bordas mais suaves:**
```jsx
className="w-full h-auto rounded-xl shadow-lg"
```

**Foto sem sombra:**
```jsx
className="w-full h-auto rounded-lg"
```

#### **4. Imagem da Seção TCC**

**Localização:**
```jsx
import tccEquilibrioImg from './assets/tcc-equilibrio.png'
```

**Para substituir:** Mesmo processo das outras imagens.

### 🎨 Personalizando Estilos das Imagens

#### **Adicionando Filtros às Imagens:**

**Filtro sépia (vintage):**
```jsx
className="w-full h-auto rounded-lg shadow-lg sepia"
```

**Filtro preto e branco:**
```jsx
className="w-full h-auto rounded-lg shadow-lg grayscale"
```

**Filtro com hover colorido:**
```jsx
className="w-full h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all"
```

#### **Alterando Sombras:**

**Sombra mais sutil:**
```jsx
className="w-full h-auto rounded-lg shadow-sm"
```

**Sombra mais dramática:**
```jsx
className="w-full h-auto rounded-lg shadow-2xl"
```

**Sem sombra:**
```jsx
className="w-full h-auto rounded-lg"
```

### 📐 Ajustando Tamanhos e Proporções

#### **Classes de Largura:**
```
w-1/4  = 25% da largura
w-1/3  = 33% da largura
w-1/2  = 50% da largura
w-2/3  = 66% da largura
w-3/4  = 75% da largura
w-full = 100% da largura
```

#### **Classes de Altura:**
```
h-32   = 128px
h-40   = 160px
h-48   = 192px
h-56   = 224px
h-64   = 256px
h-auto = Altura automática (mantém proporção)
```

#### **Exemplo - Imagem menor:**
```jsx
<img 
  src={psicologaProfissional} 
  alt="Dra. Ana Clara Mendes" 
  className="w-2/3 h-auto rounded-lg shadow-lg mx-auto"
/>
```

### 🔗 Modificando Links e Contatos

### 📞 Alterando Informações de Contato

#### **1. Número de Telefone/WhatsApp**

**Localização:** Procure por "(11) 99999-9999" no arquivo `src/App.jsx`

**Código atual:**
```jsx
<div className="text-gray-700">(11) 99999-9999</div>
```

**Para alterar:**
```jsx
<div className="text-gray-700">(11) 98765-4321</div>
```

**Link do WhatsApp:** Procure por `https://wa.me/5511999999999`
```jsx
<a
  href="https://wa.me/5511987654321"
  target="_blank"
  rel="noopener noreferrer"
>
```

#### **2. Email**

**Localização:** Procure por "contato@equilibriocognitivo.com.br"

**Para alterar:**
```jsx
<div className="text-gray-700">seuemail@dominio.com.br</div>
```

**Link do email:**
```jsx
<a href="mailto:seuemail@dominio.com.br">
```

#### **3. Endereço**

**Localização:** Procure por "Rua das Flores, 123"

**Código atual:**
```jsx
<div className="text-gray-700">
  Rua das Flores, 123 - Vila Madalena<br />São Paulo - SP
</div>
```

**Para alterar:**
```jsx
<div className="text-gray-700">
  Seu Endereço, 456 - Seu Bairro<br />Sua Cidade - UF
</div>
```

### 🌐 Modificando Links Externos

#### **Links de Redes Sociais (se houver):**

**Estrutura padrão:**
```jsx
<a
  href="https://instagram.com/seuperfil"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-[var(--cognitiva-dourado)] transition-colors"
>
  <Instagram size={24} />
</a>
```

#### **Adicionando Novos Links Sociais:**

**Instagram:**
```jsx
<a
  href="https://instagram.com/seuperfil"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-[var(--cognitiva-dourado)] transition-colors"
>
  <Instagram size={24} />
</a>
```

**LinkedIn:**
```jsx
<a
  href="https://linkedin.com/in/seuperfil"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-[var(--cognitiva-dourado)] transition-colors"
>
  <Linkedin size={24} />
</a>
```

### 🎯 Modificando o FAQ

#### **Arquivo:** `src/components/FAQ.jsx`

#### **Adicionando Nova Pergunta:**

Procure pelo array `faqData` e adicione:
```jsx
{
  question: "Sua nova pergunta aqui?",
  answer: "Sua resposta detalhada aqui. Pode ser um texto longo explicando o tópico."
}
```

#### **Removendo Pergunta:**

Simplesmente delete o objeto da pergunta que não deseja mais.

#### **Alterando Perguntas Existentes:**

Modifique o texto das propriedades `question` e `answer`.

### 📄 Modificando a Política de Privacidade

#### **Arquivo:** `src/components/PrivacyPolicy.jsx`

#### **Alterações Principais:**

**Nome da psicóloga:**
Procure por "Dra. Ana Clara Mendes" e substitua.

**Número do CRP:**
Procure por "CRP 06/123456" e substitua.

**Informações de contato:**
Atualize email, telefone e endereço conforme necessário.

### 🔧 Dicas de Otimização de Imagens

#### **Ferramentas Recomendadas:**

1. **TinyPNG** - Compressão online gratuita
2. **Squoosh** - Ferramenta do Google para otimização
3. **GIMP** - Editor gratuito para redimensionamento
4. **Canva** - Para criar imagens profissionais

#### **Formatos Recomendados:**

- **PNG** - Para logos, ícones, imagens com transparência
- **JPG** - Para fotos, imagens com muitas cores
- **WebP** - Formato moderno, menor tamanho (se suportado)

#### **Tamanhos Ideais:**

- **Logo:** 200x80px (máximo 50KB)
- **Hero background:** 1920x1080px (máximo 500KB)
- **Foto perfil:** 400x400px (máximo 100KB)
- **Imagens de conteúdo:** 600x400px (máximo 200KB)

### ⚠️ Cuidados Importantes

#### **Direitos Autorais:**
- Use apenas imagens que você tem direito de usar
- Prefira bancos de imagens gratuitos (Unsplash, Pexels)
- Evite imagens do Google sem verificar a licença

#### **Acessibilidade:**
- Sempre inclua texto alternativo (atributo `alt`)
- Use descrições claras e objetivas
- Considere usuários com deficiência visual

#### **Performance:**
- Otimize todas as imagens antes de usar
- Mantenha arquivos pequenos para carregamento rápido
- Use lazy loading quando disponível

---


## 🔒 Dicas de Segurança

### 💾 Sempre Faça Backup

#### **Antes de Qualquer Alteração:**

1. **Copie a pasta completa** do projeto para um local seguro
2. **Renomeie** a cópia com data: `equilibrio-cognitivo-backup-15-08-2025`
3. **Mantenha múltiplos backups** de diferentes datas

#### **Backup Específico de Arquivos:**

Antes de editar arquivos importantes, faça cópia individual:
- `App.jsx` → `App.jsx.backup`
- `App.css` → `App.css.backup`
- `FAQ.jsx` → `FAQ.jsx.backup`

### 🔄 Testando Alterações

#### **Processo Seguro de Edição:**

1. **Faça backup** do arquivo
2. **Faça uma pequena alteração** por vez
3. **Salve o arquivo** (Ctrl+S)
4. **Teste no navegador** imediatamente
5. **Se der erro**, desfaça (Ctrl+Z) ou restaure o backup

#### **Comandos para Testar:**

```bash
# No terminal, dentro da pasta do projeto
npm run dev
```

Se aparecer erro, **pare o servidor** (Ctrl+C) e corrija o problema.

### ⚠️ Erros Comuns e Como Evitar

#### **1. Aspas Não Fechadas**

**Erro:**
```jsx
<div className="text-lg>Texto</div>
```

**Correto:**
```jsx
<div className="text-lg">Texto</div>
```

#### **2. Tags HTML Não Fechadas**

**Erro:**
```jsx
<div>
  <p>Texto
</div>
```

**Correto:**
```jsx
<div>
  <p>Texto</p>
</div>
```

#### **3. Vírgulas Esquecidas**

**Erro:**
```jsx
{
  question: "Pergunta?"
  answer: "Resposta"
}
```

**Correto:**
```jsx
{
  question: "Pergunta?",
  answer: "Resposta"
}
```

### 🛡️ Proteção de Arquivos Importantes

#### **Arquivos que NÃO devem ser alterados:**

- `package.json`
- `vite.config.js`
- Arquivos na pasta `node_modules/`
- Arquivos na pasta `.git/` (se existir)

#### **Arquivos Seguros para Editar:**

- `src/App.jsx` ✅
- `src/App.css` ✅
- `src/components/FAQ.jsx` ✅
- `src/components/PrivacyPolicy.jsx` ✅
- `public/index.html` ✅
- Imagens na pasta `src/assets/` ✅

---

## 🔧 Solução de Problemas

### 🚨 Site Não Carrega

#### **Problema:** Tela branca ou erro no navegador

**Soluções:**

1. **Verifique o terminal** - Há mensagens de erro?
2. **Abra as ferramentas de desenvolvedor** (F12) - Há erros no console?
3. **Restaure o último backup** que funcionava
4. **Reinicie o servidor:**
   ```bash
   # Pare o servidor (Ctrl+C)
   # Inicie novamente
   npm run dev
   ```

### ❌ Erro de Sintaxe

#### **Sintomas:** 
- Mensagem de erro no terminal
- Site não compila

**Como Resolver:**

1. **Leia a mensagem de erro** - ela indica o arquivo e linha
2. **Vá até a linha indicada** no arquivo
3. **Procure por:**
   - Aspas não fechadas
   - Parênteses não fechados
   - Vírgulas esquecidas
   - Tags HTML mal formadas

#### **Exemplo de Erro Comum:**

**Mensagem:** `Unexpected token, expected ","` na linha 45

**Significa:** Falta uma vírgula na linha 45

### 🎨 Cores Não Aparecem

#### **Problema:** Alterou a cor no CSS mas não mudou no site

**Soluções:**

1. **Limpe o cache do navegador** (Ctrl+F5)
2. **Verifique se salvou o arquivo** App.css
3. **Confirme se usou o código hex correto** (ex: #FF0000)
4. **Verifique se a variável CSS está correta:**
   ```css
   /* Correto */
   --cognitiva-dourado: #C9A66B;
   
   /* Errado */
   --cognitiva-dourado #C9A66B;  /* Falta os dois pontos */
   ```

### 🖼️ Imagens Não Aparecem

#### **Possíveis Causas:**

1. **Arquivo não existe** na pasta `src/assets/`
2. **Nome do arquivo está errado** na importação
3. **Formato não suportado** (use PNG, JPG, WebP)
4. **Caminho incorreto** na importação

#### **Como Verificar:**

1. **Confirme que a imagem está** em `src/assets/`
2. **Verifique a importação:**
   ```jsx
   import minhaImagem from './assets/nome-correto.jpg'
   ```
3. **Certifique-se de usar a variável:**
   ```jsx
   <img src={minhaImagem} alt="Descrição" />
   ```

### 📱 Site Não Responsivo

#### **Problema:** Site não se adapta ao celular

**Verificações:**

1. **Classes responsivas estão corretas?**
   ```jsx
   className="text-lg md:text-xl"  /* Correto */
   className="text-lg text-xl"     /* Errado - falta md: */
   ```

2. **Meta tag viewport está presente?** (no `index.html`)
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

### 🔄 Alterações Não Aparecem

#### **Soluções:**

1. **Recarregue com cache limpo** (Ctrl+Shift+R)
2. **Feche e abra o navegador**
3. **Reinicie o servidor de desenvolvimento**
4. **Verifique se salvou todos os arquivos**

### 📞 Formulário Não Funciona

#### **Problema:** Botão "Enviar Mensagem" não funciona

**Nota:** O formulário precisa do backend configurado. Para teste, você pode:

1. **Verificar se o botão está correto:**
   ```jsx
   <Button type="submit" onClick={handleSubmit}>
   ```

2. **Temporariamente, adicionar um alert:**
   ```jsx
   onClick={() => alert('Formulário enviado!')}
   ```

### 🆘 Quando Pedir Ajuda

#### **Situações que Requerem Suporte Técnico:**

- Erros relacionados ao backend (API)
- Problemas de deploy/publicação
- Configuração de domínio
- Integração com Google Calendar
- Problemas de performance severos

#### **Informações para Fornecer ao Suporte:**

1. **Descrição detalhada** do problema
2. **Mensagem de erro completa** (se houver)
3. **Passos que levaram ao erro**
4. **Screenshots** da tela de erro
5. **Arquivos que foram modificados**

---

## 📚 Recursos Adicionais

### 🎓 Aprendendo Mais

#### **Documentação Oficial:**
- **React:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/

#### **Tutoriais Recomendados:**
- **HTML/CSS Básico:** W3Schools, MDN Web Docs
- **Cores e Design:** Adobe Color, Coolors.co
- **Imagens Gratuitas:** Unsplash, Pexels, Pixabay

### 🛠️ Ferramentas Úteis

#### **Editores de Código:**
- **Visual Studio Code** (recomendado)
- **Sublime Text**
- **Atom**

#### **Extensões Úteis para VS Code:**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **Prettier** (formatação automática)
- **ES7+ React/Redux/React-Native snippets**

#### **Ferramentas de Design:**
- **Figma** (design de interfaces)
- **Canva** (criação de imagens)
- **GIMP** (edição de imagens gratuita)
- **Adobe Photoshop** (edição profissional)

### 📋 Checklist de Manutenção

#### **Verificações Mensais:**

- [ ] Backup dos arquivos atualizados
- [ ] Teste do site em diferentes dispositivos
- [ ] Verificação de links quebrados
- [ ] Atualização de informações de contato
- [ ] Revisão do conteúdo do FAQ

#### **Verificações Anuais:**

- [ ] Renovação de domínio (se aplicável)
- [ ] Atualização da Política de Privacidade
- [ ] Revisão completa do conteúdo
- [ ] Otimização de imagens
- [ ] Backup completo do projeto

---

## 🎯 Conclusão

Este guia fornece todas as informações necessárias para editar e personalizar seu site de forma autônoma. Lembre-se sempre de:

1. **Fazer backup** antes de qualquer alteração
2. **Testar** cada modificação imediatamente
3. **Fazer alterações pequenas** e incrementais
4. **Manter consistência** visual e de conteúdo
5. **Pedir ajuda** quando necessário

Com essas informações, você tem total controle sobre o visual e conteúdo do seu site, podendo adaptá-lo conforme suas necessidades evoluem.

**Boa sorte com suas personalizações! 🚀**

---

**Guia criado por:** Manus AI  
**Data:** 15 de agosto de 2025  
**Versão:** 1.0  
**Para dúvidas:** Consulte a seção "Solução de Problemas" ou entre em contato com o suporte técnico.

