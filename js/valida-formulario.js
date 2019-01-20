/******************  VALIDAÇÃO DO FORMULÁRIO  *****************************/


var nome = document.querySelector(".nome");
var email = document.querySelector(".email");
var cidade = document.querySelector(".cidade");
var telefone = document.querySelector(".phone_with_ddd");
var assunto = document.querySelector(".assunto");
var mensagem = document.querySelector(".mensagem");

var botao = document.querySelector('.botao');
var erros = document.querySelector('#erros');

botao.addEventListener("click", function(event) {
	event.preventDefault();
	
	if(nome.value == ''  || email.value == '' || cidade.value == '' || telefone.value == '' || assunto.value == '' || assunto.value == ''){
		erros.classList.remove('invisivel');
	}

	form.reset();
});

