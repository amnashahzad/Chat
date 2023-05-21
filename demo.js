let questionNum = 0;
// keep count of question, used for IF condition.
let question = '<h1>what is your name?</h1>';				  // first question

let output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question
function bot() { 
  let input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>Hello ' + input + '</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>how old are you?</h1>';			    	// load next question		
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>That means you were born in ' + (2022 - input) + '</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>where are you from?</h1>';	
    setTimeout(timedQuestion, 1000);
    }   
    else if (questionNum == 2) {
        // output.innerHTML = 
        document.getElementById("input").value = "";   
        question = '<h1>Ok Thats Good </h1>';	
        setTimeout(timedQuestion, 1000);
        }
        else if (questionNum == 3) {
            // output.innerHTML = 
            document.getElementById("input").value = "";   
            question = '<h1>See you tommorrow</h1>';	
            setTimeout(timedQuestion, 1000);
            }
            else if (questionNum == 4) {
                // output.innerHTML = 
                document.getElementById("input").value = "";   
                question = '<h1>Allah Hafiz</h1>';	
                setTimeout(timedQuestion, 1000);
                }
                else if (questionNum == 5) {
                  // output.innerHTML = 
                  document.getElementById("input").value = "";   
                  question = '<h1>Bye</h1>';	
                  setTimeout(timedQuestion, 1000);
                  }
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
