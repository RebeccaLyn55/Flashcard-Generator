//Require Node FS module
var fs = require('fs');
 
 
//Constructor for creating Cloze FlashCards with text and cloze parameters
function ClozeCard(fullText, cloze) {
    this.fullText  = fullText;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, '___________ ');
 
    try{
     	if(this.fullText === this.partial){
        throw('The answer was not found in the question!');
        }
      
        this.createCardCloze = function() {
            var newClozeCard = new ClozeCard(this.fullText, this.cloze);
            var logClozeCard = 'Question: ' + newClozeCard.partial + ', ' + 'Answer: ' + newClozeCard.cloze;
            fs.appendFile("log.txt", logClozeCard);
            console.log('Your Flashcard: ' + this.partial  + ", " + this.cloze);
            };
    } catch (ex) {
		console.log(ex);
    }
 
}
 
 
//Exporting module for app.js file
module.exports = ClozeCard;
 


