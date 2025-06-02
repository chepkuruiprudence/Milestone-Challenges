// Challenge 1: Sum of two numbers
function addition(a, b) {
    console.log(a + b);
}
addition(5, 3);
addition(-5, 9);
//Challenge2: Convert Minutes into seconds
function convert(minutes) {
    console.log(minutes * 60);
}
convert(5);
convert(2);
// Challenge 3: calculate perimeter of a rectangle
function findPerimeter(l, w) {
    console.log(2 * (l + w));
}
findPerimeter(8, 7);
findPerimeter(5, 8);
// Challenge 4: check negative
function isNegative(num) {
    if (num < 0) {
        console.log("Negative");
    }
    else {
        console.log("positive");
    }
}
isNegative(3);
isNegative(-8);
// Challenge 5:can i drive
function canDrive(name, age) {
    var age = 18;
    if (age >= 18) {
        console.log(name + "is old enough to drive");
    }
    else {
        console.log(name + "is not old enough to drive");
    }
}
canDrive("John", 22);
canDrive("Jane", 12);
// Challenge 6:Largest Number
function findLargest(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
findLargest(5, 7, 9);
findLargest(10, 10, 10);
// Challenge 7: calculate BMI weight
function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    if (BMI < 18.5) {
        console.log("Underweight");
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("Normal weight");
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        console.log("Overweight");
    }
    else if (BMI >= 30) {
        console.log("Obese");
    }
}
calculateBMI(68, 1.75);
calculateBMI(85, 1.8);