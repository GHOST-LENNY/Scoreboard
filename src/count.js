let numCount = document.getElementsByClassName("num-count")[0];
console.log(numCount);
let saveEl = document.getElementById("save-el");


let count = 0;
console.log(count);

function increment() {
  count++;
  numCount.textContent = count;
  console.log("The button was clicked");
}

function save() {
  let countString = count + " -  ";
  saveEl.textContent += countString;
  console.log(countString);
  count = 0;
  numCount.textContent = count;
}
