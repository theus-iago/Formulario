const header= document.getElementsByTagName("header")[0];
const main= document.getElementsByTagName("main")[0];
const form= document.getElementById("formulario-cadastro");
const email= document.getElementById("email-cadastro");
const nome= document.getElementById("nome-cadastro");
const data_de_nsc= document.getElementById("data_de_nsc-cadastro");
const senha= document.getElementById("senha-cadastro");

function cadastro() {
header.innerHTML=`email: ${email.value}<br>nome: ${nome.value}<br>data de nascimento: ${data_de_nsc.value}<br>senha: ${senha.value}`;
}