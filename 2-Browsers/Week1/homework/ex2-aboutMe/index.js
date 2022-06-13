'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

const nickName = document.querySelector('#nickname');
const favFood = document.querySelector('#fav-food');
const homeTown = document.querySelector('#hometown');

const myNickName = document.createTextNode('Amer Barnawi.');
const myFavFood = document.createTextNode('Sheikh Al-Mahshi.');
const myHomeTown = document.createTextNode('Safad.');

nickName.parentNode.replaceChild(myNickName, nickName);
favFood.parentNode.replaceChild(myFavFood, favFood);
homeTown.parentNode.replaceChild(myHomeTown, homeTown);

const ul = document.querySelectorAll('li');

ul.forEach((li) => {
  li.className = 'list-item';
});
