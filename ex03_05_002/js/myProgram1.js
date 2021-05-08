$(document).ready(function () {
    $("#button1").click(function () {
        $("#divsInicio div").first().css("background", "red").css("fontSize", "2rem").height(50).width(50).show().fadeTo(1000, 0.1);
        $("#divsInicio div").first().next().css("background", "purple").css("fontSize", "2.5rem").height(100).width(100).show().fadeTo(1000, 0.2);
        $("#divsInicio div").first().next().next().css("background", "grey").css("fontSize", "3rem").height(150).width(150).show().fadeTo(1000, 0.3);;
        $("#divsInicio div").last().css("background", "orange").css("fontSize", "4rem").height(250).width(250).show().fadeTo(1000, 0.5);
        $("#divsInicio div").last().prev().css("background", "green").css("fontSize", "3.5rem").height(200).width(200).show().fadeTo(1000, 0.4);
    });
    $("#button2").click(function () {
        $("#divsInicio div").css("background", "blue").css("fontSize", "5rem").height(150).width(300).show().fadeTo(1, 1.0);
    });

    $("#button3").dblclick(function () {
        $("#divsInicio div").first().hide();
        $("#divsInicio div").first().next().hide();
      });

    $(".changeColor").focus(function () {
        $(this).css("background", "#989898");
    });
    $(".changeColor").blur(function () {
        $(this).css("background", "white");
    });

    $(".changeColor").focusout(function(){
        var content1 = $("#myName").val();
        var content2 = $("#myEmail").val(); 

    if(content1 != "" && content2 != ""){
    $("#mySubmit").click(function () {
        $("#dataSubmit").append("Nome: <span>" + content1 + "</span><br/>");
        $("#dataSubmit").append("Email: <span>" + content2 + "</span>");
    });  
    }
   
});
    
});