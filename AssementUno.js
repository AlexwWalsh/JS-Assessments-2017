Javascript Course Assessment

Week 1 Assessment


1. Name all of the data types in Javascript, say which are primitives.

//Your Answer
Objects, null, boolean, string, number.

//Googled Answer
Boolean, null, undefined, string, number, symbol.





2. Describe what "if" does in Javascript.

//Your Answer
      Determines a conditional statement that checks if something is true, and is usually followed by an action of some kind.

//Googled Answer
      Conditional statements are used to perform different actions based on different conditions.

3. Write a function that takes one number as a parameter and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

function divByThree ( x ){
  if (x % 3){
    return "is divisible by three";
    } else {
    return "is not divisible by three.";
  }
};





4. What is JSON?

//Your Answer
Stands for Javascript Object Notation. Which I think is the syntax used for calling Javascript objects.
//Googled Answer
Apparently data is only text, and when exchanging it between the browser and the server Javascript converts objects into text that can be sent back and forth. I think.





5. Write about yourself in an object, giving at least three properties of you. Then store your object in a variable with your name.

var alexWalsh = {
  name: "Alexander Walsh",
  age: "21",
  hobbies: "Reading and stuff"
};



6. Describe a closure, what is it good for and how do you recognize one?


//Your Answer
Closures are used to pull information from the local scope back into the global scope. As information can only be
passed down scopes, and not out of them.

//Googled Answer
A closure is a function that has access to the outter functions variables. Usually lies inside another function.




7. What's the difference between =, ==, and === in JavaScript?

//Your Answer
Single = is assigning value to something. Double == is used to check if the value of something
is equal to the information following it. Im unsure about the triple equals, I think it's something similar to the double.

//Googled Answer
Double equals is loose equality, meaning a more relative comparison. And the triple equals is checking for Strict equality
meaning a more exact comparison?



8. Create an array with at least 4 items inside it, then access two of the values and console.log() them. Try to access the two values in two different ways.

var thisIsAnArray = ["Hello" , "I" , "Am" , "An" , "Array"]

console.log(thisIsAnArray)

To call an item

thisIsAnArray[2]
thisIsAnArray[2, 0]

9. Describe the different kinds of loops and why you would use them.


//Your Answer
A for loop is something that repeats a function several times. Can be used to iterate through an array and other goodies.
while loop does something if another thing is true.
And a do while does something while another action is being performed. I belive its used to grab information while pictures are being loaded,
or thats the example i remembered.
//Googled Answer
for - loops through a block of code a number of times
for/in - loops through the properties of an object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true




10. How would you explain "scope" in javascript?

//Your Answer
The "area" that certain data and variables can be accesed. In their scope they can have functions performed on them, but a function
is needed to remove them from their Local scope to a Global one.
//Googled Answer
Each function creates a new scope, variables within the function are Local, and variables outside the function are Global.
