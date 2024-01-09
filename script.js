var cardPrincipal = document.querySelector('.card-principal');

cardPrincipal.addEventListener('mouseenter', function() {
  cardPrincipal.style.transform = 'scale(1.1)';
});

cardPrincipal.addEventListener('mouseleave', function() {
  cardPrincipal.style.transform = 'scale(1)';
});

var cardSecundario = document.querySelector('.card-secundario');

cardSecundario.addEventListener('mouseenter', function(){
  cardSecundario.style = 'z-index: 2';
});

cardSecundario.addEventListener('mouseleave', function(){
  cardSecundario.style = 'z-index: -1';
})

var cardTerciario = document.querySelector('.card-terciario');

cardTerciario.addEventListener('mouseenter', function(){
  cardTerciario.style = 'z-index: 2';
});

cardTerciario.addEventListener('mouseleave', function(){
  cardTerciario.style = 'z-index: -1';
})