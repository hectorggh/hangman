//$( document ).ready(function() {
//    console.log( "ready!" );
//});
//
//$("footer").ready(function(){
//    console.log("El footer está to cargao");
//})
//
//$("footer").css( "border", "9px solid red" );
//
//$("#home").css("color", "red");
//
//$( "div[id='container']" ).css("background-color", "blue");
//
//$(".nav>li").css("border", "2px solid yellow");
//
//$(".list-container li:nth-child(3)").css("background-color","red");
//
//$("li:last-of-type").css("background-color", "orange");
//
//$("div")

$( document ).ready(function() {
    console.log( "ready!" );
    
    $("article>img").addClass("image-center");
    
    $("article>p:last-child").remove();
    
    var $textoinventado = $("<li>",{
        text:"Que pasa carapasa, aquí añadiendo un li muy color"
    });
    $("ol").append($textoinventado);
    
    $(".form-control").on("click",function(){
        var rojo = $('#red').val();
        var azul = $('#blue').val();
        var verde = $('#green').val();
        console.log(rojo);
        console.log(verde);
        $("body").css("background-color", "rgb("+ rojo +","+ verde +","+ azul +")");
    
    });
    
    $("img").on("click",function(){
        this.remove();
    })
    
});