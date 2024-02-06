function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el enlace de WhatsApp
  var whatsappLink = document.getElementById("whatsapp-link");

  // URL de WhatsApp con el número de teléfono y mensaje predefinido
  var whatsappUrl = "https://api.whatsapp.com/send?phone=51965951888&text=" + encodeURIComponent("Buen día, me comunico para obtener más información acerca de los seguros de salud: ");


  // Asigna la URL al atributo href del enlace
  whatsappLink.href = whatsappUrl;
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el enlace de WhatsApp
  var whatsappLink = document.getElementById("whatsapp-link2");

  // URL de WhatsApp con el número de teléfono y mensaje predefinido
  var whatsappUrl = "https://api.whatsapp.com/send?phone=51965951888&text=" + encodeURIComponent("Buen día, me comunico para obtener más información acerca de los seguros de salud: ");


  // Asigna la URL al atributo href del enlace
  whatsappLink.href = whatsappUrl;
});


/*carrusel*/
$(document).ready(function () {
  $('.items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});




