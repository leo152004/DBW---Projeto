

console.log("conected")
//Imagem de Perfil
let profilePicture=document.getElementById("display");
let inputFile=document.getElementById("input-file");

inputFile.onchange=function (){
    profilePicture.src=URL.createObjectURL(inputFile.files[0]);
}
//POP-UP
let popup = document.getElementById("popup");
function openPopUp(){
    popup.classList.add("open-popup");
}
function closePopUp(){
    popup.classList.remove("open-popup");
}
//Insersão de Coisas relacionadas ao Pais
const PaisesInfo={
    Portugal:{
        Lisboa:["1000","1000-004","1000-008","1000-009","1000-010"],
        Funchal:["9000","9000-006","9000-0014","9000-009","9000-019"],
        Porto:["1405-043","4000-008","4000-012","4000-013","4000-014"],
        },
    Espanha:{
        Madrid:["28001","28002","28003","28004","28005"],
        Barcelona:["08001","08002","08003","08004","08005"],
        Sevilha:["41001","41002","41003","41004","41005"],
        },
    Alemanha:{
        Berlim:["10176","10245","10115","10178","10247"],
        Munique:["80336","80538","80539","80634","80636"],
        Frankfurt:["60311","60316","60318","60320","60322"],
    }
}
window.onload = function() {
    const PaisSelect = document.querySelector("#Pais1");
    const CidadeSelect = document.querySelector("#Cidade1");
    const CodigoSelect = document.querySelector("#Postal1");

    CidadeSelect.disabled = true;
    CodigoSelect.disabled = true;

    CidadeSelect.length = 1;
    CodigoSelect.length = 1;

    for (let pais in PaisesInfo) {
        PaisSelect.options[PaisSelect.options.length] = new Option(pais, pais);
    }

    PaisSelect.onchange = (e) => {
        CidadeSelect.disabled = false;

        CidadeSelect.length = 1;
        CodigoSelect.length = 1;

        for (let cidade in PaisesInfo[e.target.value]) {
            CidadeSelect.options[CidadeSelect.options.length] = new Option(cidade, cidade);
        }
    }

    CidadeSelect.onchange = (e) => {
        CodigoSelect.disabled = false;

        CodigoSelect.length = 1;

        let zips = PaisesInfo[PaisSelect.value][CidadeSelect.value];

        for (let i = 0; i < zips.length; i++) {
            CodigoSelect.options[CodigoSelect.options.length] = new Option(zips[i], zips[i]);
        }
    }
    let Pais = document.getElementById("pais");
    let Cidade = document.getElementById("cidade");
    let Codigo = document.getElementById("postal");
    let ButaoSubmeter =document.getElementById("Confirmar");
    ButaoSubmeter.addEventListener("click", function (){
        if(CidadeSelect.value === "" || PaisSelect.value=== ""|| CodigoSelect.value === ""){
            alert("Existe campos nao escolhidos!");
        }
        else{
            Pais.placeholder=PaisSelect.value;
            Cidade.placeholder=CidadeSelect.value;
            Codigo.placeholder=CodigoSelect.value;
            popup.classList.remove("open-popup");
        }
    })
};