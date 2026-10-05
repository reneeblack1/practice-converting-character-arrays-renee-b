/*Task 1: Decode the Following Reversed Messages
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
arrays dynamically. Then log the messages.
1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam
gnidoC"
2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
gnitirw edoc tuB"
3. Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI
.lanoisseforp a ekil leef ot evah t'nod uoY"
4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
tcefrep eht rof tiaw t'noD .yadot trats tsuJ"*/

let messageOne = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let messageTwo = "!ecitcarp htiw retteb teg ll'uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB"
let messageThree = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY"
let messageFour = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"

let newMessageOne = messageOne.split('').reverse().join('');
let newMessageTwo = messageTwo.split('').reverse().join('');
let newMessageThree = messageThree.split('').reverse().join('');
let newMessageFour = messageFour.split('').reverse().join('');

console.log(newMessageOne);
console.log(newMessageTwo);
console.log(newMessageThree);
console.log(newMessageFour);

/*Task 2: Write your own reverse messages
1. First, write your own short messages of inspiration (without reversing them).
2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamically so that you have a reverse output.
3. Then log the messages.*/

let insperationalMessageOne = "You can do anything you set your mind to"
let insperationalMessageTwo = "Believe in yourself"
let insperationalMessageThree = "The best time to start was yesterday, the second best time is now"

let newInsperationalMessageOne = insperationalMessageOne.split('').reverse().join('');
let newInsperationalMessageTwo = insperationalMessageTwo.split('').reverse().join('');
let newInsperationalMessageThree = insperationalMessageThree.split('').reverse().join('');

console.log(newInsperationalMessageOne);
console.log(newInsperationalMessageTwo);
console.log(newInsperationalMessageThree);

