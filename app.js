var counter = 0;
/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function moveCounter(){
	counter++;
	var moves = document.getElementsById('moves');
	moves.innerHTML = counter;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//creates an array of all the cards
var allCards = document.querySelectorAll('.card');
//the card to be matched with
var selected = null;
var counter = 0;

allCards.forEach(function(card){
	//on click 
	card.addEventListener('click', function(e){
		//adds the css classes to card

		card.classList.add('open', 'show');
		if(selected != null) {
			//
			if(card.querySelector('i').classList.contains(selected.querySelector('i').classList[1])) {
				//debugging code just my insecurity
				console.log("Bingo!");
				//add css class match to card
				card.classList.add('match');

				selected.classList.add('match');
				selected = null;
				
		}	
			else {
				selected.classList.remove('open', 'show');
				//card.classList.remove('open', 'show');
				selected = card;
			}
		}
		else {
			selected = card;
			
		}

		if(selected != null) {
			setTimeout(function(){
				if(selected != null) {
					selected.classList.remove('open', 'show');
					console.log('flip card back');
					selected = null;
					
					
				}	//var result = moves.innerHTML = "mike";
			}, 2000);
		}
	});

});