// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if(number % 2 === 0){
      return "Even";
    }else {
      return "Odd";
    }
}

evenOrOdd(10);

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterOutStrings(list) {
    return list.filter(item => typeof item !== 'string');
  }
  
  



// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

function numberToString(num) {
    // Return a string of the number here!
    num = num.toString();
    return num;
}

numberToString(400)


// write a function 
// introduce rest parameter to get list of numbers as an array 
// declare a variable to store sum of numbers whithin the function
// write a forof loop to get each number, power it by 2 and add it to the total of sum 
function squareSum(...numbers){
    let sum = 0
    for(num of numbers){
        let powered = num**2;
        sum += powered;
        
    }
    console.log(sum)
    
}
squareSum(2, 4, 5);

// Implement a function which convert the given boolean value into its string representation.

const  booleanToString = (b) => {
    //your code here
    return String(b)

}

booleanToString(true)



// using javascript Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  