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

// FUNÇÃO SLIDETOGGLE JQUERY QUANDO CLICA NOS BOTÕES APARECEM AS IMAGENS
$('#btn1').click(function (){
  $('.slideFotos').toggle(function (){
    $(".slideFotos").slideDown(800).attr('src', 'img/idoso2.jpg');
  });
});

$('#btn2').click(function (){
  $('.slideFotos').toggle(function (){
    $(".slideFotos").slideDown(800).attr('src', 'img/idoso3.jpg');
  });
});

$('#btn3').click(function (){
  $('.slideFotos').toggle(function (){
    $(".slideFotos").slideDown(800).attr('src', 'img/idoso4.jpg');
  });
});

$('#btn4').click(function (){
  $('.slideFotos').toggle(function (){
    $(".slideFotos").slideDown(800).attr('src', 'img/idoso5.jpg');
  });
});

$('#btn5').click(function (){
  $('.slideFotos').toggle(function (){
    $(".slideFotos").slideDown(800).attr('src', 'img/idoso1.jpg');
  });
});

// FUNÇÃO PARA FUNCIONAR O TABS DO PERGUNTAS FREQUENTES JQUERY UI
$(function () {
  $("#tabs").tabs();
});

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