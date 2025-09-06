# 🌐 Projeto Didático — Corpo do Site (HTML, CSS e JavaScript)

Este projeto foi criado para **ensinar de forma simples** como funcionam as três tecnologias base da web:  
**HTML, CSS e JavaScript**.  

A ideia é comparar a construção de um site com o **corpo humano** 🧍:

- 🦴 **HTML** = o esqueleto (estrutura, ossos e articulações).  
- 👕 **CSS** = a pele e as roupas (como o site se apresenta).  
- 💪🧠 **JavaScript** = os músculos e o cérebro (o que dá movimento e vida ao site).  

---

## 🚀 Tecnologias usadas

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  

---

## 📂 Estrutura de Pastas

```bash
projeto-corpo-site/
 ┣ 📂 css/
 ┃ ┗ style.css
 ┣ 📂 js/
 ┃ ┗ script.js
 ┣ index.html
```

## ▶️ Como executar

<ol>
    <li>Baixe/extraia o projeto.</li>
    <li>Abra o arquivo index.html no seu navegador.</li>
    <li>(Opcional) No VS Code, use a extensão Live Server para recarregar automaticamente.</li>
</ol>

## 🦴 HTML — O esqueleto

<p>HTML organiza o conteúdo. Pense nele como os ossos que sustentam o corpo do site.</p>

### Como as tags funcionam
<p>A maioria tem abertura e fechamento:</p>

```bash
    <p>Esse é um parágrafo.</p>
```

* Algumas não têm conteúdo dentro (auto-fecham na prática):

```bash
    <img src="foto.jpg" alt="Minha foto">
    <br>
    <hr>
```
## Principais tags
* Estruturais: ```<header>, <main>, <section>, <footer>, <div>```
* Conteúdo: ```títulos <h1> ... <h6>, parágrafos <p>, ênfases <strong>, <em>``` 
* Multimídia e navegação: ```imagens <img>, links <a href="...">, listas <ul>/<ol> + <li>```

## Estrutura básica de um HTML
```bash
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Minha Página</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header>...</header>
        <main>...</main>
        <footer>...</footer>

        
        <script src="js/script.js"></script>
    </body>
    </html>

```
## 👕 CSS — A aparência
CSS é a pele/roupa do site: define cores, tamanhos, fontes e espaçamentos.

Formas de usar CSS

* Inline (dentro da tag): use apenas para testes rápidos.

```bash
    <p style="color: red;">Texto vermelho</p>
```
* Interno (no ```<head>```): bom para páginas únicas.
```bash
    <style>
  p { color: red; }
</style>

```
* Externo (arquivo .css): mais usado em projetos reais.
```bash
    <link rel="stylesheet" href="css/style.css">
```
## Propriedades mais usadas
```bash
    /* Cores */
    color: #333;              /* cor do texto */
    background-color: #f0f0f0;/* cor de fundo */

    /* Texto */
    font-size: 1rem;          /* tamanho da fonte */
    font-family: Arial, sans-serif;
    text-align: center;       /* left | center | right */

    /* Espaçamentos */
    margin: 20px;             /* espaço fora da caixa */
    padding: 16px;            /* espaço dentro da caixa */

    /* Tamanho */
    width: 200px;
    height: 100px;

    /* Borda e sombra */
    border: 2px solid #0077cc;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);

```
## Unidades: px vs rem

* <strong>px</strong> = tamanho fixo (bom para detalhes finos).
* <strong>rem</strong> = relativo ao tamanho base do navegador (acessível e responsivo).

    * Por padrão, <strong>1rem = 16px</strong>.
    * Fórmulas:
        * <strong>rem = px / base (ex.: 24px / 16 = 1.5rem)</strong>
        * <strong>px = rem * base (ex.: 2rem * 16 = 32px)</strong>

* Por que usar rem?
    <ul>
    1. Acessibilidade: se a pessoa aumenta a fonte no navegador, o site acompanha. <br>
    2. Consistência: tudo cresce na mesma proporção. <br>
    3. Responsividade: facilita ajustar o layout para diferentes telas.
    </ul>

### Tabela rápida
    px	rem
    16	1.0
    20	1.25
    24	1.5
    32	2.0

## Box Model
<p>Todo elemento é uma caixinha com camadas:</p>

