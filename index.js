function dwarfRollCall(dwarves) {

  var string = ""
  for (var i = 0; i < dwarves.length; i++){

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
  if ( words[i].length < 4){
    return false
    i++;
}else {
  return true
}
}

function findTheCheese (foods) {
}
