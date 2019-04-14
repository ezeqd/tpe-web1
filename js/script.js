"use strict";
let btnEnviar = document.querySelector(".btnEnviar");
btnEnviar.addEventListener("click", validate);

let captcha = document.querySelector(".captcha");
let valcap = document.querySelector(".validateCap");
let numRandom = Math.floor((Math.random() * 300) + 1);
captcha.innerHTML += numRandom;

function validate (e) {
  let codigo  = captcha.innerHTML;
  let validar = valcap.value;
  if (codigo == validar) {
    alert("Datos ingresados correctamente");
  }
  else {
    alert("Codigo de validación erroneo");
  }
}
