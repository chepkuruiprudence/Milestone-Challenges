// Challenge 1: Sum of two numbers
function addition(a : number, b : number){
  console.log(a+b);
}
addition(5,3)
addition(-5,9)

//Challenge2: Convert Minutes into seconds
function convert(minutes: number){
  console.log(minutes*60)
}
convert(5);
convert(2);

// Challenge 3: calculate perimeter of a rectangle

function findPerimeter(l : number,w : number) {
  console.log(2*(l+w));
}
findPerimeter(8,7);
findPerimeter(5,8);

// Challenge 4: check negative
function isNegative(num: number){
  if (num < 0){
    console.log("Negative");
  } else {
    console.log("positive")
  }
}

isNegative(3);
isNegative(-8);

// Challenge 5:can i drive
function canDrive(name: string, age :number){
  var age = 18;
  if (age >=18){
    console.log(name + "is old enough to drive");
    } else {
      console.log(name + "is not old enough to drive")
    }
}

canDrive("John", 22)
canDrive("Jane", 12);

// Challenge 6:Largest Number
function findLargest(a : number, b : number, c : number){
  if (a > b && a > c){
    console.log(a);
  } else if (b > a && b > c){
    console.log(b);
  } else {
    console.log(c);
  }
}

findLargest(5,7,9)
findLargest(10, 10, 10)
