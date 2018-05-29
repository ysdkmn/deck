This is a typical 52 card "French" deck that can be used for any card game involving one or more decks.

To start, generate a deck (default) or a "shoe" of decks using: Deck.generate(numeberOfDecks)

The number of decks defaults to one if no value is entered for the numberOfDecks property.
The deck that is generated is an object consisting of one utility object at index "0" and 52 card objects.
Each card object has the following properties:
rank: 2 through Ace
suit: Hearts, Spades, Diamonds, or Clubs
value: numerical value of the card where face cards are given a value of 10 and Aces are given an array containing two values (1 & 11).
img: local address of corresponding card image
remaining: integer representing the number of copies of the card that remain in the deck (eg. 1 for a regular deck, 6 for a 6 deck shoe, etc.)

Deck.deck = {
  0: {
    img: local address for the back of card image
  },
  1: {
    rank: 2,
    suit: Hearts,
    value: 2,
    img: local address for the 2 of Hearts card image,
    remaining: ineteger; number of 2 of Hearts left in deck/shoe
  }
  2: {...}...
  
Deal a card from the deck using: Deck.deal() 

This method chooses a card at random from the cards remaining in the deck, removes the card from the deck, and returns the card's index number (key) as an integer.
Enjoy!
