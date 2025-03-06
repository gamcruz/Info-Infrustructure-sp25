const scoresUlRef = document.querySelector("#scores");

const scores = ["95", "72", "88", "45", "60", "79", "82", "91", "50", "38"];

console.table(scores);


for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    console.log(score);

    scoresUlRef.innerHTML += "<li>" + score + "</li>";
    
}

let sum = 95 + 72 + 88 + 45 + 60 + 79 + 82 + 91 + 50 + 38;
let remainder = sum / 10;
console.log(remainder);


