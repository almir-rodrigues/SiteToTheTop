//Transição do nav menu no evento de scroll da pagina
var srcInicial = "assets/images/logolight.png";
var srcFinal = "assets/images/logodark.png"
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 70){
           $(".nav").addClass("scrolled");
           $("#nav-logo").attr("src", srcInicial );
           $(".nav-menu-option").css("color", "#fff");
           $(".navbar-social").find("span").css("color", "#fff");
           $(".navbar-social").find("a").css("color", "#fff");
           $(".login-bnt").css("color", "#fff"); 
           $(".login-bnt").css("border", "1px solid #fff");        
        } 
        else if ($(window).scrollTop() < 70) {
           $(".nav").removeClass("scrolled");
           $("#nav-logo").attr("src", srcFinal);
           $(".nav-menu-option").css("color", "#000");
           $(".navbar-social").find("span").css("color", "#000");
           $(".navbar-social").find("a").css("color", "#000");
           $(".login-bnt").css("color", "#000"); 
           $(".login-bnt").css("border", "1px solid #000");    
        }
   });
});


//Função para abrir o SubMenu de Empréstimos onClick
var subMenu1 = document.getElementById("sub-menu-1");
var icon1 = document.getElementById("icon-1")
var arrow1 = document.getElementById("emprestimos-arrow")
var submenuarrow1 = document.getElementById("close-arrow")
icon1.onclick = function(){
    if (subMenu1.style.display == "block"){
 // if (subMenu1.style.display == "block" && subMenu2.style.display == "none" && subMenu2.style.display == "none"){
        subMenu1.style.display = "none"
        arrow1.className = "fa fa-angle-down"
    }
    else {
        subMenu1.style.display = "block"
        arrow1.className = "fa fa-angle-up"
        subMenu2.style.display = "none"
        arrow2.className = "fa fa-angle-down"
        subMenu3.style.display = "none"
        arrow3.className = "fa fa-angle-down"
    }
}
submenuarrow1.onclick = function(){
    if (subMenu1.style.display == "block"){
        subMenu1.style.display = "none"
        arrow1.className = "fa fa-angle-down"
    }
}

//Função para abrir o SubMenu de Investimentos onClick
var subMenu2 = document.getElementById("sub-menu-2");
var icon2 = document.getElementById("icon-2")
var arrow2 = document.getElementById("investimentos-arrow")
var submenuarrow2 = document.getElementById("close-arrow2")
icon2.onclick = function(){
    if (subMenu2.style.display == "block"){
        subMenu2.style.display = "none"
        arrow2.className = "fa fa-angle-down"
    }
    else {
        subMenu1.style.display = "none"
        arrow1.className = "fa fa-angle-down"
        subMenu2.style.display = "block"
        arrow2.className = "fa fa-angle-up"
        subMenu3.style.display = "none"
        arrow3.className = "fa fa-angle-down"
    }
}
submenuarrow2.onclick = function(){
    if (subMenu2.style.display == "block"){
        subMenu2.style.display = "none"
        arrow2.className = "fa fa-angle-down"
    }
}

//Função para abrir o SubMenu de Créditos onClick
var subMenu3 = document.getElementById("sub-menu-3");
var icon3 = document.getElementById("icon-3")
var arrow3 = document.getElementById("creditos-arrow")
var submenuarrow3 = document.getElementById("close-arrow3")
icon3.onclick = function(){
    if (subMenu3.style.display == "block"){
        subMenu3.style.display = "none"
        arrow3.className = "fa fa-angle-down"
    }
    else {
        subMenu1.style.display = "none"
        arrow1.className = "fa fa-angle-down"
        subMenu2.style.display = "none"
        arrow2.className = "fa fa-angle-down"
        subMenu3.style.display = "block"
        arrow3.className = "fa fa-angle-up"
    }
}
submenuarrow3.onclick = function(){
    if (subMenu3.style.display == "block"){
        subMenu3.style.display = "none"
        arrow3.className = "fa fa-angle-down"
    }
}



var sideMenu = document.getElementById("bar");
var sideItems = document.getElementById("navbar");

sideItems.style.right = "-360px";

sideMenu.onclick = function(){
    if (sideItems.style.right == "-360px"){
        sideItems.style.right = "0"
    }
    else {
        sideItems.style.right = "-360px"
    }
}




var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
  });