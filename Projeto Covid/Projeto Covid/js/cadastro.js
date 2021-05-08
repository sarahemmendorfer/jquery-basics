// FUNÇÃO PARA AUMENTAR O TAMANHO DA FONTE
function darZoom() {
  let font = document.getElementsByClassName("btnZoom")[0].src
  if (font.includes("sinal-mais")) {
    document.getElementsByClassName("btnZoom")[0].src = "img/sinal-menos.png";
    document.body.style.fontSize = "1.3em"
  } else if (font.includes("sinal-menos")) {
    document.getElementsByClassName("btnZoom")[0].src = "img/sinal-mais.png";
    document.body.style.fontSize = "1em"
  }
}

// FUNÇÃO PARA MOSTRAR O RELÓGIO
var arrayDia = new Array(7);
arrayDia[0] = "Domingo";
arrayDia[1] = "Segunda";
arrayDia[2] = "Terça";
arrayDia[3] = "Quarta";
arrayDia[4] = "Quinta";
arrayDia[5] = "Sexta";
arrayDia[6] = "Sábado";

var arrayMes = new Array(12);
arrayMes[0] = "Janeiro";
arrayMes[1] = "Fevereiro";
arrayMes[2] = "Março";
arrayMes[3] = "Abril";
arrayMes[4] = "Maio";
arrayMes[5] = "Junho";
arrayMes[6] = "Julho";
arrayMes[7] = "Agosto";
arrayMes[8] = "Setembro";
arrayMes[9] = "Outubro";
arrayMes[10] = "Novembro";
arrayMes[11] = "Dezembro";

function mostrarDataHora(hora, diaSemana, dia, mes, ano) {
  var retorno = "" + hora + ""
  retorno += "" + diaSemana + ", " + dia + " de " + mes + " de " + ano;
  document.getElementById("datahora").innerHTML = retorno;
}

function atualizarDataHora() {
  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var diaSemana = getDiaExtenso(dataAtual.getDay());
  var mes = getMesExtenso(dataAtual.getMonth());
  var ano = dataAtual.getFullYear();
  var hora = dataAtual.getHours();
  var minuto = dataAtual.getMinutes();
  var segundo = dataAtual.getSeconds();
  var horaImprimivel = hora + ":" + minuto + ":" + segundo + " ";
  mostrarDataHora(horaImprimivel, diaSemana, dia, mes, ano);
};

function getMesExtenso(mes) {
  return this.arrayMes[mes];
};

function getDiaExtenso(dia) {
  return this.arrayDia[dia];
};

// FUNÇÃO SCROLL APARECE H2 QUANDO ROLA A PÁGINA
$(document).ready(function (){
  $("#sec_cadastro").hide(1000);
});

$(window).scroll(function () {
  $("#sec_cadastro").show("slow");
});

// FUNÇÃO FOCUS NOS CAMPOS DE INPUT QUANDO CLICA
$("input").focus(function () {
  $(this).css("background", "#b4b4b4");
});

// CONFLITOU COM BLUR DO HTML
// $("input").blur(function (){
//   $(this).css("background-color", "#eeeeee")
// });


// data de nascimento

// validações

// Requisito UI : Progress Bar
var contador = 1;
let inputsContados = [];

$(function () {
  $("#progressbar").progressbar({ value: 0 }); 
});

// Tira o vermelho
// function tirarVermelho(campo) {
//   campo.style.background = "#f2fdfd";
// }

// FUNÇÃO VERIFICANDO INPUTS PARA PREENCHER A BARRA DE PROGRESSO DO JQUERY UI
function verificaInputs(input) {
  if (input.value == "") {
      input.style.background = "#f6cacc";
      if (inputsContados.includes(input.id)) {
          let index = inputsContados.indexOf(input.id);
          inputsContados.splice(index, 1);
          contador -= 9;
          if (contador < 100) $("#completo").text("");
      }
  } else {
      if (inputsContados.includes(input.id)) {
          return;
      }
      inputsContados.push(input.id);
      contador += 9;
      if (contador >= 100) $("#completo").text("OK!");
  }
  (progressbar = $("#progressbar")),
      (progressbarValue = progressbar.find(".ui-progressbar-value"));

  progressbar.progressbar("option", {
      value: contador,
  });
}

