window.addEventListener('load', () => {
    new Glider(document.querySelector('.contenedor-herramientas'), {
        slidesToShow: 1,
        dots: '.indicadores',
        arrows: {
          prev: '.flecha-izquierda',
          next: '.flecha-derecha' }
    });
})