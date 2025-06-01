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
