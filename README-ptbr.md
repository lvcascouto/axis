<div align="center">

<img src="public/assets/favicon/favicon.svg" width="130" height="130" alt="AXIS logo"/>

# AXIS

**Uma fundação Front-End modular construída com Vite, Sass e JavaScript para estruturar e escalar projetos web**

_Estruture primeiro. Defina a identidade. Code com mais velocidade._

[![Versão](https://img.shields.io/badge/versão-3.0.0-e8e4de?style=flat-square&labelColor=10b981&color=1c1b2e)](https://github.com/lvcascouto/axis/releases)&nbsp;
[![Template](https://img.shields.io/badge/template-ready-e8e4de?style=flat-square&labelColor=3437e6&color=1c1b2e)](https://github.com/lvcascouto/axis/generate)&nbsp;
[![Licença](https://img.shields.io/badge/licença-MIT-e8e4de?style=flat-square&labelColor=ef4444&color=1c1b2e)](https://github.com/lvcascouto/axis/blob/main/LICENSE)

🇺🇸 [Read in English](./README.md)

</div>

## O que é o AXIS?

AXIS é uma fundação Front-End modular baseada em **Vite, Sass e JavaScript**, criada para oferecer um ponto de partida arquitetural limpo para novos projetos web, sem impor identidade visual ou framework de UI específico.

O AXIS **não é um framework**. É uma base estruturada que ajuda a sair mais rapidamente da configuração para a implementação, mantendo o projeto organizado, escalável e simples de evoluir.

A versão 3.0 amplia a arquitetura Sass original de cinco para seis camadas, introduz uma estratégia de tokens mais sistemática, adiciona isolamento de estilos por página, injeção de parciais HTML, configuração do Vite preparada para múltiplas páginas e um workflow baseado em Yarn.

## Recursos

- Arquitetura Sass em 6 camadas inspirada em ITCSS
- Workflow de design tokens primitivos + semânticos
- Escalas unificadas de espaçamento e tipografia
- Sistema responsivo com sintaxe moderna de comparação CSS
- Camada dedicada para estilos específicos de páginas e rotas
- Seções globais reutilizáveis para header e footer
- Injeção de parciais HTML com `vite-plugin-html-inject`
- Configuração do Vite preparada para múltiplas páginas
- Estrutura nativa baseada em ES Modules
- Componentes neutros e orientados por tokens
- Utilitários responsivos de Flex e Grid
- Base com foco em acessibilidade e preferências de movimento
- Template inicial com SEO, Open Graph e PWA
- Pipeline de build para produção via Vite
- Gerenciamento de dependências com Yarn e lockfile versionado
- Estrutura preparada para motion com keyframes e tokens de animação
- Fundação totalmente personalizável

## Filosofia

O AXIS parte de um princípio simples:

> **Fundações Front-End devem acelerar o desenvolvimento, não ditar o design.**

O sistema prioriza:

- **estrutura em vez de UI opinativa**
- **organização em vez de excesso de abstrações**
- **flexibilidade em vez de sistemas rígidos**

Cada camada tem uma responsabilidade clara. Cada arquivo deve tornar o projeto mais fácil de entender, estender e manter.

## Convenções

O AXIS segue algumas convenções para manter a fundação previsível, consistente e fácil de evoluir.

- **Comentários estruturados:** blocos de código utilizam a convenção visual `// ==` para identificar seções e responsabilidades.
- **Unidades relativas:** os valores dimensionais da fundação são expressos em `rem`, utilizando a função `rem()` quando necessário.
- **Tokens antes de valores:** componentes e seções devem priorizar tokens existentes em vez de valores hardcoded.
- **Tokens semânticos:** valores primitivos devem ser associados a papéis semânticos quando representam uma intenção específica do projeto.
- **Responsabilidade isolada:** estilos específicos de páginas pertencem a `pages/`, enquanto blocos reutilizáveis pertencem a `components/` ou `sections/`.
- **Fundação neutra:** o AXIS fornece estrutura, não uma identidade visual pronta. A linguagem visual é definida pelo projeto consumidor.

## Arquitetura em Resumo

| Camada        | Responsabilidade                                                  |
| ------------- | ----------------------------------------------------------------- |
| `abstracts/`  | Tokens, funções e mixins. Não gera CSS por si só.                 |
| `base/`       | Reset, tipografia, estilos globais, keyframes e utilities.        |
| `layout/`     | Sistemas estruturais como containers, Flex e Grid.                |
| `components/` | Componentes de UI reutilizáveis e neutros, orientados por tokens. |
| `sections/`   | Seções globais e reutilizáveis, como header e footer.             |
| `pages/`      | Estilos isolados de páginas ou rotas específicas.                 |

A ordem do Sass é:

```text
Abstracts → Base → Layout → Components → Sections → Pages
```

## Stack

| Tecnologia              | Uso                                                       |
| ----------------------- | --------------------------------------------------------- |
| Vite                    | Servidor de desenvolvimento, HMR e pipeline de build      |
| Sass (SCSS)             | Arquitetura modular de estilos e sistema de design tokens |
| JavaScript              | ES Modules nativos e lógica de frontend                   |
| HTML5                   | Template semântico com SEO, Open Graph e metadados PWA    |
| Yarn                    | Instalação de dependências e setup reprodutível           |
| vite-plugin-html-inject | Injeção de parciais HTML via `<load>`                     |

## Estrutura do Projeto

```text
axis/
├── public/
│   ├── assets/
│   │   ├── docs/                → Documentos para download
│   │   ├── favicon/             → Ícones SVG/PNG e app icons
│   │   ├── media/
│   │   │   ├── img/             → Imagens raster
│   │   │   └── video/           → Vídeos
│   │   └── svg/                 → Vetores, ícones e ilustrações
│   ├── favicon.ico              → Favicon legacy/raiz
│   ├── manifest.json            → Configuração PWA
│   └── README-manifest.md       → Documentação e guia de configuração do PWA
├── src/
│   ├── html/
│   │   ├── header.html          → Fragmento reutilizável de header
│   │   └── footer.html          → Fragmento reutilizável de footer
│   ├── js/
│   │   ├── base/                → Scripts globais e helpers
│   │   ├── components/          → Módulos JS específicos de componentes
│   │   ├── vendor/              → Integrações com bibliotecas externas
│   │   └── script.js            → Entry point principal de JS + Sass
│   └── sass/
│       ├── abstracts/
│       │   ├── tokens/           → Tokens primitivos e semânticos
│       │   ├── functions/        → Funções utilitárias e acesso a tokens
│       │   └── mixins/           → Mixins de layout, responsividade e a11y
│       ├── base/                → Reset, global, tipografia, keyframes e utilities
│       ├── layout/              → Sistemas de container, Flex e Grid
│       ├── components/          → Componentes de UI neutros e reutilizáveis
│       ├── sections/            → Seções globais e reutilizáveis
│       ├── pages/               → Estilos específicos de páginas/rotas
│       └── main.scss            → Entry point principal do Sass
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── index.html
├── LICENSE
├── package.json
├── README.md
├── README-ptbr.md
├── vite.config.js
└── yarn.lock
```

## Arquitetura Sass

O AXIS organiza o Sass em **seis camadas** com responsabilidades claras, seguindo os princípios do ITCSS:

### 1. Abstracts

A fundação do sistema. Nada aqui gera CSS diretamente.

- `tokens/` — escalas primitivas e áreas para tokens semânticos do projeto
- `functions/` — acesso validado a breakpoints e camadas de z-index, helpers de cor e função `rem()`
- `mixins/` — helpers reutilizáveis de layout, responsividade, acessibilidade e texto

### 2. Base

Normalização global e defaults para elementos.

- `_reset.scss` — box-sizing, reset de margin/padding e normalização de estilos base
- `_global.scss` — foco, reduced motion, defaults de documento/mídia e herança de fonte em formulários
- `_typography.scss` — consome os tokens semânticos de tipografia e os aplica aos elementos HTML
- `_keyframes.scss` — keyframes compartilhados como `fade-in`, `slide-up` e `spin`
- `_utilities.scss` — helpers estruturais de display, visibilidade, posição, alinhamento, interação e truncamento

### 3. Layout

Sistemas estruturais sem identidade visual embutida.

- `_container.scss` — `.container` e suas variantes
- `_flex.scss` — utilitários de alinhamento e direção
- `_grid.scss` — grids fixos, automáticos e responsivos

### 4. Components

Componentes de UI neutros e orientados por tokens.

- `_button.scss` — tamanhos, shapes, variantes e estado disabled
- `_card.scss` — estrutura de cards estáticos/interativos e modificadores de alinhamento
- `_badge.scss` — badge inline em formato pill

Os componentes utilizam variáveis semânticas locais baseadas nos primitivos do AXIS, mantendo a personalização visual fora da fundação.

### 5. Sections

Seções globais e reutilizáveis que pertencem ao shell do site, não a uma rota específica.

- `_header.scss`
- `_footer.scss`

O boilerplate mantém essas partials livres de conteúdo hardcoded do projeto.

### 6. Pages

Estilos específicos de páginas e rotas que não devem poluir componentes ou seções globais.

- `_home.scss`
- `_error.scss`
- `_index.scss`

Use essa camada para regras exclusivas de uma página/rota.

## Sistema de Design Tokens

O AXIS V3 separa **valores primitivos** de **intenção semântica**. Os tokens primitivos definem escalas reutilizáveis; os tokens semânticos descrevem como esses valores são usados dentro do projeto.

### Arquivos de tokens

| Token               | O que define                                                          |
| ------------------- | --------------------------------------------------------------------- |
| `_colors.scss`      | Escala de cinzas, cores funcionais e área para tokens semânticos      |
| `_spacing.scss`     | Escala unificada de espaçamento, do micro UI ao layout                |
| `_typography.scss`  | Tamanhos, pesos, line-heights, letter-spacing e semântica tipográfica |
| `_breakpoints.scss` | Limites de viewport do sistema desktop-first                          |
| `_container.scss`   | Larguras máximas nomeadas para layout                                 |
| `_motion.scss`      | Durações e curvas de easing                                           |
| `_elevation.scss`   | Hierarquia de sombras                                                 |
| `_layers.scss`      | Mapa semântico de z-index                                             |
| `_radius.scss`      | Escala de border-radius                                               |
| `_opacity.scss`     | Escala de transparência                                               |

### Espaçamento

O sistema usa uma escala unificada, combinando subdivisões de **2px e 4px para micro UI** com **âncoras maiores baseadas em 8px para layout**, tudo expresso em `rem`.

```scss
$space-0: 0;
$space-2: 0.125rem; // 2px
$space-4: 0.25rem; // 4px
$space-6: 0.375rem; // 6px
$space-8: 0.5rem; // 8px
$space-10: 0.625rem; // 10px
$space-12: 0.75rem; // 12px
$space-14: 0.875rem; // 14px
$space-16: 1rem; // 16px
$space-20: 1.25rem; // 20px
$space-24: 1.5rem; // 24px
$space-28: 1.75rem; // 28px
$space-32: 2rem; // 32px
$space-36: 2.25rem; // 36px
$space-40: 2.5rem; // 40px
$space-48: 3rem; // 48px
$space-56: 3.5rem; // 56px
$space-64: 4rem; // 64px
$space-80: 5rem; // 80px
$space-96: 6rem; // 96px
$space-128: 8rem; // 128px
```

Tokens semânticos de layout como `$gutter`, `$row-gap` e `$section-pad` derivam dessa escala.

### Tipografia

No V3, a escala tipográfica deixa de depender da proporção Major Third. O sistema passa a usar uma escala em degraus mais controlada para facilitar decisões de UI e layout, com tokens dedicados para:

- tamanho
- peso
- line-height
- letter-spacing
- semântica de base e headings

Exemplo de nomenclatura de pesos:

```scss
$weight-regular: 400;
$weight-medium: 500;
$weight-semi-bold: 600;
$weight-bold: 700;
$weight-extra-bold: 800;
```

### Breakpoints

O V3 amplia o sistema desktop-first:

```text
3xs  376px
xxs  480px
xs   576px
sm   640px
md   768px
lg   1024px
xl   1280px
xxl  1400px
3xl  1536px
4xl  1920px
```

Os valores são armazenados como `rem` no mapa de tokens.

### Containers

As larguras de container agora ficam em uma partial própria, separadas da escala de spacing:

```text
sm   576px
md   768px
lg   1024px
xl   1280px
xxl  1400px
3xl  1536px
```

O `.container` padrão utiliza o token `xxl`, resultando em uma largura máxima de **1400px**.

### Motion, Radius e Opacity

O V3 amplia as escalas usadas em componentes e interações:

- **Motion:** `100`, `200`, `300`, `400`, `500`, `600`, `800`, `1000`
- **Radius:** `none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full`
- **Opacity:** `0`, `5`, `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, `100`

Os tokens `2xl` e `3xl` de radius representam 24px e 32px para superfícies maiores.

## Camada de Tokens Semânticos

As partials de tokens aplicáveis agora possuem uma área dedicada para aliases semânticos do projeto, evitando redefinições repetidas nos arquivos de componentes e seções.

Conceitualmente:

```scss
// Primitivo
$blue-500: #3437e6;

// Semântico
$color-primary: $blue-500;
```

Assim, o projeto pode trabalhar com papéis como `primary`, `surface`, `text`, `border` ou `focus` em vez de remapear o mesmo valor primitivo em vários arquivos.

Partials de mapeamento, como breakpoints, containers e layers, permanecem focadas nos seus mapas e não precisam dessa camada semântica.

## Sistema Responsivo

Os mixins responsivos agora utilizam a sintaxe moderna de comparação de largura:

```scss
@include mix.respond(md) {
  // width < md
}

@include mix.respond-up(md) {
  // width >= md
}
```

Isso substitui a construção anterior com `max-width` / `min-width` explícitos e deixa a API mais alinhada ao comportamento esperado.

## Acessibilidade & Motion

O AXIS inclui recursos estruturais para facilitar a construção de interfaces acessíveis e respeitar preferências de movimento:

- indicadores de foco com `:focus-visible`
- utilitário `visually-hidden`
- suporte a `prefers-reduced-motion`
- herança de tipografia e cor em elementos de formulário
- estrutura HTML semântica como base do template

O AXIS fornece a fundação técnica; a implementação final de acessibilidade continua sendo responsabilidade do projeto consumidor.

## Funções e Mixins

### Funções

O núcleo inclui:

- `bp($size)` — acesso validado ao mapa de breakpoints
- `z($layer)` — acesso validado ao mapa de z-index
- `rem($pixel)` — converte valores unitless de pixel para `rem`
- `color-dark($color, $amount)` — reduz a luminosidade de uma cor
- `color-light($color, $amount)` — aumenta a luminosidade de uma cor

### Mixins

Os principais mixins são:

- `container()`
- `flex()`
- `grid()`
- `grid-auto()`
- `respond()`
- `respond-up()`
- `absolute-center`
- `visually-hidden`
- `focus-ring()`
- `truncate()`

## Componentes

### Button

```html
<button class="button size-sm">Small</button>
<button class="button size-md is-pill">Medium</button>
<button class="button size-lg is-ghost">Large</button>
<button class="button size-xl" disabled>Disabled</button>
```

Principais modifiers demonstrados no boilerplate: `size-sm`, `size-md`, `size-lg`, `size-xl`, `is-pill` e `is-ghost`.

### Card

```html
<div class="card is-interactive">
  <div class="card__content is-center">
    <h4>Title</h4>
    <p>Card content.</p>
  </div>
</div>
```

Exemplos de modifiers e estados: `is-interactive` e `is-center`.

### Badge

```html
<span class="badge">Default</span>
```

Os componentes são deliberadamente neutros. O AXIS fornece a estrutura; o projeto consumidor define a linguagem visual.

## Sistema de Layout

### Container

```html
<div class="container">
  <!-- max-width: 1400px (padrão) -->
  <div class="container-sm"><!-- max-width: 576px --></div>
  <div class="container-md"><!-- max-width: 768px --></div>
  <div class="container-lg"><!-- max-width: 1024px --></div>
  <div class="container-xl"><!-- max-width: 1280px --></div>
  <div class="container-xxl"><!-- max-width: 1400px --></div>
  <div class="container-3xl"><!-- max-width: 1536px --></div>
</div>
```

### Flex

```html
<div class="flex items-center justify-between">
  <div class="flex flex-col items-start">
    <div class="flex flex-wrap justify-center"></div>
  </div>
</div>
```

Modificadores disponíveis: `flex-col`, `flex-wrap`, `justify-start`, `justify-center`, `justify-between`, `justify-end`, `items-stretch`, `items-center`, `items-start`, `items-end`, `items-baseline`.

### Grid

```html
<div class="grid-3">
  <!-- 3 colunas fixas -->
</div>

<div class="grid-3 grid-1-md">
  <!-- 3 colunas → 1 coluna em md -->
</div>

<div class="grid-auto">
  <!-- colunas responsivas automáticas -->
  <div class="col-span-2"><!-- item ocupa 2 colunas --></div>
</div>
```

> As variantes responsivas `.grid-{n}-{bp}` sobrescrevem apenas `grid-template-columns`. A classe base `.grid-{n}` deve estar sempre presente no elemento.

## Parciais HTML e suporte a múltiplas páginas

O AXIS V3 adiciona `src/html/` para fragmentos de marcação reutilizáveis:

```html
<load src="src/html/header.html" />

<main></main>

<load src="src/html/footer.html" />
```

A configuração do Vite usa `vite-plugin-html-inject` para processar essas parciais.

O `vite.config.js` também expõe os entry points do Rollup por meio de `rollupOptions.input`, deixando a fundação preparada para crescer para múltiplas páginas sem trocar a arquitetura de build.

## Estrutura JavaScript

`src/js/script.js` continua sendo o entry point principal. Ele importa a arquitetura Sass e mantém pontos claros para registrar:

```text
src/js/
├── base/        → scripts globais e helpers
├── components/  → lógica isolada de UI
└── vendor/      → integrações de terceiros
```

Na V3, a documentação interna foi simplificada e as responsabilidades dos diretórios passam a ser explicadas diretamente nos comentários do código, reduzindo a necessidade de READMEs secundários espalhados pelas subpastas.

## Como usar o AXIS?

### 1. Crie seu repositório a partir do Template

O AXIS é um repositório modelo. No GitHub, clique no botão verde **Use this template → Create a new repository** para gerar um novo projeto limpo. Em seguida, clone o seu novo repositório:

```bash
git clone https://github.com/YOUR-USERNAME/your-project-name.git
cd your-project-name
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Inicie o servidor de desenvolvimento

```bash
yarn dev
```

O Vite inicia o servidor local com HMR. Alterações em `.scss`, `.js` e nas parciais HTML acompanham o fluxo de desenvolvimento.

### 4. Gere o build de produção

```bash
yarn build
```

O Vite compila o Sass, empacota os módulos e gera os arquivos otimizados de produção na pasta `dist/`.

### 5. Visualize o build de produção

```bash
yarn preview
```

## Iniciando um Novo Projeto com AXIS

Um fluxo recomendado:

1. **Atualize a identidade do projeto**
   - `package.json`
   - `index.html`
   - `public/manifest.json`
   - favicon e assets de compartilhamento social

2. **Configure os tokens primitivos**
   - cores
   - tipografia
   - espaçamento
   - radius
   - motion
   - opacity
   - elevation
   - breakpoints e containers

3. **Defina os tokens semânticos**
   - crie aliases como `primary`, `surface`, `text`, `border`, `focus` ou papéis de motion quando fizer sentido

4. **Configure a estrutura global**
   - header/footer em `src/html/` e `src/sass/sections/`
   - padrões reutilizáveis em `src/sass/components/`
   - estilos específicos em `src/sass/pages/`

5. **Construa a interface**
   - use os utilitários de layout do AXIS como base estrutural
   - mantenha regras de páginas e componentes isoladas
   - adicione JavaScript apenas onde a interação realmente exigir

6. **Valide o build de produção**

```bash
yarn build
```

## Workflow de Produção

O pipeline de produção é responsabilidade do Vite. Ao executar `yarn build`, o projeto processa Sass e JavaScript, resolve assets e gera a pasta `dist/` pronta para deploy.

Quando o tamanho final do CSS for crítico, a remoção de estilos não utilizados pode ser tratada como uma etapa de otimização específica do projeto consumidor.

## Versionamento

O AXIS segue versionamento semântico:

- `MAJOR` — mudanças incompatíveis de arquitetura ou API
- `MINOR` — novos recursos compatíveis
- `PATCH` — correções e ajustes compatíveis

Consulte o [CHANGELOG](./CHANGELOG.md) para acompanhar as alterações entre versões.

## Contribuição

Contribuições são bem-vindas. Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para saber como abrir issues e propor melhorias.

Se o AXIS ajudou você ou acelerou o seu projeto, considere apoiar seu desenvolvimento:

☕ [Buy Me a Coffee](https://buymeacoffee.com/lucascode)

## Licença

MIT License — © 2026 Lucas Couto

Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

<br>
<br>
<br>

<div align="center">

`</>`

**AXIS // Front-End Foundation**

Desenvolvido por [**ʟᴜᴄᴀꜱ ᴄᴏᴜᴛᴏ**](https://github.com/lvcascouto)

</div>
