function go_to_page_cadastros() {
  location.href="cadastros.hmtl";
}
function cadastro() {
//Componentes do Cadastro:
const email_cadastro = document.querySelector(".email-cadastro");
const nome = document.querySelector(".nome-cadastro");
const senha_cadastro = document.querySelector(".password-cadastro");
const c_senha = document.querySelector(".c-password");
const btn_cadastro = document.querySelector("#btn-cadastro");
alert(`email: ${email_cadastro.value}`);
}
function login() {
//Componentes do Login:
const email_login = document.querySelector(".email-login");
const nome = document.querySelector(".nome-login");
const senha_login = document.querySelector(".password-cadastro");
const btn_login = document.querySelector("#btn-login");
alert(`Bem-Vindo ao sistema! ${email_login.value}`);
}



