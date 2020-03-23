// Challenge 1: Your Age in days 
function ageInDays(){
    var birthDate=  prompt("When were you born ");
    var ageInDayz = (2020 - birthDate)*365;
    console.log(ageInDayz);
    var h1= document.createElement('h1'); // creating a h1 element 
    var textAnswer= document.createTextNode('You are ' + ageInDayz + ' days old'); // craeting the text response 
    h1.setAttribute('id', 'ageInDayz'); // setting the attributes for the h1
    h1.appendChild(textAnswer); // putting the text inside the h1
    document.getElementById('flex-box-result').appendChild(h1); // putting h1 inside the flex box result
}



function reset(){
    document.getElementById('ageInDayz').remove();
}


// challenge 2: cat generator 
function catGenerate(){

    var image= document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src= "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image); 

}

function catReset(){

    document.getElementById('flex-cat-gen').remove();
}


// challenge 3, rock, paper scissors

function decideWinner(botChoice, humanChoice){

}


function rpsGame(yourChoice){

    console.log(yourChoice);
    console.log(yourChoice.id);
    var humanChoice, botChoice;
    humanChoice= yourChoice.id;

    botChoice = numberToChoice(randomToRpsint());
    console.log('Computer choice', botChoice);

    results= decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log(results);

    message= finalMessage(results);  // {message: 'You Won!', 'color': 'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message); 
}

// get the random number 
function randomToRpsint(){
    return Math.floor(Math.random()*3);
}

// get the bots answer 
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice ){
    var rpsDatabase={
        'rock': {'scissors': 1, 'rock':0.5, 'paper':0},
        'paper': {'rock': 1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper': 1, 'scissors':0.5, 'rock':0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }else if(yourScore === 0.5){
        return {'message': 'you tied!', 'color': 'yellow'};
    }else {
        return {'message': 'you won', 'color': 'green'};
    
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    console.log(rpsFrontEnd);   
    var imagesDatabase= {
        'rock': document.getElementById("rock").src,
        'paper': document.getElementById("paper").src,
        'scissors': document.getElementById("scissors").src
    }

        // removing the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML= "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    botDiv.innerHTML= "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    
    messageDiv.innerHTML= "<h1 style='color:" +finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}


// Challenge 4 Change the color of all buttons 

// Collecting all the buttons
var all_buttons= document.getElementsByTagName('button');

var copyAllButtons = [];

for (let i=0; i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);   
console.log('hi');
function buttonColorChange(buttonThingy){
    console.log(buttonThingy.value);
    if (buttonThingy.value==='red'){
        buttonsRed();
    } else if (buttonThingy.value ==='green'){
        buttonsGreen();
    } else if (buttonThingy.value ==='reset'){
        buttonsColorReset();
    }  else if (buttonThingy.value ==='random'){
        randomColors();
    }
}


function buttonsRed(){
    for ( let i =0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');

    }
}



function buttonsGreen(){
   for (let i=0; i< all_buttons.length; i++){
       all_buttons[i].classList.remove( all_buttons[i].classList[1]);
       all_buttons[i].classList.add('btn-success');
   }
}

function buttonsColorReset(){
    for (i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);   

    }
}

function randomColors(){
    let  choices=['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (i =0; i< all_buttons.length; i++){
        randomNumbers= Math.floor(Math.random()*4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumbers]);
    }

}


// Challenge 5: blackjack 

let blackjackGame ={
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},  // object 
    'cards' : ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],                                                                         //array
    'cardsMap' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'Q':10, 'K':10, 'A':[1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,

}

const YOU=blackjackGame['you']
const DEALER= blackjackGame['dealer']
const CARDS= blackjackGame['cards']
//const cardsMap: cardsMap

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound= new Audio('static/sounds/aww.mp3');

// eventListener, once u click then the function will activate 
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit); //same as getElementById

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);



function blackjackHit(){
    if(blackjackGame['isStand']=== false){    
        let card= randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        //console.log(YOU['score']);
    }
 }
// chossing a random card

 function randomCard(){

    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];


 }
 function showCard(card, activePlayer){
    //console.log(CARDS[pickNum]); 
    if (activePlayer['score']<= 21){
        let cardImage= document.createElement('img');
        cardImage.src=`static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
 }
 
 function blackjackDeal(){
    if (blackjackGame['turnsOver']=== true){

        blackjackGame['isStand']= false;
        // showResult(computeWinner());
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        
        for (i=0; i< yourImages.length; i++){
            yourImages[i].remove();

        }``

        for ( i =0; i< dealerImages.length; i++){
            dealerImages[i].remove();
        }

        YOU['score']= 0;
        DEALER['score']=0;
        document.querySelector('#your-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').textContent=0;

        //styling it back to white
        document.querySelector('#your-blackjack-result').style.color=' #ffffff';
        document.querySelector('#dealer-blackjack-result').style.color=' #ffffff';

        document.querySelector('#blackjack-result').textContent="Let's play";
        document.querySelector('#blackjack-result').style.color="black ";

        blackjackGame['turnsOver']= true;
    }
 }


 function updateScore(card, activePlayer){
     //if adding 11 keeps me below 21, add 11. Otherwise, add 1
     if (card =='A'){
         if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
             activePlayer['score'] += blackjackGame['cardsMap'][card][1];
         } else {
             activePlayer['score'] += blackjackGame['cardsMap'][card][0];
         }

     } else {
         activePlayer['score'] += blackjackGame['cardsMap'][card];
     }
 }

function showScore(activePlayer){
    if (activePlayer['score']> 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}
    
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));

}

 async function dealerLogic(){
    
    blackjackGame['isStand'] = true; 

    while (DEALER['score']< 16 && blackjackGame['isStand'] == true){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);  
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

// compute winner and return who won
// update the wins draws and losses 

function computeWinner(){
    let winner;

    if(YOU['score']<= 21){
        // condition: higher score than the dealer or when the dealer bust but ur still under 21 
        if(YOU['score']> DEALER['score'] || DEALER['score']>21){
            blackjackGame['wins']++;
            winner= YOU;
        }else if (YOU['score']< DEALER['score']){
            blackjackGame['losses']++;
            winner= DEALER;
        } else if (YOU['score']=== DEALER['score']){
            blackjackGame['draws']++;
        }
    // condition when user bust but dealer doesnt 
    } else if ( YOU['score']> 21 && DEALER['score']<= 21){
        blackjackGame['losses']++;
        winner = DEALER;

        // consition when u and the dealer busts 
    } else if ( YOU['score'] > 21 && DAELER['score']> 21){
        blackjackGame['draws']++;
    }
    console.log(blackjackGame)
    return winner;
}

function showResult(winner){
    let message, messageColor;

    if (blackjackGame['turnsOver']=== true){
        if (winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message =' you won!';
            messageColor ='green';
            winSound.play();
        } else if ( winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'you lost';
            messageColor= 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'you drew!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;

    }
}