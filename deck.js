const Deck = {

  _deck: {},

  get deck() {
    return this._deck;
  },

  generate(numberOfDecks = 1) {
    //create any multiple of french (52 card) decks (default one deck) in which each card is given an index number of 1-52. A card is defined as having a unique rank and suit.
    // Each card is an object with the following properties:
    // rank: 2 through Ace
    // suit: Hearts, Spades, Diamonds, or Clubs
    // value: numerical value of the card where face cards are given a value of 10 and Aces are given an array containing two values (1 & 11).
    // img: local address of corresponding card image
    // remaining: integer representing the number of copies of the card that remain in the deck (eg. 1 for a regular deck, 6 for a 6 deck shoe, etc.)

    // index 0 holds the image for the back of the cards
    const deck = {
      0: {
        img: './card-imgs/BC.jpg'
      }
    };
    var index = 1;
    // Iterate through rank and suit arrays to create deck/s
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'].forEach(function(rank) {
      ['Hearts', 'Spades', 'Diamonds', 'Clubs'].forEach(function(suit) {
        var value;
        var img_name;
        if (typeof rank === 'number') {
          value = rank;
          img_name = rank.toString() + suit[0];
        } else if (rank === 'Ace') {
          value = [1, 11];
          img_name = rank[0] + suit[0];
        } else {
          value = 10;
          img_name = rank[0] + suit[0];
        }
        deck[index] = {
          rank: rank,
          suit: suit,
          value: value,
          img: `./card-imgs/${img_name}.jpg`,
          remaining: numberOfDecks
        }
        index++;
      });
    });
    this._deck = deck;
    console.log(`Shoe generated with ${numberOfDecks} deck/s.`);
  },

  deal() {
    // deal a card from the deck:
    // create array of indexes of all cards remaining in deck
    var remainingCards = [];
    for (var key in this._deck) {
      if (this._deck[key].remaining > 0) {
        remainingCards.push(key);
      }
    }
    // throw error if there are no cards remaining in deck
    if (remainingCards.length === 0) {
      console.log('%c error: no cards remaining. Please generate a new deck.', 'color: #BA1222')
      return false;
    }
    // randomly select card index number from array of remaining cards
    var remainingCardIndex = Math.floor(Math.random() * remainingCards.length);
    var cardIndex = remainingCards[remainingCardIndex];
    // remove card from deck and return card index number
    this._deck[cardIndex].remaining--;
    return cardIndex;
  },

  showDeck() {
    for (var key in this._deck) {
      $('h1').append(`<img style="width: 5rem;" src='${this._deck[key].img}'>`);
    }
  }
};
