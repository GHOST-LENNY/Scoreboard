let homeEl = document.getElementById("homescore");
let guestEl = document.getElementById("guestscore");
let homeScore = 0;
let guestScore = 0;


function addOneHome() {
homeScore += 1;
// homeScore++;
homeEl.textContent = homeScore;

}

function addTwoHome() {
homeScore += 2;
homeEl.textContent = homeScore;

}

function addThreeHome() {
    homeScore += 3;
homeEl.textContent = homeScore;
}

function addOneGuest() {
    guestScore++;
guestEl.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
guestEl.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
guestEl.textContent = guestScore;
}
