let suitDiv = document.getElementById('selectSuit')
let strengthButton = document.getElementById('strength')
let dexterityButton = document.getElementById('dexterity')
let constitutionButton = document.getElementById('constitution')
let intelligenceButton = document.getElementById('intelligence')
let wisdomButton = document.getElementById('wisdom')
let charismaButton = document.getElementById('charisma')

window.onload = evenSize;

function evenSize(){
  var biggestSize = 0
  if (strengthButton.width > biggestSize) {
    biggestSize = strengthButton.width;
  }
  if (dexterityButton.width > biggestSize) {
    biggestSize = dexterityButton.width;
  }
  if (constitutionButton.width > biggestSize) {
    biggestSize = constitutionButton.width;
  }
  if (intelligenceButton.width > biggestSize) {
    biggestSize = intelligenceButton.width;
  }
  if (wisdomButton.width > biggestSize) {
    biggestSize = wisdomButton.width;
  }
  if (charismaButton.width > biggestSize) {
    biggestSize = charismaButton.width;
  }

  strengthButton.width = biggestSize;
  dexterityButton.width = biggestSize;
  constitutionButton.width = biggestSize;
  intelligenceButton.width = biggestSize;
  wisdomButton.width = biggestSize;
  charismaButton.width = biggestSize;
}
