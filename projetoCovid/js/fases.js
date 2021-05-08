// FUNÇÃO PARA AUMENTAR O TAMANHO DA FONTE
function darZoom(){
    let font = document.getElementsByClassName("btnZoom")[0].src
    if (font.includes("sinal-mais")){
      document.getElementsByClassName("btnZoom")[0].src = "img/sinal-menos.png";
      document.body.style.fontSize = "1.3em"
    } else if (font.includes("sinal-menos")){
      document.getElementsByClassName("btnZoom")[0].src = "img/sinal-mais.png";
      document.body.style.fontSize = "1em"
    }
  }

// FUNÇÃO PARA SELECIONAR A FASE DE ACORDO COM A OCUPAÇÃO DA UTI
function selecionaUti(x){
    var selecaoUti = document.querySelector('input[name="uti"]:checked').value;
    console.log(selecaoUti);
    switch(selecaoUti){
        case'fase1':
            $("#faseUti").css("background-color", "red");
            $("#faseUti h5").text("Fase 1")
            break;
        case'fase2':
            $("#faseUti").css("background-color", "#eb5e28");
            $("#faseUti h5").text("Fase 2")
            break;
        case'fase3':
            $("#faseUti").css("background-color", "#ffc107");
            $("#faseUti h5").text("Fase 3")
            break;
        case'fase4':
            $("#faseUti").css("background-color", "green");
            $("#faseUti h5").text("Fase 4")
            break;
    }
   
}

// FUNÇÃO PARA SELECIONAR A FASE DE ACORDO COM O NÚMERO DE INTERNAÇÕES
function selecionaEnfermaria(x){
    var selecaoEnfermaria = document.querySelector('input[name="enfermaria"]:checked').value;
    console.log(selecaoEnfermaria);
    switch(selecaoEnfermaria){
        case'fase1':
            $("#faseEnfermaria").css("background-color", "red");
            $("#faseEnfermaria h5").text("Fase 1")
            break;
        case'fase2':
            $("#faseEnfermaria").css("background-color", "#eb5e28");
            $("#faseEnfermaria h5").text("Fase 2")
            break;
        case'fase3':
            $("#faseEnfermaria").css("background-color", "#ffc107");
            $("#faseEnfermaria h5").text("Fase 3")
            break;
        case'fase4':
            $("#faseEnfermaria").css("background-color", "green");
            $("#faseEnfermaria h5").text("Fase 4")
            break;
    }           
}

// FUNÇÃO DO ACCORDION
$( function() {
    $( "#accordion" ).accordion();
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
