/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dice-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollDice()` function to throw five dice in one go, by 
    using `.map()` on the `dice` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Die 3 rolled off the table.

The provided rollDie() function logs the value of a die as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dice 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dice that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promisesArray = dice.map((die) => rollDie(die));
  return Promise.all(promisesArray);
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

/* 
I can see that: 
In the case of a rejected promise, dice that have not yet finished their roll continue to do so.

My Explanation:
===============
In case we used (Promise.all(PromisesArray)), 
We will return an array of promises by calling the function (rollDice).

When we call the function (main),
It will check all the promises, if all of them are (resolved) then I can see the (resolve value).
If one of them is ( rejected ), then I will see which one is rejected and I will not see the (resolved value array) anymore.

When I use Promise.all(promisesArray).catch(), it will return a rejected value (for the first one which rejected),
but does not care about the rest ( rejected or resolved ).

But that does not mean the function (rollDie) will stop working for the die which not finished rolling yet,
Because of this is an ( Asynchronous) operation and the promises are not related to each other.

*/
