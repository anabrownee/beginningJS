// used in lesson2.html

//loops while

var i=1;

while (i<4){
  console.log("the number is "+i);
  i++
}

//loops for

for (u=0; u<10; u++){
  console.log('counting ' +u);
}

//arrays

var animals = ["dog", "cat", "badger", "pengiun", "koala bear" ];

//add at the end
animals.push("bird");

//add at the beginning
animals.unshift("parrot");

//remove & return last element
animals.pop();

//remove & return first element
animals.shift();

for (y=0; y<animals.length; y++){
      console.log("animal: " + animals[y]);
}

//order an array without function

var names= ["sarah", "karoline", "ange", 'kasia', 'nalia'];

names.sort();

for (n=0; n<names.length; n++){
  console.log(names[n]);
}

//order with function

function orderAscending(a, b){
  if (a>b){
    return -1;
  }
  else if (a<b){
    return 1;
  }
}
var nam= ["sarah", "karoline", "ange", 'kasia', 'nalia'];

nam.sort(orderAscending);

for (m=0; m<nam.length; m++){
  console.log(nam[m]);
}
function sortNumbersAscending(a, b) {
    return a - b;
}

var nums = [ 1, 5, 3, 19, 2, 10 ];

nums.sort(sortNumbersAscending);

console.log(nums);

//loop & array

var fruitAndVeg = ["banana", "peach", "leek", "cherry", "apple"];

var noVeg=[];
var o=0;

while (o<fruitAndVeg.length){
  if (fruitAndVeg[o] !== "leek"){
    noVeg.push(fruitAndVeg[o]);
  }
  o++;
}

console.log(noVeg);
