let butaoPass = document.getElementById("ButaoPass")
console.log("conected")
let profilePicture=document.getElementById("display");
let inputFile=document.getElementById("input-file");

inputFile.onchange=function (){
    profilePicture.src=URL.createObjectURL(inputFile.files[0]);
}

/*butaoPass.addEventListener("click",function (event){
    event.preventDefault();
    adicionaHTML();
})
function adicionaHTML() {
    // language=HTML
    let html = `
<link rel="stylesheet" href="../CSS/Dados.css">
<div  class="mudaPassword" >
  <P>Insira a Nova Palavra-Passe:</P>
  <label><input type="text" class="password" placeholder="Nova Palavra-Passe"></label>
 </div>`;
    butaoPass.insertAdjacentHTML('afterend', html);
}*/
