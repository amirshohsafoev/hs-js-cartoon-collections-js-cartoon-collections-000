function dwarfRollCall(dwarves) {

  var string = ""
  for (var i = dwarves.length/2; i < dwarves.length; i++){

     string += `${i + 1}. ${dwarves[i]} `

   }
   return string;

}

function summonCaptainPlanet(planeteerCalls){
  let i = 0;
  while (i < planeteerCalls.length){
    planeteerCalls[i] += "!";
   // planeteerCalls.toUpperCase();
     i++;
  }
return  planeteerCalls
 
}


function longPlaneteerCalls(words) {
  var i = 0;
  if ( words[i].length > 4){
    return true;
    
}else {
  i++;
  return false;
}
}

function findTheCheese (foods) {
  var cheese = "cheddar, gouda, camembert, anothercheese";
  for ( var i = 0; i < foods.length; i++) {
    if  (cheese.indexOf(foods[i]) !== -1){
        return foods[i];
    }
  }
  return "no cheese!";
}

function wordsWithB(words){
  var newarray = []
  for (var i = 0; i < words.length; i++){
  if (words[i].startsWith('b')){
    newarray.push(words[i])
     }
}
  return newarray
}



