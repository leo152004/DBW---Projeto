"use strict"
console.log("Conectado!")


let listaELementos = Array.from(document.getElementsByClassName('suporte'));
let botaoSub = document.getElementById('button');
let arr = [];
let podeAdicionar = false;

function checker(b) {
    return b === true;}

botaoSub.addEventListener("click", function (event){
    event.preventDefault();
    console.log('click');
    arr=[];
    verificaUserInput();
    addComentario();
})
function adicionaHTML(listaELementos) {
    // language=HTML
    let html = `
<link rel="stylesheet" href="../CSS/Suporte.css">
<div  class="comentario" >
  <p>${new Date()}</p>
  <p>Assunto: <b>${listaELementos[1].value}}$</b></p>
  <p> <b>${listaELementos[0].value}</b> escreveu:</p>
  <p>${listaELementos[2].value}</p>
 </div>`;
    botaoSub.insertAdjacentHTML('afterend', html);
}

function verificaUserInput() {
    for (let i = 0; i < listaELementos.length; i++) {
        if (listaELementos[i].value === "") {
            mudaCorInput(listaELementos, i, "LightBlue");
            podeAdicionar = false;
            arr.push(podeAdicionar);
        } else {
            mudaCorInput(listaELementos, i, "white");
            podeAdicionar = true;
            arr.push(podeAdicionar);
        }
    }
}

function addComentario() {
    if (arr.every(checker)) {
        adicionaHTML(listaELementos);
        limparCampos();
    }
}
function limparCampos() {
    for (let i = 0; i < listaELementos.length; i++) {
        listaELementos[i].value = "";
    }
}

function mudaCorInput(listaELementos, index, cor) {
    return (listaELementos[index].style.backgroundColor = cor);}
