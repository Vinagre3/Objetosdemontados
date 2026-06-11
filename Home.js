function abrirCategoria(categoria){

    let categorias =
    document.querySelectorAll(".categoria");

    categorias.forEach(secao => {
        secao.classList.remove("ativa");
    });

    document
    .getElementById(categoria)
    .classList.add("ativa");
}

function abrirModal(nome, numero){


    document
    .getElementById("modal")
    .style.display = "flex";


    document
    .getElementById("tituloProduto")
    .innerText = nome;


    let cartoesGrandes =
    document.querySelectorAll(".grande-cartao");

    cartoesGrandes.forEach(cartao => {
        cartao.style.display = "none";
    });


    document
    .querySelector(".grande-cartao" + numero)
    .style.display = "block";
}

function fecharModal(){

    document
    .getElementById("modal")
    .style.display = "none";


    let cartoesGrandes =
    document.querySelectorAll(".grande-cartao");

    cartoesGrandes.forEach(cartao => {
        cartao.style.display = "none";
    });
}


window.onclick = function(event){

    let modal =
    document.getElementById("modal");

    if(event.target == modal){
        fecharModal();
    }
}