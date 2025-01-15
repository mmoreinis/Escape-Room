var rooms = [elevator, firstFloor, secondFloor, thirdFloor, fourthFloor, fifthFloor, sixthFloor];  
function elevator(floor){
  floor =  prompt(" pick a floor ");
    rooms[floor]();
    
}  

function firstFloor(){
  let thisFloor = document.getElementById("floorBox");
  thisFloor.src = "janitorsCloset.png";
  thisFloor.addEventListener("click", firstMap);
  firstMap();
}
function firstMap(){
   this.setAttribute("usemap", "first-map");
   let current= document.getElementById("firstFloor");
    //show background
    //run function
}

function secondFloor(){
  alert("Second Floor");
}
function thirdFloor(){
  alert("Third Floor");
}
function fourthFloor(){
  alert("Fourth Floor");

}
function fifthFloor(){
  alert(" Fifth Floor"); 
}
function sixthFloor(){
  alert("Sixth Floor");
}
function seventhFloor(){
  alert(" Seventh Floor");
}
function eighthFloor(){
  alert(" Eighth Floor");
}
function groundFloor(){
    alert("Goodbye");
}
