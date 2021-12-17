"use strict";

var mainDiv = document.getElementById('myDiv');

var generateButton = document.getElementById('coolButton');

var tips = ["Yoda was almost played by a monkey.", "The phrase, 'I have a bad feeling about this,'' is said in every Star Wars movie.", "Aliens from the movie E.T appear in The Phantom Menace.", "Jabba the Hut was orgininally meant to be furry.", "The iconic opening crawl at the start of the original films were made with physical effects.", "Carrie Fisher(Leia Organa) slapped Oscar Isaac(Poe Dameron) over 40 times during the filming of The Last Jadi.", "Nobody says the word 'Ewok' in Return of the Jedi.", "Porgs were put into the sequel trilogy to cover up real-life puffins that appeared in several scenes.", "In an early script, Yoda's name was Buffy.", "The famous Blue Milk seen being drank by the Skywalkers and in the Cantina was actually a long-life milk dyed blue and according to Mark Hamill, it did not taste good.", "The famous quote from Empire Strikes Back is 'No, I am your father,' not, 'Luke, I am your father.'", "Ewan McGregor, who played Obi-Wan Kenobi, frequently made lightsaber noises while filming fight scenes.", "Luke Skywalker's name was originally going to be Luke Starkiller."];

function getRandom(array){
  var itemNumber = Math.floor(Math.random() * Number(array.length));
  return array[itemNumber];
}

function generateTips(){
  mainDiv.innerHTML = getRandom(tips);
  generateButton.innerText = "Click for one of " + Number(tips.length) + " randomly generated fun facts about Star Wars!";
}

generateButton.onclick = generateTips;

generateTips();
