//Create variables for dependencies
var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var fs = require('fs');

//Use npm inquirer to prompt user for which type of flashcard user would like to make
 inquirer.prompt([	
 	{													
 	type: 'list',														
    message: 'What type of flashcard would you like to add?',	
    choices: ['Add Basic Flashcard', 'Add Cloze Deletion Flashcard'],	
    name: 'cardChoice'	
    }										
  ]).then(function (answer) {												
  
  	//Switch statement for Basic or Cloze Flashcards
    switch (answer.cardChoice) {
		case 'Add Basic Flashcard':
			createBasic();
            break;

        case 'Add Cloze Deletion Flashcard':
         	createCloze();
            break;

        default:
            console.log('Pick one of the two options'); 
    }
});

//Create Basic Flashcrad function
function createBasic(){
	//npm inquirer to prompt for text for front and back of flashcard
	inquirer.prompt([
        {
           	type: "input",
                message: "Enter question for front of flashcard.",
                name: "front"
        },

        {
            type: "input",
              	message: "Enter answer for back of flashcard.",
                name: "back"
		}

     ]).then(function(answer) {
        var newBasic = new BasicCard(answer.front, answer.back);
        newBasic.createCard();
        newCard();
        });
    };

//Create Cloze Flashcrad function
function createCloze(){
	//npm inquirer to prompt for entire text and cloze
    inquirer.prompt([
        {
            type: 'input',
                message: 'Please enter entire sentence.',
                name: 'text'
        },

        {
            type: 'input',
                message: 'Please enter keyword.',
                name: 'cloze'
		}
			
    ]).then(function(answer) {
        var newCloze = new ClozeCard(answer.text, answer.cloze);
            newCloze.createCardCloze();
            newCard();
           });
    };


//Function for new flashcard creation
function newCard() {
    inquirer.prompt([{
        name: 'next',
        message: 'What would you like to do next?',
        type: 'list',
        choices: [{
        	name: 'New Basic Card'
        },{
            name: 'New Cloze Card'
        	
        },{
            name: 'Exit'
        }]
   
    }]).then(function(answer) {
        if (answer.next === 'New Basic Card') {
            createBasic();
        } else if (answer.next === 'New Cloze Card') {
            createCloze();
        } else if (answer.next === 'Exit') {
            return;
        }
    });
};