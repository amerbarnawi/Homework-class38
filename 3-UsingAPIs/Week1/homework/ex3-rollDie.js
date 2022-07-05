'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

function rollDie() {
  return new Promise((resolve, reject) => {
    // Compute a random number of rolls (3-10) that the die MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      // Compute a random die value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      // Use callback to notify that the die rolled off the table after 6 rolls
      if (roll > 6) {
        reject(new Error('Oops... Die rolled off the table.'));
      }

      // Use callback to communicate the final die value once finished rolling
      if (roll === randomRollsToDo) {
        resolve(value);
      }

      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    // Start the initial roll
    rollOnce(1);
  });
}

function main() {
  rollDie()
    .then((resolvedValue) =>
      console.log(`Success! Die settled on ${resolvedValue}.`)
    )
    .catch((error) => console.log(error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/* In fact, after adding the (Promise), the previous problem is gone.

Logical explanation:
=====================
First, before adding (the promise): 
===================================
the error message appears when the number of dice rolls becomes greater than six,
and we will get a success callback too.

The reason behind this is that, in case of (randomRollsToDo > 6 ):
The following condition will be met:(roll > 6) and we will got an error message.
And the following condition:(roll < randomRollsToDo), 
remains fulfilled until this condition (roll === randomRollsToDo) is fulfilled.
So, we will get a success callback even if we get an error message.

Second, after adding (promise): 
===============================
the error message appears when the number of rolls of the dice becomes greater than six.
In this case, we do not get the message (success).
Here, when we call the function:(rollDie), 
it returns a (promise) which will return a Rejected or resolved.

In this case, 
the promise will return (the resolve value) only when the following condition (roll === randomRollsToDo) is met.
Or the promise return a (rejected with an error message), if the following condition (roll > 6) is met.

The promise will return :(rejected) or (resolved), not both! 
After that, the promise finished and it will not return the result of the rejection or resolving again, 
“except after his request for a second time.”

In this experiment, the promise returned (the reject value), 
which is an error message, and it will not return (the resolve value) or success message.

*/
