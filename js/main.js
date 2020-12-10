// codigo de javascript fuente logico de codigo
// codigo de javascript
console.log("Cod. Javascript");

//preloar 
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
function showPage() {
    document.getElementById("loader_bg").style.display = "none";
    document.getElementById("mybody").style.display = "block";
}  

// codigo de jquery
$(document).ready(function(){
    console.log("Cod. JqueryJS");
});

// boton menu
$(document).ready(function(){
    $("#btnMenu").on( "click", function() {
        $('#myMenu').toggle(); //muestro mediante id
    });
});
