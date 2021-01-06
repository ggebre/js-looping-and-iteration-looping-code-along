// Code your solutions in this file
function writeCards(names) {
    let messages = [];
    for(let i=0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messages
}

function countDown(number) {
    let i = number;

    while (i >= 0) {
        console.log(i);
        i--;
    }
    // for(let i = number; i >= 0; i--){
    //     console.log(i)
    // }
}