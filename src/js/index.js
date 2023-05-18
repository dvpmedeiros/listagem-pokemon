// Objetivo 1: adicionar classe modo-escuro no body e mudar ícone para lua
// Passo 1 - criar referência do elemento html

const botaoAlterarTema = document.getElementById("botao-alterar-tema") // representação do html no console

// Passo 2 - pegar o body do html

const body = document.querySelector("body")

// Passo 3 - identificar o clique do usuário

botaoAlterarTema.addEventListener("click", () => {
    console.log("clicou no botão");
}) // função de seta ou arrow function

