const textArea = document.querySelector("#text-area");
const countBtn = document.querySelector("#countBtn");
const wordCountInput = document.querySelector("#wordCountInput");
const findWordInput = document.querySelector("#findWordInput");
const findBtn = document.querySelector("#findBtn");
const wordFoundInput = document.querySelector("#wordFoundInput");

countBtn.addEventListener('click', countWords);
findBtn.addEventListener('click', findWords);

function countWords() {
  const textContent = textArea.value;
  const arr = textContent.split(" ");
  printData(arr.length, wordCountInput);
}

function findWords(){
  const foundWords = [];
  const textContent = textArea.value;
  const arr = textContent.split(" ");
  arr. forEach( (item) => {
    if (item === findWordInput.value) {
      foundWords.push(item);
    }
  });
  printData(foundWords.length, wordFoundInput);
}

function printData(data, destination){
    destination.value = data 
}
