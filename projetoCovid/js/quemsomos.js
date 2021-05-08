$(document).ready(function(){

// DIMINUIR TAMANHO QUANDO A TELA DIMINUI
var interval = setInterval(function () {
    var tam = $(window).width();
    if (tam >=1048){
      $("html").css("fontSize", 16);
    }else{
    $("html").css("fontSize", 14);
    } 
 }, 1000);

// ESCONDE A LEGENDA DE TODOS
$(".legendaPuxar1, .legendaPuxar2").hide();

// APARECE A LEGENDA
$("#fotoequipe1").mouseover(function (){  
    $("#legenda1").css('border-radius', '10%').fadeIn(1000);
});

// APARECE A LEGENDA
$("#fotoequipe2").mouseover(function (){  
    $("#legenda2").css('border-radius', '10%').fadeIn(1000)
});

// APARECE A LEGENDA
$("#fotoequipe3").mouseover(function (){  
    $("#legenda3").css('border-radius', '10%').fadeIn(1000)
});

// APARECE A LEGENDA
$("#fotoequipe4").mouseover(function (){  
    $("#legenda4").css('border-radius', '10%').fadeIn(1000)
});

// APARECE A LEGENDA
$("#fotoequipe5").mouseover(function (){  
    $("#legenda5").css('border-radius', '10%').fadeIn(1000)
});


// SOME A LEGENDA
$(".legendaPuxar1, .legendaPuxar2").mouseout(function (){ 
    $(this).fadeOut(1000);
});

    
// QUANDO CLICA NA IMAGEM ACONTECE...
$("#icoinicio").click(function (){

    // IMAGEM DESAPARECE
    $("#imagemGrandePatrocinadores").hide();

    // MUDA ATRIBUTO IMG PARA NOVA IMAGEM
    $("#imagemGrandePatrocinadores").attr("src", "img/vaccinecov.jpg");

    // IMAGEM REAPARECE AOS POUCOS
    $("#imagemGrandePatrocinadores").fadeIn(1000);

    // O TEXTO DE DESCRIÇÃO MUDA
    $("#divPatrocinio11").html("<p>Juntos somos mais fortes! Vimos a epidemia da Covid-19 chegar, se espalhar e tomar conta do mundo. Esta situação nos trouxe uma série de incertezas: Estamos achatando a curva? Quando teremos uma vacina disponível? Nós, empresas da área de tecnologia, nos unimos para ajudar nessa luta.</p> <p>Através de doações de insumos e projetos de apoio às pessoas afetadas nesse período, pretendemos minimizar os impactos da pandemia. A tão sonhada vacina vai chegar! Estamos nos preparando para, assim que possível, adquirir vacinas para aumentar a velocidade de imunização.</p> <p>Enquanto isso, cadastre-se no nosso site e aguarde sua vez se protegendo e se possível <strong>#fiqueemcasa.</strong></p>");
});

// QUANDO CLICA NA IMAGEM ACONTECE...
$("#icosoul").click(function (){

    // IMAGEM DESAPARECE
    $("#imagemGrandePatrocinadores").hide();

    // MUDA ATRIBUTO IMG PARA NOVA IMAGEM
    $("#imagemGrandePatrocinadores").attr("src", "img/soulcodesobre.png");    

    // IMAGEM REAPARECE AOS POUCOS
    $("#imagemGrandePatrocinadores").fadeIn(1000);

    // O TEXTO DE DESCRIÇÃO MUDA
    $("#divPatrocinio11").html("<p>Nossa missão é a formação e o emprego, aplicando os 5 pilares do 'Tech For Good'. Ser uma escola inclusiva, que, através de nossa metodologia ágil, possa capacitar e educar em tecnologia, gerar oportunidades de emprego para todas as gerações, no início ou na ressignificação de carreira, com foco em diversidade e equidade.</p><p> Numa profissão que fomente o bem-estar físico e mental, permitindo o equilíbrio entre a vida profissional e pessoal, através do trabalho remoto, com flexibilidade de horários, além de ser um negócio sustentável e responsável, socialmente.</p> <p>A SoulCode apoia a vacinação! <strong>#fiqueemcasa</strong><p/>");
});

// QUANDO CLICA NA IMAGEM ACONTECE...
$("#icoit").click(function (){

    // IMAGEM DESAPARECE
    $("#imagemGrandePatrocinadores").hide();

    // MUDA ATRIBUTO IMG PARA NOVA IMAGEM
    $("#imagemGrandePatrocinadores").attr("src", "img/sobreitlean.jpg");

    // IMAGEM REAPARECE AOS POUCOS
    $("#imagemGrandePatrocinadores").fadeIn(1000);
    
    // O TEXTO DE DESCRIÇÃO MUDA
    $("#divPatrocinio11").html("<p>A vontade de fazer acontecer foi o que moveu a ideia de começar um negócio e em 1º de fevereiro de 2012, surgiu a IT Lean. Se no vale do silício as empresas começavam em garagens, no caso da IT Lean o primeiro escritório foi uma sala de jantar. No começo, os clientes eram pequenas empresas e profissionais liberais.<p/><p>Tínhamos duas soluções que eram projetos de Scrum e bodyshop, alocação de profissionais para projetos dentro dos clientes. Hoje, com a multiplicação de projetos e aumento da capacidade, estamos prontos para seguir o caminho inevitável do crescimento, sem perder nossos valores e crenças. Acreditamos que juntos somos mais fortes.</p><p>A It Lean apoia a vacinação! <strong>#fiqueemcasa</strong><p/>");
});


// QUANDO CLICA NA IMAGEM ACONTECE...
$("#iconiteo").click(function (){

    // IMAGEM DESAPARECE
    $("#imagemGrandePatrocinadores").hide();

    // MUDA ATRIBUTO IMG PARA NOVA IMAGEM
    $("#imagemGrandePatrocinadores").attr("src", "img/niteosobre.jpg");

    // IMAGEM REAPARECE AOS POUCOS
    $("#imagemGrandePatrocinadores").fadeIn(1000);

    // O TEXTO DE DESCRIÇÃO MUDA
    $("#divPatrocinio11").html("<p>Em 2005, na cidade de São Paulo, SP, a Niteo iniciou suas atividades com um objetivo propulsor: atuar com foco em tecnologias e serviços que transformam dados em informações relevantes para nossos clientes aprimorarem sua produtividade, ampliarem a agilidade dos seus processos e, assim, aumentarem sua eficiência.</p><p> Desde lá, já foram mais de 1 milhão de horas de projetos entregues para mais de 250 empresas. E nunca desviamos do nosso foco! Por isso, pela prática e pela essência, podemos dizer “a Niteo é especialista em Data & Analytics For Business Productivity</p><p>A Niteo apoia a vacinação! <strong>#fiqueemcasa</strong><p/>");
});


// QUANDO CLICA NA IMAGEM ACONTECE...
$("#icotnt").click(function (){

    // IMAGEM DESAPARECE
    $("#imagemGrandePatrocinadores").hide();

    // MUDA ATRIBUTO IMG PARA NOVA IMAGEM
    $("#imagemGrandePatrocinadores").attr("src", "img/tntsobre.jpg");

    // IMAGEM REAPARECE AOS POUCOS
    $("#imagemGrandePatrocinadores").fadeIn(1000);

    // O TEXTO DE DESCRIÇÃO MUDA
    $("#divPatrocinio11").html("<p>O mundo está cheio de obstáculos e não vai parar pra você se preparar. TNT é uma marca de resistência, que te dá energia para encarar e não perder. A resistência da autoexpressão. A resistência das ideias contestadoras. A resistência das atitudes revolucionárias. <p/> <p> Não importa se você contesta através do seu jeito de vestir, ou da música que você ouve, ou das coisas que você grita. Não deixe que a opinião dos outros ganhe. Não deixe que a censura ganhe. Não deixe que os conservadores ganhem. Não deixe que o silêncio ganhe. Não deixe que a vergonha ganhe. Não deixe que o medo ganhe. Quanto maior o desafio, maior a nossa resistência. #PODEVIR</p><p>A TNT Energy Drink apoia a vacinação! <strong>#fiqueemcasa</strong><p/>");
});
});