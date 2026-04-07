let password1 = document.querySelector("#randompwd1");
let password2 = document.querySelector("#randompwd2");

let characters = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',

  // Small letters (26)
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',

  // Numbers (10)
  '0','1','2','3','4','5','6','7','8','9',

  // Symbols (14)
  '!','@','#','$','%','^','&','*','(',')','-','_','=','+'
];


function getRandomCharacter() {
  let randomChar = characters[Math.floor(Math.random() * characters.length)];

  return randomChar;
}


function generatePasswords(length = 15) {
  let pwd1 = [];
  let pwd2 = [];

  for (let i = 0; i < length; i++) {
    let randomCharacter1 = getRandomCharacter();
    let randomCharacter2 = getRandomCharacter();

    pwd1.push(randomCharacter1);
    pwd2.push(randomCharacter2);
  }

  password1.textContent = pwd1.join(""),
  password2.textContent = pwd2.join("");
}
