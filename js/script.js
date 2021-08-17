//Transição do nav menu no evento de scroll da pagina
var srcInicial = "assets/images/logolight.png";
var srcFinal = "assets/images/logodark.png"
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 70){
           $(".nav").addClass("scrolled");
           $("#nav-logo").attr("src", srcFinal);
           $(".nav-menu-option").css("color", "#000");
           $(".navbar-social").find("span").css("color", "#6c6c6c");
           $(".navbar-social").find("a").css("color", "#6c6c6c");         
        } else if ($(window).scrollTop() < 70) {
           $(".nav").removeClass("scrolled");
           $("#nav-logo").attr("src", srcInicial);
           $(".nav-menu-option").css("color", "#fff");
           $(".navbar-social").find("span").css("color", "#fff");
           $(".navbar-social").find("a").css("color", "#fff");   
        }
   });
});


//Função para abrir o SubMenu onClick
var subMenu = document.getElementById("sub-menu-1");
var icon = document.getElementById("icon")
var arrow = document.getElementById("arrow")

icon.onclick = function(){
    if (subMenu.style.display == "block"){
        subMenu.style.display = "none"
        arrow.className = "fa fa-angle-down"
    }
    else {
        subMenu.style.display = "block"
        arrow.className = "fa fa-angle-up"
    }
}