```bash
    +-----------------------------+
    |           margin            |
    |  +-----------------------+  |
    |  |         border        |  |
    |  |  +-----------------+  |  |
    |  |  |     padding     |  |  |
    |  |  |  +-----------+  |  |  |
    |  |  |  |  content  |  |  |  |
    |  |  |  +-----------+  |  |  |
    |  |  +-----------------+  |  |
    |  +-----------------------+  |
    +-----------------------------+
```
* content: o que aparece (texto, imagem).
* padding: espaço interno.
* border: a moldura.
* margin: espaço externo entre caixas.

### Display: block, inline e inline-block

```bash
| Tipo           | Ocupa a linha toda? | Aceita `width/height`? | Exemplos            |
| -------------- | ------------------- | ---------------------- | ------------------- |
| `block`        | Sim                 | Sim                    | `div`, `p`, `h1`    |
| `inline`       | Não (fica na linha) | **Não**                | `span`, `a`         |
| `inline-block` | Não (linha)         | **Sim**                | botões/itens custom |
```
### 📦 Flexbox — alinhamento fácil
<p>Use quando quiser alinhar itens em linha ou em coluna de forma simples.</p>

1. No container (pai): display: flex;
2. Controle o alinhamento:

```bash
    .container {
        display: flex;
        justify-content: center; /* eixo principal (horizontal por padrão) */
        align-items: center;      /* eixo cruzado (vertical por padrão) */
        gap: 1rem;                /* espaço entre itens */
    }

    * justify-content: flex-start | center | space-between | space-around
    * align-items: flex-start | center | flex-end | stretch
```

## 💪 JavaScript — O movimento
<p>JavaScript faz a página reagir às ações do usuário (cliques, teclas, etc.).</p>
<p>Exemplo do projeto: botão que move uma bolinha.</p>

```bash
    const btn = document.getElementById("btn-mover");
    const bola = document.getElementById("bola");

    let movida = false;

    btn.addEventListener("click", () => {
    if (!movida) {
        bola.style.left = "300px";
        btn.innerText = "Voltar";
    } else {
        bola.style.left = "0";
        btn.innerText = "Clique para me mover!";
    }
    movida = !movida;
    });



    Comandos que também são essênciais no JavaScript:

        * document.getElementById(...) - Pega elementos pela identificação (ID) da página.

        * addEventListener("click", ...) - Escuta a ação de clique do usuário em algum botão ou elemento clicável e executa algo que você mesmo pode parametrar.

        * Alteramos o estilo (style.left) - Para mover a bolinha.
```

## 📝 Exercícios rápidos
1. HTML: adicione uma nova seção com um título (```<h2>```) e dois parágrafos (```<p>```).
2. CSS: mude a cor de fundo da página e aumente o border-radius da caixa.
3. JS: faça o botão trocar também a cor da bolinha ao mover/voltar.
4. Flexbox: coloque três caixinhas lado a lado, centralizadas na tela.
5. rem: troque tamanhos em px por rem e observe o comportamento.

## 🐞 Erros comuns
* Esquecer de fechar tags (```</p>```, ```</section>```).
* Colocar o caminho errado do CSS/JS (ex.: href="style.css" em vez de css/style.css).
* Esquecer charset/viewport no ```<head>``` (pode quebrar acentos e responsividade).
* Confundir margin (fora) com padding (dentro).
* Tentar usar width/height em elementos display: inline.

## 👨‍💻 Créditos
* Autor: <a href="https://r-douglas.vercel.app">Robert Douglas</a> 
* Propósito: Material didático para iniciantes fixarem os conceitos básicos. <br>

    ![rockelee-guy](./src/assets/img/rock-lee.gif)

<br>

## 📜 Licença
<p>Este projeto está sob a licença MIT. Você pode usar, copiar, modificar e distribuir com créditos.</p>

<br>

## ⭐ Curta o repositório ae carai! xD
<p>Se este material te ajudou, deixa uma estrela (⭐) no repositório. (Que eu to ligado que vocês vão precisar! Robson ali ta f.... AHAHAAAM!) </p>
<p>Isso motiva a continuidade do projeto e ajuda outros iniciantes a encontrarem este conteúdo. Valeu! 🚀</p> <br>

![programador-frenetico](./src/assets/img/programador-frenetico.gif)
