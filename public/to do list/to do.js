//appending xbtn to each list
var list=document.getElementsByTagName("LI");
var i;
for (let i = 0; i < list.length; i++) {
    var span=document.createElement("SPAN");
    var xBtn=document.createTextNode("\u00D7"); /*READ UP*/
    span.className="close";
    span.appendChild(xBtn);
    list[i].appendChild(span);
}

//clicking x to hide list
var close= document.getElementsByClassName("close");
var h;
for (let h = 0; h < close.length; h++) {
    close[h].onclick = function(){
        var row = this.parentElement;
        row.style.display = "none";
    }
}

//cross the list
var cross = document.querySelector('ul');
cross.addEventListener('click',function(ev){
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("crossed");
    }
}, false); 

//add new list 
function newElement(){      //Y CANT USE BUTTON VAR??
    var li = document.createElement("li");
    var addbar = document.getElementById("create").value;
    var newtxt = document.createTextNode(addbar);
    li.appendChild(newtxt);
    if (addbar === ''){
        alert("cannot add empty list!");
    }
    else{
        document.getElementById("myli").appendChild(li);
    }

    document.getElementById("create").value = "";  /*im guessing to empty the txt after you add*/

    var span=document.createElement("SPAN");
    var xBtn=document.createTextNode("\u00D7"); /*READ UP*/
    span.className="close";
    span.appendChild(xBtn);
    li.appendChild(span);

    for (let n = 0; n < close.length; n++) {
        close[n].onclick = function(){
            var row = this.parentElement;
            row.style.display = "none";
        }
        
    }
}


// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("create").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myli").appendChild(li);
//   }
//   document.getElementById("create").value = "";

//   var span = document.createElement("SPAN");
//   var xBtn = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(xBtn);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }


function shift(){
    var txt = document.getElementById("txt");
    var black = document.body;
    var move = document.getElementById("togglerid");
    move.classList.toggle("active");
    black.classList.toggle("darkmode");
    txt.classList.toggle("light");

    if (txt.classList.toggle("light") === true) {
        txt.innerHTML = "light mode";
    }
}
