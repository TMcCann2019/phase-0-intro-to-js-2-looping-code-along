// Code your solutions in this file
function writeCards(names, eventName){
    let messages = [];
    for (let i = 0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }
    return messages;
}

function countDown(number){
    let count = number
    while (count >= 0){
        console.log(count)
        count = count - 1
    }
}

function calledWithExactly(number){
    let count = 4;
    while (count >= 0){
        console.log(count);
        count = count - 1;
    }
}
