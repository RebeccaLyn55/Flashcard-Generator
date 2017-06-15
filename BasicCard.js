//Require Node FS module
var fs = require('fs');

//Constructor for creating Basic FlashCards with front/back parameters
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    this.createCard = function() {
    	var newBasicCard = new BasicCard(front, back);
    	var logBasicCard = 'Front: ' + newBasicCard.front + ', ' + 'Back: ' + newBasicCard.back;
		fs.appendFile("log.txt", logBasicCard);
       	console.log('Your Flashcard: ' + this.front  + ", " + this.back);
    };
}

//Exporting module for app.js file
module.exports = BasicCard;
