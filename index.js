//reverse a string   syntax -array.reverse()

//let numbers_array = [1, 2, 3, 4, 5];

function reverseString(str) {
  // Split the string into an array of characters
  let charArray = str.split("");

  // Reverse the array
  charArray.reverse();

  // Join the characters back into a string
  let reversedStr = charArray.join("");

  return reversedStr;
}

//count character

function countCharacters(str) {
  // Get the length of the string
  let charCount = str.length;

  return charCount;
}

//capitalizes words

function capitalizeWords(str) {
  // Split the string into words
  let words = str.split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a sentence
  let capitalizedStr = words.join(" ");

  return capitalizedStr;
}

//maximum and minimum

function findMax(numbers) {
  // Assuming the array is not empty
  let max = numbers[0]; // Initialize max with the first element
  for (let i = 1; i < numbers.length; i++) {
    // Iterate through the array starting from the second element
    if (numbers[i] > max) {
      // If the current element is greater than the current max
      max = numbers[i]; // Update max with the current element
    }
  }
  return max; // Return the maximum value
}

//sum of array

function sumArray(numbers) {
  let sum = 0; // Initialize sum to 0
  for (let i = 0; i < numbers.length; i++) {
    // Iterate through the array
    sum += numbers[i]; // Add the current element to the sum
  }
  return sum; // Return the total sum
}

//filter array

function filterArray(numbers, condition) {
  let filteredArray = []; // Create an empty array to store filtered elements
  for (let i = 0; i < numbers.length; i++) {
    // Iterate through the array
    if (condition(numbers[i])) {
      // If the condition is true for the current element
      filteredArray.push(numbers[i]); // Add the element to the filtered array
    }
  }
  return filteredArray; // Return the filtered array
}

//The condition parameter in filterArray is a function that determines whether an element should be included in the filtered array.
//It's a callback function that you can define to specify your filtering criteria.
