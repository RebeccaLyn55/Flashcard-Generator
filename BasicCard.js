//Require Node FS module
var fs = require('fs');

//Constructor for creating Basic FlashCards with front/back parameters
var Basic = function(front,back){
	this.front=front;
	this.back=back;
}





//Must save object user inputs - txt file (use fs.append, as fs.write will write over data each time)
fs.appendFile('log.txt', JSON.stringify(newResult), function(err)  {
  if (err) throw err;
  console.log('The file has been saved!');
});


//Exporting module for app.js file
module.exports = BasicCard;