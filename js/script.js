//Transição do nav menu no evento de scroll da pagina
var srcInicial = "assets/images/logolight.png";
var srcFinal = "assets/images/logodark.png"
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $(".nav").addClass("scrolled");
            //    $("#nav-logo").attr("src", srcInicial );
            $(".nav-menu-option").css("color", "#fff");
            $(".navbar-social").find("span").css("color", "#fff");
            $(".navbar-social").find("a").css("color", "#fff");
            $(".login-bnt").css("color", "#fff");
            $(".login-bnt").css("border", "1px solid #fff");
        }
        else if ($(window).scrollTop() < 70) {
            $(".nav").removeClass("scrolled");
            //    $("#nav-logo").attr("src", srcFinal);
            $(".nav-menu-option").css("color", "#000");
            $(".navbar-social").find("span").css("color", "#000");
            $(".navbar-social").find("a").css("color", "#000");
            $(".login-bnt").css("color", "#000");
            $(".login-bnt").css("border", "1px solid #000");
        }
    });
});


//Função para abrir e fechar os Sub-Menu adicionando e removendo a class "smenu-show",
//com troca na aparecencia do menu selecionado através das classes "smenu-selected" e "fa-angle-up"
//Sub-menu "Empréstimos"
$('#icon-1').on('click', function () {
    $('.sub-menu-1').toggleClass("smenu-show");
    $('.sub-menu-2').removeClass("smenu-show");
    $('.sub-menu-3').removeClass("smenu-show");
    $('#emprestimos-arrow').toggleClass("fa-angle-up");
    $(this).toggleClass("smenu-selected");
    $('#icon-2').removeClass("smenu-selected");
    $('#icon-3').removeClass("smenu-selected");
})
$('#close-arrow').on('click', function () {
    $('.sub-menu-1').removeClass("smenu-show");
    $('#emprestimos-arrow').toggleClass("fa-angle-up");
    $('#icon-1').removeClass("smenu-selected");
})

//Sub-menu "investimentos"
$('#icon-2').on('click', function () {
    $('.sub-menu-1').removeClass("smenu-show");
    $('.sub-menu-2').toggleClass("smenu-show");
    $('.sub-menu-3').removeClass("smenu-show");
    $('#investimentos-arrow').toggleClass("fa-angle-up");
    $(this).toggleClass("smenu-selected");
    $('#icon-1').removeClass("smenu-selected");
    $('#icon-3').removeClass("smenu-selected");
})
$('#close-arrow-2').on('click', function () {
    $('.sub-menu-2').removeClass("smenu-show");
    $('#investimentos-arrow').toggleClass("fa-angle-up");
    $('#icon-2').removeClass("smenu-selected");
})

//Sub-menu "Créditos"
$('#icon-3').on('click', function () {
    $('.sub-menu-1').removeClass("smenu-show");
    $('.sub-menu-2').removeClass("smenu-show");
    $('.sub-menu-3').toggleClass("smenu-show");
    $('#creditos-arrow').toggleClass("fa-angle-up");
    $(this).toggleClass("smenu-selected");
    $('#icon-1').removeClass("smenu-selected");
    $('#icon-2').removeClass("smenu-selected");
});
$('#close-arrow-3').on('click', function () {
    $('.sub-menu-3').removeClass("smenu-show");
    $('#creditos-arrow').toggleClass("fa-angle-up");
    $('#icon-3').removeClass("smenu-selected");
});

//Função para fechar o sub-menu clicando fora do elemento aberto
$(document).on('click', function (event) {
    if (!$(event.target).closest('#icon-1, #sub-menu-1').length) {
        $('.sub-menu-1').removeClass("smenu-show");
        $('#emprestimos-arrow').removeClass("fa-angle-up");
        $('#icon-1').removeClass("smenu-selected");
    }
    if (!$(event.target).closest('#icon-2, #sub-menu-2').length) {
        $('.sub-menu-2').removeClass("smenu-show");
        $('#investimentos-arrow').removeClass("fa-angle-up");
        $('#icon-2').removeClass("smenu-selected");
    }
    if (!$(event.target).closest('#icon-3, #sub-menu-3').length) {
        $('.sub-menu-3').removeClass("smenu-show");
        $('#creditos-arrow').removeClass("fa-angle-up");
        $('#icon-3').removeClass("smenu-selected");
    }
});



$('#bar').on('click', function(){
    $('#small-menu').toggleClass("small-menu-hide");
});

$('#ssub-1').on('click', function(){
    $('.ss-menu-1').toggle();
    $('#ssub-arrow-1').toggleClass("fa-angle-up");
});

$('#ssub-2').on('click', function(){
    $('.ss-menu-2').toggle();
});

$('#ssub-3').on('click', function(){
    $('.ss-menu-3').toggle();
});



var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 00,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
});





//Função de manipulação do Accordion FAQ
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('faq-content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#1880F1";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#134079";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        // for (let j = 0; j < contentDiv.length; j++) {
        //     if (j !== i) {
        //         contentDiv[j].style.height = "0px";
        //         toggles[j].style.color = "#134079";
        //         icons[j].classList.remove('fa-minus');
        //         icons[j].classList.add('fa-plus');
        //     }
        // }
    })
}