/*
Comentar somente o necessário e para os estudos.
Deixar claro os objetivos para o projeto, dando um caminho logico do que programar

Evento de mouseEnter - parecido com o :hover

.querrySelectorAll() - Busca por todos os seletores de uma determinada classe seletor etc..

addEventListerner - uma escuta de elementos 

Com "click" fica melhor a intenção de selecionar do que o "mouseenter"

Seleção + clique direito -> refactor -> globalFuncition

*/

const itemPersonagem = document.querySelectorAll(".personagem");

itemPersonagem.forEach((personagem) => {
    personagem.addEventListener("click", () => {

        if(window.innerWidth < 450 ){
            window.scrollTo({top: 0, behavior:"smooth"})

        }

        removerSelecaoDoPersonagemEAdicao(personagem);

        substituicaoDaImagemGrande(personagem);

        trocaDoNomeDescricao(personagem);

    });

});



function trocaDoNomeDescricao(personagem) {
    const nomePersonagem = document.getElementById("nome_personagem");

    nomePersonagem.innerText = personagem.getAttribute("data-name");

    const descricaoPersonagem = document.getElementById("descricao_personagem");

    descricaoPersonagem.innerText = personagem.getAttribute("data-descripton");
}

function substituicaoDaImagemGrande(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem_grande");

    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `./src/image/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagemEAdicao(personagem) {
    const personagemSelecionado = document.querySelector(".selecionado");

    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");
}


