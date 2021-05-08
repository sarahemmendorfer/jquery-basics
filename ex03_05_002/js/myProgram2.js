$(document).ready(function () {
    $("#myButtons button:nth-child(1)").click(function () {
        $("#main").hide();
    });
    $("#myButtons button:nth-child(2)").click(function () {
        $("#main").show();
    });
    $("#myButtons button:nth-child(3)").click(function () {
        $("#main").toggle(700);
    });
    $("#myButtons button:nth-child(4)").click(function () {
        $("#main").fadeIn();
    });
    $("#myButtons button:nth-child(5)").click(function () {
        $("#main").fadeOut();
    });
    $("#myButtons button:nth-child(6)").click(function () {
        $("#main").fadeTo(1000, 0.2);
    });
    $("#myButtons button:nth-child(7)").click(function () {
        $("#main").fadeToggle( "slow", "linear" );
    });
    $("#myButtons button:nth-child(8)").click(function () {
        $("#main").slideUp(400);
    });
    $("#myButtons button:nth-child(9)").click(function () {
        $("#main").slideDown(400);
    });
    $("#myButtons button:nth-child(10)").click(function () {
        $("#main").slideToggle(400);
    });
});