// FUNÇÃO PARA VALIDAR IDADE Não pode idade negativa ou maior que 130 anos
function validaDia(valor) {
  let numero = valor.value;

  if (numero == "") {
      return;
    } else if (numero > 31 || numero < 1) {
    document.getElementById("dia");
    alert("Dia inválido!");
    valor.value = "";
  }
  document.getElementById("dia");
}

// FUNÇÃO PARA VALIDAR O ANO
function validaAno(valor) {
  let numero = valor.value;

  if (numero == "") {
    return;
  } else if (numero > 2021 || numero < 1890) {
    document.getElementById("ano");
    alert("Ano inválido!");
    valor.value = "";
  }
  document.getElementById("ano");
}


// VALIDANDO IDADE DO USUÁRIO
function validaIdade() {

  var diaNasc = document.getElementById("dia").value
  var mesNasc = document.getElementById("mes").value
  var anoNasc = document.getElementById("ano").value

  var dataAtual = new Date(),
    anoAtual = dataAtual.getFullYear()
  mesAtual = dataAtual.getMonth() + 1
  diaAtual = dataAtual.getDate()
  var idade = 0;
  idade = anoAtual - anoNasc;

  if (mesAtual > mesNasc || mesAtual == mesNasc && diaAtual < diaNasc) {
    idade--;
  }

  console.log(idade)
}


//VERIFICANDO Se está gestante
$(document).ready(function () {
  $("#sec_gestante").hide()
})

function VerificaSexo() {
  var sexo = document.getElementById("sexo").value;
  var feminino = document.getElementById("sec_gestante");


  if (sexo == "feminino") {
    $(feminino).show();
  } else {
    $(feminino).hide();
    return;
  }
}

//Validação do CPF

function VerificaCPF() {
  strCpf = document.getElementById("cpf").value;
  var soma = 0;
  var resto;

  if (strCpf == "00000000000" || strCpf.length != 11) {
    document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
    return false;
  }

  for (i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(9, 10))) {
    document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
    return false;
  }

  soma = 0;

  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(10, 11))) {
    document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
    return false;
  }
  document.getElementById("cpf").style.background = "#f2fdfd";
  return true;
}


// Calculo IMC

var imc = 0;

function calculoImc() {
  let peso = $("#peso")[0].value;
  let altura = $("#altura")[0].value;
  if (peso != "" && altura != "") {
    imc = peso / (altura / 100) ** 2;
    if (imc >= 50) {
      $("#obesidade")[0].value = "Sim";
    } else {
      $("#obesidade")[0].value = "Não";
    }
  }
}


// Validação e mensagem de aprovaçao ou nao da vacina
function blocoExibicao() {
  // Testa se foi completo o formulario
  if (contador < 100) 
    return;
  let vacinar = false;

  // Testa se é obeso 
  if ($("#obesidade")[0].value == "Sim") vacinar = true;

  // Testa outras comorbidades
  let comorbidades = $(".comorbidades");
  for (let item of comorbidades) {
    if (item.control.checked) vacinar = true;
  }

  // Testa a profissão
  if ($("#profissao").selected) vacinar = true;

  // Testa Gestante
  if ($("#gestante")[0][1].selected) vacinar = true;

  // Testa Idade
  if ($("#ano")[0].value < 1961) vacinar = true;

  //Mostra a mensagem pro usuário
  $("#resultado-cadastro").show();
  if (vacinar) {
    $("#resultado-cadastro p").text(
      `Olá ${$("#nome")[0].value
      }, você já se enquadra nos grupos que estão sendo vacinados. Em breve entraremos em contrato para agendar seu horário.`
    );
  } else {
    $("#resultado-cadastro p").text(
      `Olá ${$("#nome")[0].value
      }, você ainda não se enquadra nos grupos que estão sendo vacinados. Aguarde a sua vez.`
    );
  }
}


