'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-3-lemon-allergy

Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
------------------------------------------------------------------------------*/
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(fruitBasket, takenUitFruit) {
  // TODO complete this function

  const sanitizedArray = fruitBasket.filter((fruit) => fruit !== takenUitFruit);

  return sanitizedArray;
}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    // TODO replace next line with your code
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
    // TODO replace next line with your code
    sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(originalFruitBasketContents).toEqual(fruitBasket);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    // TODO replace next line with your code
    const experiment = sanitizeFruitBasket(fruitBasket, 'lemon');
    const inculdLemonTest = experiment.includes('lemon');
    expect(inculdLemonTest).toBe(false);
  });
});