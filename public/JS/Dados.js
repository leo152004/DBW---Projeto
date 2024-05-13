
console.log("conected")

//Imagem de Perfil
let profilePicture=document.getElementById("display");
let inputFile=document.getElementById("input-file");
inputFile.onchange=function (){
    profilePicture.src=URL.createObjectURL(inputFile.files[0]);
}
//POP-UP
let popup = document.getElementById("popup");
let popup2 =document.getElementById('popup2')
function openPopUp(){
    popup.classList.add("open-popup");
}
function openPopUp2(){
    popup2.classList.add("open-popup2");
}
const usernameSelect = document.querySelector("#usernameText");
const EmailSelect = document.querySelector("#emailText");
const PasswordSelect = document.querySelector("#passwordText");
let username = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");


let ButaoSubmeter2 =document.getElementById("Confirmar2");
ButaoSubmeter2.addEventListener("click", function (){
    if(usernameSelect.value === "" || EmailSelect.value=== ""|| PasswordSelect.value === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tente de Novo!",
        });
    }
    else{
        username.placeholder=usernameSelect.value;
        email.placeholder=EmailSelect.value;
        password.placeholder=PasswordSelect.value;
        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Os Dados foram guardados com sucesso!",
            showConfirmButton: false,
            timer: 1500
        });
        popup2.classList.remove("open-popup2");
    }
})
function closePopUp2(){
    let timerInterval2;
    Swal.fire({
        title: "Closing...",
        html: "I will close in <b></b> milliseconds.",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval2 = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval2);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            popup2.classList.remove("open-popup2");
            console.log("I was closed by the timer");
        }
    });
}
function closePopUp(){
    let timerInterval;
    Swal.fire({
        title: "Closing...",
        html: "I will close in <b></b> milliseconds.",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            popup.classList.remove("open-popup");
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
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
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Tente de Novo!",
            });
        }
        else{
            Pais.placeholder=PaisSelect.value;
            Cidade.placeholder=CidadeSelect.value;
            Codigo.placeholder=CodigoSelect.value;
            Swal.fire({
                position: "middle",
                icon: "success",
                title: "Os Dados foram guardados com sucesso!",
                showConfirmButton: false,
                timer: 1500
            });
            popup.classList.remove("open-popup");
        }
    })
};