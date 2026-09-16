# Inventário visual e prompts de imagens — Gilmara

## 1. Escopo e regra de uso

Este inventário cobre **todos os ativos visuais da homepage** de referência [psicologoericmoreira.com.br](https://www.psicologoericmoreira.com.br/) e da captura local `Inspirações/modelo.png`.

A auditoria encontrou:

- 8 ocorrências de `<img>` no DOM;
- 7 ativos estáticos únicos relevantes ao design, mais uma repetição do WhatsApp;
- 54 ocorrências de SVG inline;
- 18 papéis vetoriais únicos, quase todos ícones Lucide repetidos em diferentes seções;
- nenhuma foto de fundo e nenhum vídeo na homepage;
- apenas uma fotografia editorial: o retrato da profissional.

**Não copiar** a fotografia, o logotipo ou o símbolo do profissional de referência. Os prompts abaixo preservam composição, luz, proporção e linguagem visual, mas criam ativos próprios para Gilmara.

## 2. Variáveis que devem ser preenchidas

Substitua os placeholders antes de enviar os prompts ao GPT:

- `{{NOME}}` = `Gilmara Cardozo Soares`
- `{{TÍTULO_CURTO}}` = por exemplo `PSICÓLOGA`
- `{{CRP}}` = número real
- `{{ABORDAGEM}}` = abordagem profissional confirmada
- `{{COR_PRIMÁRIA}}` = `#283748`
- `{{COR_ACENTO}}` = `#B0A68D`
- `{{COR_FUNDO}}` = `#FCFCFD`
- `{{COR_TEXTO}}` = `#121A26`
- `{{REFERÊNCIA_FACIAL}}` = fotografia nítida fornecida por Gilmara
- `{{REFERÊNCIA_LOGO}}` = marca existente, se houver

Se Gilmara já possuir identidade visual, ela é a fonte de verdade. Nesse caso, manter as proporções e posições do site de referência, mas usar as cores e o logotipo aprovados por ela.

## 3. Prompt-base global para GPT Images

Cole este bloco no início de cada prompt fotográfico:

```txt
Atue como diretora de arte de uma marca premium de psicologia clínica brasileira. Crie um ativo visual original para a psicóloga Gilmara Cardozo Soares, com linguagem contemporânea, serena, humana e baseada em confiança. A direção visual deve combinar azul-petróleo profundo #283748, dourado suave fosco #B0A68D, branco frio #FCFCFD e preto azulado #121A26. Estética editorial minimalista, alto padrão, limpa, acolhedora, sem clichês de banco de imagens. Luz suave e controlada, contraste moderado, acabamento natural, textura realista, elegância discreta. Preserve espaço negativo e leitura clara em telas pequenas. Não reutilize nem imite o rosto, a marca ou elementos identificadores de terceiros.
```

### Restrições globais

Acrescente ao fim de prompts fotográficos:

```txt
Sem texto, sem letras, sem logotipos, sem marca-d'água, sem moldura, sem ícones sobrepostos, sem elementos médicos genéricos, sem divã clichê, sem mãos deformadas, sem assimetria facial artificial, sem pele plástica, sem excesso de retoque, sem desfoque no rosto. Aparência fotográfica real, anatomia correta, cores fiéis e composição central segura para recorte responsivo.
```

Para qualquer imagem de pessoa real, anexe `{{REFERÊNCIA_FACIAL}}` e peça preservação de identidade. Sem uma referência autorizada, o resultado será apenas uma personagem fictícia e não deverá ser publicado como retrato de Gilmara.

## 4. Inventário dos ativos raster da referência

| ID | Ativo observado | Ocorrência / tamanho exibido | Tratamento para Gilmara |
|---|---|---|---|
| IMG-01 | logotipo horizontal do header | altura 48 px; largura automática | criar/aplicar marca própria |
| IMG-02 | símbolo orgânico/neural do hero | 160 × 160 px; opacidade .40 | criar símbolo próprio ou derivar do logo |
| IMG-03 | retrato profissional | fonte 2:3; recorte 444 × 444 desktop | fotografar/gerar com referência facial |
| IMG-04 | logotipo reverso do footer | altura 48 px | versão monocromática clara da marca |
| IMG-05 | Instagram | 24 × 24 px | usar ícone oficial, não gerar |
| IMG-06 | Facebook | 24 × 24 px | usar ícone oficial, não gerar |
| IMG-07 | WhatsApp | 24 × 24 e 28 × 28 px | usar ícone oficial, não gerar |
| IMG-08 | Doctoralia | 24 × 24 px, grayscale | usar ícone oficial/licenciado, não gerar |
| IMG-09 | favicon | 16/32/48 px e 512 px | derivar do símbolo próprio |

Pixels de tracking do Facebook/Google detectados pela ferramenta não são conteúdo visual e não entram no projeto.

## 5. Prompts individuais

### IMG-01 — Logotipo horizontal do header

**Saída:** SVG vetorial + PNG transparente em 1024 × 256 px. O uso no site será em altura de 48 px.

> Observação: geradores de imagem costumam errar letras. Use o GPT apenas para explorar o símbolo; finalize nome e tipografia em editor vetorial. O arquivo publicado precisa conter o texto correto e curvas limpas.

```txt
Crie um conceito de identidade visual vetorial horizontal e original para “Gilmara Cardozo Soares”, psicóloga. À esquerda, um símbolo compacto e memorável que una de forma abstrata crescimento, conexão neural, acolhimento e equilíbrio, sem copiar árvores neurais, cérebros ou marcas existentes. À direita, organize o nome “GILMARA CARDOZO SOARES” em caixa alta, com presença editorial condensada, e abaixo uma linha menor “PSICÓLOGA • {{CRP}}”. Paleta exclusiva: azul-petróleo #283748 como cor principal e dourado suave #B0A68D como apoio. Fundo totalmente transparente. Desenho flat vetorial, linhas precisas, poucos nós, boa leitura a 48 px de altura, sem gradiente, sem mockup, sem sombra, sem 3D. Proporção total aproximada 4:1 e símbolo ocupando cerca de 22% da largura. Gere uma única proposta centralizada. Verifique rigorosamente a grafia; se não conseguir renderizar o texto com precisão, entregue somente o símbolo e deixe a área da tipografia vazia.
```

### IMG-02 — Símbolo do hero

**Saída:** SVG preferencial; PNG transparente 1024 × 1024 como alternativa. Exibição 160 × 160 px a 40% de opacidade.

```txt
Crie somente o símbolo isolado da identidade de Gilmara Cardozo Soares, sem nenhuma palavra. Ícone vetorial orgânico e simétrico, construído a partir de ramificações suaves que sugerem conexões neurais, crescimento emocional e acolhimento; centro com pequeno espaço circular; silhueta simples e reconhecível. Cor única azul-petróleo acinzentada #283748. Fundo totalmente transparente. Traços grossos e arredondados, geometria limpa, poucos detalhes, área segura de 12% nas bordas, leitura perfeita em 32 px e 160 px. Flat, sem gradiente, sem sombra, sem textura, sem 3D, sem cérebro literal, sem árvore literal, sem texto e sem marca-d'água. Formato 1:1.
```

### IMG-03 — Retrato profissional de Gilmara

**Entrada obrigatória:** anexe uma ou mais fotos autorizadas de Gilmara, bem iluminadas, incluindo uma imagem frontal.

**Saída:** master vertical 1600 × 2400 px, proporção 2:3. O site aplicará recorte quadrado com `object-fit: cover; object-position: 50% 50%`.

```txt
[COLE O PROMPT-BASE GLOBAL]

Use a fotografia anexada de Gilmara Cardozo Soares como referência de identidade. Preserve com alta fidelidade seus traços faciais, idade aparente, tom e textura de pele, cabelo, olhos e proporções reais; não transforme seu rosto em outra pessoa. Produza um retrato editorial profissional vertical, enquadramento da metade das coxas para cima, Gilmara levemente inclinada para a frente em uma postura segura e acolhedora, olhando diretamente para a câmera, expressão serena e um sorriso muito discreto. Roupa profissional contemporânea em azul-marinho/azul-petróleo, com blusa clara neutra e acessórios mínimos. Fundo de estúdio profundo entre #121A26 e #283748, homogêneo, com textura quase imperceptível. Luz principal suave vindo do lado direito da imagem, recorte delicado no cabelo e ombros, sombras abertas, contraste elegante. Lente equivalente a 85 mm, perspectiva natural, profundidade de campo moderada, nitidez nos olhos. Deixe cabeça, ombros, mãos e tronco dentro de uma área central segura de 70%, pois a imagem será recortada para um quadrado em desktop e mobile. Fotografia realista de alta resolução, gradação de cor sóbria, sem glamour excessivo.

[COLE AS RESTRIÇÕES GLOBAIS]
```

**Variação sentada, caso combine melhor com a referência facial:**

```txt
Mantenha toda a direção acima, mas coloque Gilmara sentada na borda de uma poltrona minimalista escura, tronco levemente inclinado para a frente, mãos naturais apoiadas e parcialmente visíveis. Não mostrar cenário de consultório; o fundo deve continuar limpo, escuro e editorial.
```

### IMG-04 — Logotipo reverso do footer

**Saída:** SVG + PNG transparente em 1024 × 256 px. Exibição em 48 px de altura.

```txt
Pegue a identidade aprovada de Gilmara Cardozo Soares fornecida como referência e crie uma versão horizontal reversa, monocromática e vetorial para uso sobre fundo azul-petróleo #283748. Preserve exatamente símbolo, proporções e tipografia da marca aprovada. Use #FCFCFD como cor predominante e, se necessário, detalhes discretos em #B0A68D. Fundo transparente. Sem sombra, sem brilho, sem gradiente, sem mockup, sem 3D e sem alterar a grafia. Proporção aproximada 4:1, legível a 48 px de altura.
```

### IMG-05 — Instagram

Não gerar no GPT. Usar o ícone oficial monocromático ou um pacote de ícones licenciado, em 24 × 24 px, com estado normal `rgba(252,252,253,.70)` e hover `#B0A68D`.

Se for necessário gerar apenas um placeholder interno:

```txt
Crie um pictograma vetorial genérico de câmera social, quadrado arredondado com pequeno círculo interno e ponto superior, traço único de 2 px, cor #FCFCFD, fundo transparente, 24 × 24 px, sem usar nome, palavra ou logotipo de plataforma.
```

### IMG-06 — Facebook

Não gerar no GPT. Usar o ativo oficial/licenciado em 24 × 24 px. Se a página de Gilmara não existir, remover o link e o ícone.

Placeholder genérico opcional:

```txt
Crie um pictograma vetorial genérico de comunidade digital, duas silhuetas humanas minimalistas conectadas, traço único de 2 px, cor #FCFCFD, fundo transparente, 24 × 24 px, sem letras e sem marca de plataforma.
```

### IMG-07 — WhatsApp e botão flutuante

Não gerar no GPT. Usar o ícone oficial/licenciado. No footer: 24 × 24 px. No botão flutuante: ícone branco 28 × 28 px dentro de círculo `#25D366`.

Placeholder genérico opcional:

```txt
Crie um pictograma vetorial genérico de conversa imediata: balão circular simples com pequeno telefone abstrato no centro, traço branco de 2 px, fundo transparente, área 24 × 24 px, sem palavra e sem copiar uma marca registrada.
```

### IMG-08 — Doctoralia

Não gerar no GPT. Usar apenas o ativo oficial/licenciado e somente se Gilmara tiver perfil real. Exibição 24 × 24 px com `filter: grayscale(1)` no estado “em breve”. Se não houver perfil, remover o item.

Placeholder genérico opcional:

```txt
Crie um pictograma vetorial genérico de diretório profissional de saúde: círculo com pequena cruz abstrata e silhueta humana, traço simples de 2 px, cor #FCFCFD, fundo transparente, 24 × 24 px, sem nome de plataforma e sem copiar logotipo existente.
```

### IMG-09 — Favicon e ícone de aplicativo

**Entrada:** símbolo final aprovado da Gilmara.

**Saída:** SVG, `favicon.ico` com 16/32/48 px, PNG 192 × 192 e 512 × 512.

```txt
Converta o símbolo aprovado de Gilmara Cardozo Soares em um favicon vetorial extremamente simples. Preserve a silhueta essencial, elimine detalhes que desaparecem em tamanhos pequenos e centralize o símbolo em uma área segura de 78%. Fundo quadrado azul-petróleo #283748 com cantos suavemente arredondados; símbolo em #FCFCFD e um único detalhe opcional em #B0A68D. Alto contraste e leitura nítida em 16 × 16 px. Sem texto, sem sombra, sem gradiente, sem 3D, sem mockup e sem marca-d'água. Formato 1:1.
```

## 6. Ícones inline: não são imagens geradas

Para fidelidade, use **Lucide React**. Gerar esses ícones no GPT criaria inconsistência de espessura, alinhamento e nitidez.

### 6.1 Inventário único

| Ícone Lucide | Tamanhos observados | Uso |
|---|---:|---|
| `Search` | 20 px | busca no header |
| `Lock` | 16 px | área do cliente |
| `Menu` | 24 px | menu mobile |
| `Circle` | 60, 80 e 100 px | decoração |
| `Hexagon` | 120 e 150 px | decoração |
| `Brain` | 32, 48, 80 e 100 px | hero/processo/cards |
| `Award` | 32 px | selo de especialista |
| `Target` | 20, 32 e 80 px | evidências/cards/processo |
| `Heart` | 20 e 32 px | acolhimento/cards |
| `ArrowRight` | 20, 24 e 28 px | links e CTAs |
| `Zap` | 32 px | estresse |
| `Wind` | 32 px | pânico |
| `Sparkles` | 32 e 80 px | autoestima/transformação |
| `Shield` | 32 px | compulsões/segurança |
| `Video` | 32 px | terapia online |
| `Star` | 18 px, cinco vezes | nota do Google |
| `Mail` | 16 px | footer |
| `Phone` | 16 px | footer |

Configuração base:

```tsx
<Icon
  size={32}
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
/>
```

### 6.2 Prompt alternativo para um conjunto totalmente próprio

Use apenas se a decisão for **não usar Lucide**. Gere todos os ícones em uma única prancha para manter consistência e depois vetorize separadamente.

```txt
Crie uma prancha de 12 pictogramas vetoriais originais e coerentes para uma landing page premium de psicologia: cérebro/conexões, coração/acolhimento, energia/estresse, respiração/pânico, relacionamentos, brilho/autoestima, alvo/procrastinação, escudo/compulsões, vídeo/terapia online, prêmio/especialista, e-mail e telefone. Estilo monoline minimalista, traço uniforme de 2 px, pontas e junções arredondadas, grade 24 × 24, sem preenchimento, sem texto. Cor principal #B0A68D sobre fundo transparente. Cada ícone deve ocupar área segura de 20 × 20 e manter peso óptico idêntico. Não usar símbolos médicos clichês, não copiar bibliotecas de ícones, sem sombra, sem gradiente, sem 3D.
```

## 7. Composição do selo sobre a fotografia

O selo não deve vir “queimado” na foto. Construir em HTML/CSS para manter texto correto e responsivo.

```txt
position: absolute;
right: -12px a 12px, conforme o viewport;
bottom: 16px;
display: flex;
align-items: center;
gap: 12px;
padding: 16px 20px;
background: #B0A68D;
border-radius: 12px;
box-shadow: 0 10px 15px -3px rgba(0,0,0,.10), 0 4px 6px -4px rgba(0,0,0,.10);
```

Conteúdo:

- ícone `Award`, 32 px, `#121A26`;
- linha 1: `{{TÍTULO_CURTO}}`, Bebas Neue, caixa alta;
- linha 2: `CRP {{CRP}}`, Work Sans 12–14 px.

## 8. Nomes de arquivo recomendados

```txt
public/images/brand/gilmara-logo-header.svg
public/images/brand/gilmara-logo-footer.svg
public/images/brand/gilmara-symbol.svg
public/images/brand/favicon.svg
public/images/brand/favicon-32.png
public/images/brand/icon-192.png
public/images/brand/icon-512.png
public/images/gilmara/gilmara-portrait-master.jpg
public/images/gilmara/gilmara-portrait-640.avif
public/images/gilmara/gilmara-portrait-1080.avif
```

Não salvar ícones sociais como imagens se estiver usando uma biblioteca SVG; importar apenas os componentes necessários.

## 9. Exportação e controle de qualidade

### Retrato

- master: JPG qualidade 95, 1600 × 2400 px;
- derivados: AVIF qualidade 70–75 em larguras 384, 640, 750, 828, 1080, 1200 e 1920 quando necessário;
- manter perfil sRGB;
- validar recorte quadrado em 294, 444 e 448 px;
- rosto e mãos não podem ser cortados nos viewports de teste;
- escrever alt real: `Gilmara Cardozo Soares, psicóloga, em retrato profissional`.

### Logos/símbolo

- formato principal SVG otimizado;
- PNG transparente somente como fallback;
- testar em 24, 32, 48 e 160 px;
- texto precisa permanecer como vetor ou texto editável, nunca como raster gerado com erros;
- remover metadados e fundo acidental.

### Checklist antes de publicar

- [ ] Gilmara autorizou o uso da fotografia de referência;
- [ ] o rosto gerado corresponde à referência e não a uma pessoa fictícia;
- [ ] nome e CRP estão grafados corretamente;
- [ ] logo não copia o símbolo da referência;
- [ ] não há texto embutido no retrato;
- [ ] ícones de interface são SVG nítidos, não PNGs gerados;
- [ ] ícones de plataformas são oficiais/licenciados;
- [ ] arquivos têm fundo transparente quando solicitado;
- [ ] imagem carrega sem layout shift;
- [ ] contraste e recorte funcionam no mobile;
- [ ] não há marca-d'água, artefatos anatômicos ou letras inventadas.
