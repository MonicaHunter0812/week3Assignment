/// Question 1

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 
sum = (ages[7] - ages[0]);   
                            
console.log(sum);   

ages.push(20);

console.log(ages);

let total = 0;
for (let i = 0; i < ages.length; i++){
    total += ages[i]; 
}
let avg = total / ages.length;  

console.log(avg);

/// Please note I am aware that ages[7] - ages [0] is not allowed, but I'm not sure how to write the code programmatically. Please explain. Thank you.



/// Question 2

let names = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob']; 

let total = 0; 
for (let i = 0; i < names.length; i++){
    total += names[i].length; 
}
let avg = total / names.length; 

 console.log(avg); 

let str = '';
for (let i = 0; i < names.length; i++){
    str += (names[i] + " ");
}
console.log(str);  



/// Question 3

/// Answer: You can access the last element of an array by using array.slice(-1), pop(), or array.length-1. 



/// Question 4

/// Answer: You can access the first element of an array by using shift() or array[0].



/// Question 5

let names = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob']
let nameLengths = names.map(function(element){
    return element.length; 
}); 
console.log(nameLengths);



/// Question 6

let sum = nameLengths.reduce(function(accumulator, currentValue){
     return accumulator + currentValue;
     });
console.log(sum);



/// Question 7 

function repeatGreeting(word, n){
        return word.repeat(n);
}
console.log(repeatGreeting("Hello", 3)); 



/// Question 8

function createFullName (firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(createFullName("Sara", "May")); 




/// Question 9

function sumOfArray(arrayOfNumbers){
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++);{
        sum += arrayOfNumbers[i]; 
        return sum > 100;  
}
}
  


/// Question 10 

function averageOfArray(array){
    let avg = sumOfArray(array)/array.length;
    return avg; 
}



/// Question 11

function avg (){
    if (avgOfArrayOne >= avgOfArrayTwo){
        return true;
    } else 
}



/// Question 12

function willBuyDrink (){
    let isHotOutside;
    if (isHotOutside === true) {
        return false;
      } else 
     let moneyInPocket = 11;
    if (moneyInPocket > 10.50){
        return true;
    } else 
}



/// Question 13

function sum (num1, num2){
    return (num1 + num2);     
}
console.log(sum(350,100));  

/// This function was created to find the sum of num1 and num2, return the output, and the print the output to the console.