"use strict";

let searched = $("#searched");
let clear = $("#delete");
let search = $("#search");
let URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function getData(value) {
  let response = await fetch(URL + value);
  let result = await response.json();
  getInfo(result[0])
  console.log(result[0]);
}

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    // clear.style.display = "none";
    clear.innerHTML = ``;
    searched.classList.toggle("search-hide");
    let value = search.value;
    getData(value);
  } else {
  }
});

function getInfo(result) {
    searched.innerHTML = ""
  const card = createElement(
    "ul",
    classSet,
    `
    <li><h2 class="text-[32px] font-bold">${result.word}</h2></li>
    <li><p class="text-[#8C8B8B]">${result.meanings[0].partOfSpeech}</p></li>
    <li>
    <audio src=" controls"></audio>
    <audio src="${result.phonetics[0].audio}" controls></audio>
    <p class="text-[#8C8B8B]">${result.phonetic}</p>
    </li>
    <li><span class="flex gap-1">${result.meanings[0].definitions[0].definition}</span>
    </li>`
  );

  searched.appendChild(card)
}
getInfo()