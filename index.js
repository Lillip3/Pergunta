const verdadeiro = document.querySelector(".sim");
const falso = document.querySelector(".nao");
const sumir = document.getElementById("desaparecer");
const novosElementosContainer = document.getElementById("novos-elementos");


verdadeiro.addEventListener("click", ver);
falso.addEventListener("click", fal);

function ver(){
    alert("Eita glória, aceita Ele como teu Salvador!!🤩");
    sumir.style.display = "none";
    mostrarNovosElementos();
} 

function fal(){
    alert("Não resista a Ele, Jesus quer mudar sua vida.");
    sumir.style.display = "none";
    mostrarNovosElementos();
}


// Função para criar e mostrar novos elementos no DOM
function mostrarNovosElementos() {
    // Cria e adiciona um novo parágrafo
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Você é muito precioso para JESUS! Ele te ama!❤";
    novosElementosContainer.appendChild(novoParagrafo);

    

    // Mostra o container com novos elementos
    novosElementosContainer.style.display = "block";
}








/*function perguntar(){
    let resposta = confirm('Você quer continuar?');
        if(resposta){
            console.log('Você escolheu sim.');
        } else{
            console.log('Você escolheu não.');
        }
}*/