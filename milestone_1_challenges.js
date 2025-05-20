// Challenge 1: Sum of two numbers
function addition(a,b){
 console.log(a+b);
}

addition(5,3)
addition(-6, 9)

// Challenge 2: convert minutes to seconds
function convert(minutes){
 console.log(minutes*60) ;
}

convert(5);
convert(2);

// Challenge 3: calculate perimeter of a rectangle
function findPerimeter(L,W){
 console.log(L*W)
}

findPerimeter(6, 7)
findPerimeter(20,10)

// Challenge 4: calculate perimeter of a rectangle

function isNegative(num) {
 if (num < 0) {
   return true;
 } else {
   return false;
 }
}


console.log(isNegative(-23));
console.log(isNegative(55));

function canDrive(name){
 var age = 18;
 if (age >= 18){
  console.log( name + "is old enough to drive");
 } else {
  console.log(name + "is not old enough to drive");
 }
}
canDrive("June", 22);
canDrive("Jane", 12);

// Challenge 5: check the largest number
function findLargest(a, b, c){
 if (a > b && a > c){
   console.log(a);
 } else if (b > a && b > c){
   console.log(b);
 } else {
   console.log(c);
 }
}


findLargest(5, 9, 3); 
findLargest(10, 10, 10); 
findLargest(-1, -5, -3); 

// Challenge 6: calculate BMI weight
function calculateBMI(weight,height){
 BMI = weight / (height * height)
 if  (BMI < 18.5){
  console.log("Underweight")
 } else if (BMI >= 18.5 && BMI<=24.9){
   console.log("Normal weight")
  } else if (BMI>=25 && BMI<=29.9){
   console.log("Overweight")
  }else if(BMI>=30){
   console.log("Obese")
  }
}

calculateBMI(68, 1.75);
calculateBMI(85, 1.8);

// Challenge 8: calculate BMI weight
function greetUser(name, hour){
 if (hour>5 && hour<11){
  console.log("Good morning," + name)
 } else if(hour>12 && hour<17){
  console.log("Good afternoon," + name)
 }else if(hour>18 && hour<21){
  console.log("Good evening," + name)
 }else{
  console.log("Good night, " + name)
 }
}

greetUser("Prudence", 9)
greetUser("Prudence", 14)
greetUser("Prudence", 19)
greetUser("Prudence", 23)

