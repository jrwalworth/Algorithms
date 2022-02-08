
/*

# Problem Statement: Create a deck of cards using javascript classes.
#

# Overall Plan:
# 1. Define arrays for deck of cards and each card.
# 2. Define arrays for suits and face values.
# 3. Create function for generating an individual card.
# 4. 
# 5. 
*/

//Create class for deck
class Deck {
    constructor(suits = ["Spades", "Hearts", "Clubs", "Diamonds"], 
        vals = [{face: "A", value: 1}, {face: "2", value: 2}, {face: "3", value: 3}, {face: "4", value: 4}, 
            {face: "5", value: 5}, {face: "6", value: 6}, {face: "7", value: 7}, {face: "8", value: 8}, 
            {face: "9", value: 9}, {face: "10", value: 10}, {face: "J", value: 10}, {face: "Q", value: 10}, 
            {face: "K", value: 10}]) {
        this.deck = [];
        //loop to generate new deck of cards
        let nextDeckIndex = 0;
        for(let suit in suits) {
            for(let val in vals) {
                this.deck[nextDeckIndex++] = new Card(suits[suit], vals[val].face, vals[val].value);
            
            }
        }
    }
    //Pull the top(first) card from the deck
    pullFirstCard(deck) {
        //Find the top card
        let topCard = deck[0];
        //remove first value from deck -- reassign index values (loop)
        for (let card = 0; card < deck.length-1; card++) {
            deck[card] = deck[card + 1];
        }
        //decrement deck by 1 (card pulled)
        deck.length = deck.length - 1;
        return topCard;
    }

    // shuffleDeck(deck) {
    //     //randomize cards in deck

    // }

}

class Pile extends Deck {
    //Remove a specific card from the pile of cards
}


//Create class for card
class Card {
    //initialize instructions for the card
    constructor(suit, face, val) {
        this.suit = suit;
        this.face = face;
        this.val = val;
    }
}

let cardDeck = new Deck();
//console.log(cardDeck.deck);
//console.log("---------------------------")
let firstCard = cardDeck.pullFirstCard(cardDeck.deck);

console.log("The card pulled from the top is ", firstCard)
console.log("The remaining deck is: ")
console.log(cardDeck.deck);
