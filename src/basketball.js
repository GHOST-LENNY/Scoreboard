let homeEl = document.getElementById("homescore");
let awayEl = document.getElementById("awayscore");
let homeScore = 0;
let awayScore = 0;


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

function addOneAway() {
    awayScore++;
awayEl.textContent = awayScore;
}

function addTwoAway() {
    awayScore += 2;
awayEl.textContent = awayScore;
}

function addThreeAway() {
    awayScore += 3;
awayEl.textContent = awayScore;
}
