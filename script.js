

var quotesArray = [
    "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit. — Bill Clinton", 
    "There is nothing wrong with America that cannot be cured with what is right in America. — Bill Clinton", 
    "Promising too much can be as cruel as caring too little. — Bill Clinton", 
    "We must teach our children to resolve their conflicts with words, not weapons. — Bill Clinton", 
    "I still believe in a place called Hope. — Bill Clinton", 
    "I met Bill Clinton; he's a very nice guy. Yeah, Bill Clinton's cool. — Ed Sheeran",
    "Bill Clinton was relentless, eloquent and truly charming. — Beth Broderick"
];
var randomNumber = Math.floor(Math.random() * quotesArray.length);
document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '”' + ' — ' + quotesArray[randomNumber].split(' — ')[1];
console.log(quotesArray[randomNumber].split(' — ')[0])