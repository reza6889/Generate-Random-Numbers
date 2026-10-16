//Challenge 16 : Generate a random integer

const generateRandomNumbers = (min, max) => {
  if (!max && !min) {
    return "Enter a min and man number";
  }

  if (!max) {
    max = min;
    min = 0;
  }
  const result = min + Math.floor(Math.random() * (max - min + 1));
  return result;
};

console.log(generateRandomNumbers());
console.log(generateRandomNumbers(29));
console.log(generateRandomNumbers(40,110));

