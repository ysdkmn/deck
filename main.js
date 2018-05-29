$(document).ready(function(){
  showDeck();
});

showDeck = function() {
  Deck.generate();
  for (var key in Deck.deck) {
    $('div').append(`<img style="width: 3rem; margin: 0.5rem;" src='${Deck.deck[key].img}'>`);
  }
};
