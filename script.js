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
  let popup = document.getElementById("popup");
  let popimg = document.createElement("img");
  popup.addEventListener("click",loadPuzzle);
  popimg.src="popup.png";
  popup.appendChild(popimg);
  let thisFloor = document.getElementById("floorBox");
  thisFloor.src = "science.gif";
  thisFloor.addEventListener("click", secondMap);
  secondMap();
  function loadPuzzle(){
    const iframe = document.createElement("iframe");
    iframe.src = "puzzle-index.html";
    popup.appendChild(iframe);
  }
}
function secondMap(){
this.setattribute("use","second-Map")
let current= document.getElementById("secondFloor");
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

}
function groundFloor(){
    alert("Goodbye");
}
