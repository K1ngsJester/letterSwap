let wordArray = [];
let wordChanged = [];

let startBTN = document.getElementById("StartProg");
let SwapBTN = document.getElementById("SwapLetters");
let wordSec1 = document.getElementById("wordList1");
let wordSec2 = document.getElementById("wordList2");
let cBox = document.getElementById("colorBox");


startBTN.addEventListener("click",startWordGathering);

function startWordGathering(){
  let i = 0;
  startBTN.style.display="none";
  for (; i < 3; i++){
    wordArray [i] = window.prompt("Please enter a word");
  }
  wordArray.forEach(renderList);

  SwapBTN.style.display="block";
}
function renderList(element){
  let li = document.createElement('li');
  wordSec1.appendChild(li);
  li.innerHTML=li.innerHTML + element;
}

SwapBTN.addEventListener("click",swapLetters);

function swapLetters(){
  introScreen.style.display="none";
  swapScreen.style.display="block";
  wordChanged = wordArray.map(letterChange);
  wordChanged.forEach(renderList2);
}
function letterChange(item){
  item = item.trim();
  let x = item.slice(0, 1);
  let y = item.slice(-1);
  return y + item.slice(1, -1) + x;
}
function renderList2(element){
  let li = document.createElement('li');
  wordSec2.appendChild(li);
  li.innerHTML=li.innerHTML + element;
}

