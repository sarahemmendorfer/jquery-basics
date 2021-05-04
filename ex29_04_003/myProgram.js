$(document).ready(function(){

// 1. Use um método jQuery para retornar o conteúdo de texto de um elemento <div>.ele

    var ex1 = $("#div1").text();
    alert(`Ex 1: ${ex1}`);

// 2. Use um método jQuery para retornar o conteúdo HTML de um elemento <div>.

    var ex2 = $("#div1").html();
    alert(`Ex 2: ${ex2}`);

// 3. Use um método jQuery para retornar o endereço URL de um link.

    var ex3 = $("a").attr("href");
    alert(`Ex 3: ${ex3}`);


// 4. Use um método jQuery para alterar o texto de um elemento <div> para "Hello World".

    $("#div2").html("<p>Hello World</p>");

// 5. Use um método jQuery para alterar o valor do src atributo de uma imagem para "myimage.jpg".

    $("img").attr("src", "img/myimage.jpg");
    
// 6. Use jQuery para alterar o texto de um link para "Demo", e altere o valor do atributo href para "www.demo.com".

   $("#myLink").text("Demo");
   $("#myLink").attr("href", "https://www.globo.com.br/");

// 7. Use um método jQuery para inserir o texto "SIM!" no final de um elemento <p>.

    $("#div3 #text1").append("SIM!");

// 8. Use um método jQuery para inserir o texto "SIM!" no início de um elemento <p>.

    $("#div3 #text2").prepend("SIM!");

// 9. Use um método jQuery para remover um elemento <div>.

    $("#div4").remove();

// 10. Use um método jQuery  para remover apenas os elementos filho de um elemento <div>.

    $("#div5").empty();

// 11. Use um método jQuery para remover todos os elementos <div> com class = "test" e class = "demo".

    $("div").remove(".test, .demo");

});