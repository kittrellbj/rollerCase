/* rollerCase.js changes the text you type to alternating capitals and lowercase 
/  letters. It is a simple function that has no obvious real-world usage, but it was 
/  fun to make. */

var defaultMessage = ' '; // Cannot be empty
defaultMessage = prompt('Please enter the text:');
console.log(rollerCase(defaultMessage));
document.getElementById("idPageloc").innerHTML = rollerCase(defaultMessage); // Change text on HTML page

function rollerCase(inputText) {
    var trackCase = 0;
    var messageOutput = ''; // Cannot be empty
    var messageArray = inputText.split("");
    for (i = 0; i < messageArray.length; i++) {
        if (trackCase === 1) {
            messageOutput += messageArray[i].toUpperCase();
            trackCase = 0;
        } else {
            messageOutput += messageArray[i].toLowerCase();
            trackCase = 1;
        }
    }
    return messageOutput;
}