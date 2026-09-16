# Especificação de réplica visual — landing page Gilmara

## 1. Objetivo e escopo

Reproduzir com alta fidelidade a **homepage** de referência [psicologoericmoreira.com.br](https://www.psicologoericmoreira.com.br/), usando como segunda fonte a captura local [`Inspirações/modelo.png`](../Inspirações/modelo.png).

A réplica deve manter:

- composição, ordem das seções e hierarquia visual;
- dimensões, espaçamentos, grid, cores, tipografia, bordas, sombras e gradientes;
- comportamento responsivo, estados de hover/foco e animações de entrada;
- versão desktop e mobile da navegação;
- densidade visual e proporções dos ativos.

A réplica **não deve reutilizar** nome, fotografia, logotipo, CRP, telefone, avaliações, textos autorais nem links do profissional de referência. Esses dados devem ser substituídos pelos dados de Gilmara. Nesta especificação, informações ainda não fornecidas aparecem como `{{PLACEHOLDER}}`.

### Fontes da auditoria

- URL auditada em 14/09/2026: `https://www.psicologoericmoreira.com.br/`
- captura local: `Inspirações/modelo.png`, 1280 × 7639 px;
- estilos computados e DOM da página viva;
- viewports verificados: 390 × 844, 768 × 900, 1024 × 900, 1280 × 720 e 1440 × 900 CSS px.

> Escopo deste documento: página inicial apontada pelo link e reproduzida na captura local. Blog, páginas internas, login e outros destinos do menu não fazem parte desta spec.

## 2. Identidade visual

### 2.1 Paleta exata

| Token | HSL original | HEX / RGB calculado | Aplicação |
|---|---:|---:|---|
| `background` | `237 35% 99%` | `#FCFCFD` / `rgb(252,252,253)` | fundo geral e botões claros |
| `foreground` / `deep-black` | `215 35% 11%` | `#121A26` / `rgb(18,26,38)` | títulos e texto principal |
| `primary` / `petrol-blue` | `212 28% 22%` | `#283748` / `rgb(40,55,72)` | seção escura, botões, footer |
| `accent` / `soft-gold` | `43 18% 62%` | `#B0A68D` / `rgb(176,166,141)` | dourado, destaques e gradientes |
| `muted` | `220 13% 95%` | `#F1F2F4` / `rgb(241,242,244)` | fundos suaves |
| `muted-foreground` | `180 3% 54%` | `#868D8D` / `rgb(134,141,141)` | parágrafos e metadados |
| `border` / `input` | `220 13% 91%` | `#E5E7EB` / `rgb(229,231,235)` | bordas de cards e inputs |
| `card` | `0 0% 100%` | `#FFFFFF` | cards e CTA claro |
| `whatsapp` | — | `#25D366` | botão flutuante oficial |

Tokens CSS obrigatórios:

```css
:root {
  --background: 237 35% 99%;
  --foreground: 215 35% 11%;
  --card: 0 0% 100%;
  --card-foreground: 215 35% 11%;
  --primary: 212 28% 22%;
  --primary-foreground: 237 35% 99%;
  --secondary: 180 3% 54%;
  --secondary-foreground: 237 35% 99%;
  --muted: 220 13% 95%;
  --muted-foreground: 180 3% 54%;
  --accent: 43 18% 62%;
  --accent-foreground: 215 35% 11%;
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 212 28% 22%;
  --radius: 0.75rem;
}
```

### 2.2 Gradientes e texturas

Use os gradientes abaixo literalmente:

```css
/* Hero */
background: linear-gradient(
  to bottom right,
  #FCFCFD,
  rgba(40, 55, 72, 0.05),
  rgba(176, 166, 141, 0.10)
);

/* Trecho destacado do H1 */
background: linear-gradient(to right, #283748, #B0A68D, #283748);
background-clip: text;
color: transparent;

/* Sobre */
background: linear-gradient(
  to bottom,
  #FCFCFD,
  rgba(40, 55, 72, 0.10),
  rgba(241, 242, 244, 0.30)
);

/* Problemas / demandas */
background: linear-gradient(
  to bottom,
  rgba(241, 242, 244, 0.30),
  #FCFCFD
);

/* CTA final */
background: linear-gradient(to bottom right, #283748, #B0A68D, #283748);
/* sobreposição adicional */
box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, 0.20);
```

Na seção escura do processo, aplicar uma grade pontilhada discreta:

```css
background-image: radial-gradient(circle, #FCFCFD 1px, transparent 1px);
background-size: 50px 50px;
opacity: 0.05;
```

### 2.3 Tipografia

| Papel | Família | Peso | Mobile | `md` ≥ 768 px | `lg` ≥ 1024 px |
|---|---|---:|---:|---:|---:|
| H1 do hero | Bebas Neue | 400 | 60/54 | 96/96 | 128/128 |
| H2 de seção | Bebas Neue | 400 | 48/48 | 72/72 | 72/72 |
| H2 “sobre” | Bebas Neue | 400 | 48/60 | 60/60 | 60/60 |
| H2 do CTA | Bebas Neue | 400 | 48/60 | 72/72 | 96/96 |
| H3 de destaque | Bebas Neue | 400 | 36/40 | 48/48 | 48/48 |
| H3 comum de card | Bebas Neue | 400 | 24/32 | 30/36 | 30/36 |
| Corpo padrão | Work Sans | 400 | 16/24 | 16/24 | 16/24 |
| Texto grande | Work Sans | 400 | 20/28 | 20/28 | 20/28 |
| Texto hero/CTA | Work Sans | 400 | 20/28 | 24/32 | 24/32 |
| Texto de etapa | Work Sans | 400 | 18/29.25 | 18/29.25 | 18/29.25 |
| Navegação | Work Sans | 500 | — | — | 14/20 |
| Botão grande | Work Sans | 500–600 | 18/28 | 18/28 | 18/28 |

Ordem de fallback:

```css
--font-display: "Bebas Neue", "Bebas Neue Fallback", system-ui, sans-serif;
--font-sans: "Work Sans", "Work Sans Fallback", system-ui, sans-serif;
```

Carregar Work Sans como fonte variável de peso 100–900 e Bebas Neue em peso 400. Aguardar `document.fonts.ready` antes de gerar screenshots de comparação.

## 3. Sistema de layout

### 3.1 Breakpoints

Usar os breakpoints Tailwind padrão da referência:

| Nome | Largura mínima | Mudança principal |
|---|---:|---|
| base | 0 | navegação mobile; uma coluna |
| `sm` | 640 px | minigrid de benefícios em duas colunas |
| `md` | 768 px | cards de demandas e serviços em duas colunas; títulos maiores |
| `lg` | 1024 px | menu desktop; hero em 12 colunas; sobre em duas colunas; demandas em quatro colunas; serviços em três |
| `xl` | 1280 px | escala desktop estabilizada |
| container máximo | 1400 px | container central passa a ter `max-width: 1400px` |

### 3.2 Container e margens

- `body`: margem 0, fundo `#FCFCFD`, texto `#121A26`, `overflow-x: hidden`.
- `main`: `padding-top: 80px`, compensando o header fixo.
- seção padrão: `padding-inline: 16px`.
- `.container`: largura 100%, `margin-inline: auto`, `padding-inline: 32px`.
- margem visual total até o conteúdo em telas abaixo de 1400 px: **48 px** por lado (`16 + 32`).
- hero e bloco “sobre”: miolo `max-width: 1152px` (`max-w-6xl`).
- timeline/processo: miolo `max-width: 1024px` (`max-w-5xl`).
- textos centrais longos: `max-width: 672px` ou `768px`, conforme indicado por seção.
- footer: container com `padding: 48px 16px`; grid interno em quatro colunas a partir de 768 px.

Em 390 px de viewport real, a coluna principal mede aproximadamente 294 px: `390 - 2 × 48`. Em navegadores desktop com barra de rolagem de 15 px durante simulação mobile, a largura observada pode cair para 279 px; não criar uma regra especial para isso.

### 3.3 Escala de espaçamento

O desenho usa a escala de 4 px. Valores recorrentes:

- 4 px: microdistância;
- 8 px: gaps de ícones/botões;
- 12 px: título → descrição;
- 16 px: gaps curtos, pills e navegação;
- 24 px: gap de cards e margens de heading;
- 32 px: padding interno de card, gap de grids e botões grandes;
- 48 px: gap de colunas principais;
- 64 px: distância heading → grid;
- 128 px: padding vertical padrão das seções.

### 3.4 Raios, bordas e sombras

| Elemento | Raio | Borda | Sombra |
|---|---:|---|---|
| botão comum | 10 px | 0 ou 1–2 px | nenhuma |
| card comum | 12 px | 2 px `#E5E7EB` | `0 1px 2px rgba(0,0,0,.05)` |
| foto, painel do hero | 24 px | 1–2 px translúcida | `0 25px 50px -12px rgba(0,0,0,.25)` |
| pill | 9999 px | 1 px translúcida | nenhuma |
| CTA branco | 10 px | 0 | `0 25px 50px -12px rgba(0,0,0,.25)` |
| WhatsApp flutuante | 9999 px | 0 | sombra grande e suave |

Cards em hover:

- borda muda de `#E5E7EB` para `#B0A68D`;
- overlay interno `linear-gradient(to bottom right, rgba(40,55,72,.05), rgba(176,166,141,.05))` passa de opacidade 0 para 1;
- transição `300ms cubic-bezier(.4,0,.2,1)`;
- ícone pode escalar para `1.10` e a seta deslocar 4 px no eixo X.

## 4. Arquitetura da página

### 4.1 Header fixo

- posição `fixed`, topo 0, largura 100%, `z-index: 50`;
- altura total **81 px**: 80 px de conteúdo + 1 px de borda inferior;
- fundo `rgba(252,252,253,.95)` com `backdrop-filter: blur(4px)`;
- logo com altura **48 px** e largura automática;
- desktop (`lg`): menu horizontal, links 14/20 e peso 500;
- link de menu: `padding: 8px 16px`, raio 10 px; distância lateral adicional de 4 px;
- busca: ícone 20 px;
- “Área do Cliente”: 36 px de altura, 12 px horizontal, borda 1 px, ícone 16 px;
- CTA do header: 40 px de altura, `padding: 8px 16px`, fundo `#B0A68D`, peso 600;
- abaixo de 1024 px: ocultar navegação/CTAs e exibir logotipo + botão hambúrguer Lucide Menu de 24 px.

### 4.2 Hero

Estrutura recomendada:

```txt
section min-height: 100vh
└── max-width: 1152 px
    └── grid de 12 colunas, gap 32 px
        ├── texto: 7 colunas
        └── painel visual: 5 colunas
```

Medidas observadas em 1280 × 720:

- seção: 1265 × 720 px de área útil, iniciando após o header;
- grid: 1152 × 654 px;
- H1: aproximadamente 659 × 384 px;
- painel: aproximadamente 461 × 258 px;
- painel com `padding: 48px`, raio 24 px, borda `rgba(40,55,72,.20)` e gradiente translúcido;
- símbolo central: 160 × 160 px, `object-fit: contain`, opacidade .40;
- badge superior: pill dourada translúcida;
- parágrafo: máximo 576 px;
- grupo de botões: gap 16 px, margem superior 40 px;
- CTA primário observado: 309 × 48 px;
- CTA secundário observado: 189 × 52 px, borda 2 px;
- indicador “role para explorar” centralizado próximo à base.

Em mobile:

- uma coluna, gap 32 px;
- seção com `min-height: 844px` no viewport auditado;
- H1 com 60/54;
- CTA primário ocupa a largura disponível de cerca de 309 px;
- CTA secundário preserva largura de conteúdo;
- painel visual vem depois dos botões.

Decoração: círculos e hexágonos Lucide grandes, com cor primária/dourada em opacidade de 10–20%, movimento vertical lento e leve rotação.

### 4.3 Bloco “Conheça a profissional”

- seção: `padding: 128px 16px`, fundo em gradiente vertical;
- desktop: 2 colunas de 552 px, gap 48 px, miolo máximo 1152 px;
- desktop 1280: altura observada 831 px;
- conteúdo textual e retrato trocam de ordem no mobile: texto primeiro, foto depois;
- retrato desktop: caixa externa 448 × 448 px; borda interna deixa imagem útil em 444 × 444 px;
- mobile real de 390 px: caixa aproximada 279–294 px quadrada;
- a foto original usa proporção 2:3 e é recortada com `object-fit: cover; object-position: 50% 50%`;
- moldura: raio 24 px, borda 2 px `rgba(40,55,72,.20)`, sombra 2XL;
- glow atrás da foto: gradiente primário → dourado, blur 40 px, opacidade .20;
- selo “Especialista / CRP” sobreposto no canto inferior direito;
- pill superior “Conheça a Profissional”: `padding: 8px 16px`, dourado .10, borda dourada .20;
- parágrafo principal 20/32.5 em `#868D8D`;
- dois cards de credibilidade: duas colunas a partir de 640 px, gap 16 px;
- botões: 44 px de altura, `padding-inline: 32px`, gap 16 px no desktop e empilhados no mobile.

### 4.4 “Como posso te ajudar?”

- seção com `padding: 128px 16px` e `margin-top: -128px`;
- desktop 1280: altura observada 1597 px;
- cabeçalho centralizado, subtítulo máximo 672 px;
- distância até o grid: 64 px;
- grid: 1 coluna → 2 em `md` → 4 em `lg`, gap 24 px, `grid-auto-rows: 1fr`;
- desktop 1280: grid útil 1169 × 1125 px;
- desktop 1440: grid útil 1329 × 1065 px, colunas de 314.25 px;
- card destaque ocupa 2 colunas × 2 linhas apenas em `lg`;
- card destaque desktop: título 48/48 e descrição 18/28;
- demais cards desktop: título 30/36;
- card base: fundo branco, borda 2 px, raio 12 px, `padding-block: 24px`;
- conteúdo: `padding: 32px`; no destaque, `48px` a partir de `md`;
- ícone dentro de bloco 64 × 64 px no destaque e 48 × 48 px nos demais;
- texto “Entenda mais” + seta na base do card;
- em mobile, todos os oito cards são uma coluna; com 294 px de largura cada linha tem aproximadamente 391 px de altura.

Ordem e ícones da referência:

1. Ansiedade — Brain;
2. Depressão — Heart;
3. Estresse — Zap;
4. Pânico — Wind;
5. Relacionamentos — Heart;
6. Autoestima — Sparkles;
7. Procrastinação — Target;
8. Compulsões e Vícios — Shield.

Os temas e textos finais precisam ser validados com Gilmara; a ordem visual pode permanecer.

### 4.5 “O processo”

- fundo sólido `#283748`, texto `#FCFCFD`;
- `padding: 128px 16px`;
- desktop 1280: altura observada 1507.25 px;
- cabeçalho centralizado; subtítulo 20/28 com opacidade .90;
- lista máxima 1024 px, três etapas com 128 px entre elas;
- cada etapa: `display:flex`, gap 48 px, alinhada ao centro;
- em desktop, alternar visual à esquerda/direita;
- em mobile, uma coluna, visual antes do texto;
- caixa do ícone: cerca de 128 × 128 px, raio 16 px, fundo branco .10, borda branca .10 e blur de fundo;
- ícone Lucide 80 × 80 px;
- número de etapa em Bebas Neue, grande, branco em opacidade baixa;
- H3: 36/40 no mobile, 48/48 em `md`;
- descrição 18/29.25, opacidade .90;
- padrão pontilhado de 50 px em opacidade .05.

Etapas e ícones:

1. `01` — Identificação — Brain;
2. `02` — Reestruturação — Target;
3. `03` — Transformação — Sparkles.

### 4.6 Atendimentos especializados

- seção: `padding: 128px 16px`;
- desktop 1280: altura observada 1264 px;
- heading central e subtítulo máximo 672 px;
- grid com gap 32 px: 1 coluna → 2 em `md` → 3 em `lg`;
- desktop 1280: colunas de aproximadamente 368.33 px;
- desktop 1440: colunas de aproximadamente 421.66 px;
- duas linhas com 344 px de altura por linha;
- card: fundo branco, borda 2 px, raio 12 px, sombra suave, conteúdo com 32 px;
- H3 24/32; descrição 16/24; “Saiba mais” em dourado;
- hover idêntico aos cards de demandas.

Ordem/ícones de referência:

1. TCC para Ansiedade — Brain;
2. TCC para Depressão — Heart;
3. TCC para Pânico — Wind;
4. TCC para TDAH — Target;
5. Estresse e Burnout — Shield;
6. Terapia Online — Video.

Não afirmar especialidades ou serviços sem confirmação profissional.

### 4.7 Avaliações

- fundo `rgba(241,242,244,.30)`;
- `padding: 128px 16px`;
- altura desktop observada: 552 px;
- altura mobile observada: cerca de 660 px;
- miolo central de no máximo 768 px;
- pill de nota: `padding: 8px 16px`, raio total, fundo primário .10, gap 8 px;
- cinco estrelas Lucide de 18 px com `stroke` e `fill` dourados;
- H2: 48/48 mobile; 72/72 a partir de `md`;
- descrição: 20/28, cor `#868D8D`, margem inferior 40 px;
- botão externo: altura 44 px, borda 2 px, raio 10 px, padding horizontal 32 px.

Substituir quantidade/nota por dados reais e verificáveis. Se não existirem, omitir a seção sem inventar números.

### 4.8 CTA final

- gradiente primário → dourado → primário, overlay preto .20;
- `padding: 128px 16px`, `overflow: hidden`;
- altura desktop observada: 724 px;
- altura mobile observada: cerca de 716 px;
- miolo central, texto branco;
- heading máximo 896 px; 48/60 mobile, 72/72 em `md`, 96/96 em `lg`;
- descrição máximo 672 px, 20/28 mobile e 24/32 em `md`, opacidade .90;
- CTA branco: 354.6 × 57.6 px observado, padding nominal `32px 48px`, raio 10 px e sombra 2XL;
- linha auxiliar 14/20 com ponto/ícone azul-claro;
- decorações: Circle 100 px no alto à esquerda e Hexagon 150 px abaixo à direita, brancos a 10%.

### 4.9 Footer

- fundo sólido `#283748`, texto `#FCFCFD`;
- altura desktop observada: 558 px;
- container com `padding: 48px 16px`;
- grid: uma coluna no mobile e quatro colunas em `md`, gap 32 px;
- logotipo reverso com altura 48 px;
- títulos de coluna: Bebas Neue 18/28;
- links/metadados: Work Sans 14/20, branco com opacidade .60–.80;
- input da newsletter + botão dourado; botão fica com opacidade .50 enquanto inválido;
- ícones sociais oficiais em 24 × 24 px, gap 24 px;
- linha de copyright e links legais separados por borda branca de baixa opacidade;
- WhatsApp flutuante: fixed, círculo verde, ícone 28 px, canto inferior direito, margem de aproximadamente 24 px.

## 5. Responsividade validada

### 5.1 Matriz de comportamento

| Componente | 390 px | 768 px | 1024 px | 1280–1440 px |
|---|---|---|---|---|
| Header | logo + menu | logo + menu | navegação desktop | navegação desktop |
| Hero | 1 coluna | 1 coluna | 12 colunas | 12 colunas, miolo 1152 px |
| H1 | 60 px | 96 px | 128 px | 128 px |
| Sobre | texto → foto | texto → foto | 2 colunas | 2 × 552 px |
| Benefícios | 1 coluna | 2 colunas | 2 colunas | 2 colunas |
| Demandas | 1 coluna | 2 colunas | 4 colunas | 4 colunas |
| Card destaque | sem span | sem span | 2 × 2 | 2 × 2 |
| Processo | empilhado | alternado em linha | alternado | alternado |
| Serviços | 1 coluna | 2 colunas | 3 colunas | 3 colunas |
| Footer | 1 coluna | 4 colunas | 4 colunas | 4 colunas |

### 5.2 Alturas de referência em 1280 × 720

As alturas abaixo foram medidas na página viva com as fontes carregadas. Elas funcionam como baseline de regressão; texto diferente pode aumentar uma linha e alterar a altura natural de uma seção.

| Bloco | Topo no documento | Altura |
|---|---:|---:|
| Header | 0 | 81 px |
| Hero | 80 px | 720 px |
| Sobre | 800 px | 831 px |
| Demandas | 1503 px | 1597 px |
| Processo | 3100 px | 1507.25 px |
| Serviços | 4607.25 px | 1264 px |
| Avaliações | 5871.25 px | 552 px |
| CTA | 6423.25 px | 724 px |
| Footer | 7147.25 px | 558 px |
| Documento | — | aproximadamente 7705 px |

O bloco de demandas começa 128 px antes do fluxo normal por causa de `margin-top: -128px`.

## 6. Movimento e interação

- seções/cards entram ao atingir o viewport: opacidade 0 → 1 e `translateY` positivo → 0;
- usar duração visual entre 600 e 800 ms, easing suave; cards em stagger curto de 80–120 ms;
- ornamentos do hero flutuam continuamente no eixo Y e giram poucos graus;
- o painel/símbolo do hero pode oscilar com escala próxima de 1.01 e rotação inferior a 2°;
- setas movem 4 px para a direita em hover;
- cards podem elevar 4–8 px em hover;
- header permanece fixo durante todo o scroll;
- estados de foco devem usar anel de 2 px na cor primária/dourada com offset de 2 px;
- respeitar `prefers-reduced-motion: reduce`: remover flutuação, stagger e transformações, preservando todo o conteúdo visível.

## 7. Conteúdo substituível da Gilmara

Definir estes dados em um único objeto/configuração; não espalhar strings pelos componentes:

```ts
type SiteConfig = {
  nome: "Gilmara Cardozo Soares";
  tituloProfissional: string;
  crp: string;
  abordagem: string;
  propostaDeValor: string;
  bioCurta: string;
  whatsapp: string;
  email: string;
  instagram?: string;
  facebook?: string;
  doctoralia?: string;
  demandas: Array<{ titulo: string; descricao: string; slug: string }>;
  servicos: Array<{ titulo: string; descricao: string; slug: string }>;
  processo: Array<{ numero: string; titulo: string; descricao: string }>;
  avaliacaoGoogle?: { nota: number; quantidade: number; url: string };
};
```

Placeholders mínimos antes da publicação:

- `{{CRP}}`
- `{{ABORDAGEM}}`
- `{{WHATSAPP}}`
- `{{EMAIL}}`
- `{{BIO_CURTA}}`
- `{{SERVIÇOS_CONFIRMADOS}}`
- `{{LINK_AVALIAÇÕES}}`
- `{{POLÍTICA_DE_PRIVACIDADE}}`
- `{{TERMOS_DE_USO}}`

## 8. Requisitos técnicos recomendados

- Next.js App Router ou React equivalente;
- Tailwind CSS para reproduzir a escala observada;
- Framer Motion para entrada, stagger e ornamentos;
- Lucide React para todos os ícones lineares;
- `next/font/google` ou self-host para Work Sans e Bebas Neue;
- imagens responsivas em AVIF/WebP, com dimensões declaradas para evitar layout shift;
- header, hero e CTA em componentes separados;
- cards gerados por arrays, sem duplicação manual;
- acessibilidade: heading único `h1`, ordem correta de `h2/h3`, foco visível, alt descritivo, botão de menu com `aria-expanded`, link “pular para conteúdo” e contraste AA.

## 9. Critérios de aceite visual

Validar nos viewports 390 × 844, 768 × 900, 1024 × 900, 1280 × 720 e 1440 × 900.

Checklist:

- [ ] header mede 80 px + 1 px de borda;
- [ ] tipografias reais estão carregadas, sem fallback no screenshot;
- [ ] cores conferem com os tokens desta spec;
- [ ] conteúdo começa 48 px das laterais abaixo de 1400 px;
- [ ] hero/sobre usam miolo máximo de 1152 px;
- [ ] headings e grids mudam exatamente em 768 e 1024 px;
- [ ] card destaque ocupa 2 × 2 apenas a partir de 1024 px;
- [ ] processo alterna esquerda/direita apenas a partir de 768 px;
- [ ] cards têm borda 2 px, raio 12 px e hover dourado;
- [ ] foto possui recorte quadrado, raio 24 px e selo sobreposto;
- [ ] nenhum conteúdo fica invisível se JavaScript falhar ou `prefers-reduced-motion` estiver ativo;
- [ ] não existe rolagem horizontal;
- [ ] WhatsApp flutuante não cobre CTA, footer ou modal;
- [ ] modal de newsletter, se mantido, não deve abrir durante teste visual nem antes de intenção/tempo configurado;
- [ ] dados profissionais e avaliações são reais;
- [ ] não há ativos, telefone, nome ou tracking pertencentes ao site de referência.

Para comparação por screenshot, primeiro percorra a página uma vez para disparar o lazy-load e as animações; depois execute a captura com movimento desativado. A meta sugerida é diferença visual inferior a 1% nas áreas estruturais, aceitando variação apenas em texto e nos ativos próprios da Gilmara.
