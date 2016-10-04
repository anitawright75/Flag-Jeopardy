var playerInput = $("#userGuess");                     
var guessCount = 0;                                    
var count = $("#count");                               
var guessList = $("#guessList");                       
var body = document.body;                              
                                                       
                                                       
                                                       
                                                       
$(playerInput).keypress(function (event) {             
    var keyPressed = event.keyCode || event.which;     
    if (keyPressed == '13') {                          
        console.log("Enter was pressed");              
        event.preventDefault();                        
        $("#guessButton").submit();                    
        console.log("am I working");                   
        checkAnswer()                                  
    }                                                  
});                                                    
                                                       
function checkAnswer() {                               
    var answerSubmitted = playerInput.val();           
    var userAnswer = answerSubmitted;                  
                                                       
                                                       
    if(userAnswer.toLowerCase() === "brazil" ) {       
        playerInput.val('');                           
        $('#guessList li').text(answerSubmitted);      
        alert("Correct!  You guessed " + userAnswer)   
    }else{                                             
        alert("Please type in the name of the country")
    }                                                  
}                                                      
                                                       
function appendToPage(storeUserAnswer) {               
    var goToThepage = storeCorrectAnswer               
    console.log('this should be on the page');         
                                                       
} 