
let fruitEmoji = ["🍎", "🍊", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.querySelector("#apple-shelf");
let orangeShelf = document.querySelector("#orange-shelf");


function arrangeShelf () {
for ( let i = 0; i < fruitEmoji.length; i++ ) {
let orange = "🍊";
let apple = "🍎";
    if(fruitEmoji[i] === orange) {
orangeShelf.textContent += fruitEmoji[i];
// orangeShelf.textContent = fruitEmoji[i].join(" ")

    } else if (fruitEmoji[i] === apple ) {
        appleShelf.textContent += fruitEmoji[i] 
    }
}

}

arrangeShelf();
