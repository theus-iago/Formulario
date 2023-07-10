function go_to_page_cadastros() {
  location.href="cadastros.html";
}
function go_to_page_login() {
  location.href="index.html";
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
function pass() {
  const container = document.querySelector("#container-login");
  const container2 = document.querySelector("#container-cadastro");
  container.style.cssText='transition:left 0.8s; top:20%; left:-50%;';
  container2.style.cssText='transition:left 0.8s; top:20%; left:50%; transform:translate(-50%, -20%);';
}
function back() {
  const container = document.querySelector("#container-login");
  const container2 = document.querySelector("#container-cadastro");
  container.style.cssText='transition:left 0.8s; top:20%; left:50%;';
  container2.style.cssText='top:20%; left:555%;';
}

