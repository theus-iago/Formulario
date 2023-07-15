function cadastro() {
//Componentes do Cadastro:
const email_cadastro = document.querySelector(".email-cadastro");
const nome = document.querySelector(".nome-cadastro");
const senha_cadastro = document.querySelector(".password-cadastro");
const c_senha = document.querySelector(".c-password");
const btn_cadastro = document.querySelector("#btn-cadastro");
alert(`${nome.value} você foi Cadastrado no Sistema!`);
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
  container.style.cssText='transition:left 1.2s; top:37%; left:-50%;';
  container2.style.cssText='transition:tranform, left 1.2s, 1.2s; top-37%; left:50%; transform:translate(-50%, -37%);';
}
function back() {
  const container = document.querySelector("#container-login");
  const container2 = document.querySelector("#container-cadastro");
  container.style.cssText='transition:left 1.2s; top:37%; left:50%;';
  container2.style.cssText='transition:transform, left 1.2s, 1.2s; top:37%; left:50%; transform:translate(80%, -37%);';
}

