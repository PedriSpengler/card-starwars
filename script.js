var cardPrincipal = document.querySelector('.card-principal');

cardPrincipal.addEventListener('mouseenter', function() {
  cardPrincipal.style.transform = 'scale(1.1)';
});

cardPrincipal.addEventListener('mouseleave', function() {
  cardPrincipal.style.transform = 'scale(1)';
});

