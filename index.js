


var colors = randomcolors(6);
 var box = document.querySelectorAll("#box");
 var bg = document.getElementById("bg");
 
 var correctone = right();
 //display color no.
 var nameofcolor = document.getElementById("nameofcolor");
 nameofcolor.textContent = right();
 //messagedisplay
 var messagedisplay = document.getElementById("messagedisplay");
 var bb1 = document.querySelector("#bb1");
 bb1.addEventListener("click",function(){
     //getting of new colors
     colors = randomcolors(6);
     //new correct color
     nameofcolor.textContent = right();
     //correct color
     correctone = right();
     //assigning color of boxes
     for(i=0;i<box.length;i++){
         box[i].style.backgroundColor = colors[i];
     } 
     bg.style.backgroundColor = "pink";
     bb1.style.backgroundColor = "blue";
     bb2.style.backgroundColor = "white";
     bb3.style.backgroundColor = "BLUE";

 }); 
 for(i = 0; i < box.length;i++){
     //clicking of  all boxes
    box[i].addEventListener("click",function(){
        var pickedcolor = this.style.backgroundColor;
        var correctone = right();
        if(pickedcolor === correctone){
            //converting all boxes and background of samecolor
            for(var i=0 ;i<box.length ;i++){
                box[i].style.backgroundColor = correctone;
            }
            
            bg.style.backgroundColor = correctone;
            messagedisplay.textContent = "CORRECT!";
            bb1.textContent = "PLAY AGAIN?";
            bb1.addEventListener("click",function(){
                bb1.textContent = "NEW COLORS";
                messagedisplay.textContent = "";
            });
            bb1.style.backgroundColor = "white";
        }
        else{
            this.style.backgroundColor = 'black';
            messagedisplay.textContent = "TRYAGAIN!";
            bb1.style.backgroundColor = "white";
        }
    });
 }

 //giving color to the boxes
//  for(i = 0; i<box.length; i++){
//      box[i].style.backgroundColor = colors[i];
//  }


 //assigning of random color 


 //making of randomcolor
 function generaterandomcolor()
 {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
 }
 //making of 6 or 3 random color
 function randomcolors(num){
    var colored = [];
    for(i = 0; i<num; i++){
        colored[i] = generaterandomcolor();
    }
    return colored;
 }
  //correct color no.
function right(){
    var choose = Math.floor(Math.random() * box.length);
    return colors[choose];
}


 //making of easy button
 var bb2 = document.querySelector("#bb2");
 bb2.addEventListener("click",function(){
    colors = randomcolors(3);
    //
    function right1(){
        var choosedd = Math.floor(Math.random() * 3);
        return colors[choosedd];
    }
    //new correct color
    nameofcolor.textContent = right1();
    //correct color
    correctone = right1();
    //assigning color of boxes
    
    bb2.style.backgroundColor = "blue";
    bb3.style.backgroundColor = "white";
    bb1.style.backgroundColor = "white";
    for(i=0;i<3;i++){
        box[i].style.backgroundColor = colors[i];
    } 
    for(i=3;i<6;i++){
        box[i].style.backgroundColor = "black";
    } 
    bg.style.backgroundColor = "pink";
 });
 //making of hard button
 var bb3 = document.querySelector("#bb3");
 bb3.addEventListener("click",function(){
        //getting of new colors
        colors = randomcolors(6);
        //new correct color
        nameofcolor.textContent = right();
        //correct color
        correctone = right();
        //assigning color of boxes
        for(i=0;i<box.length;i++){
            box[i].style.backgroundColor = colors[i];
        } 
        bg.style.backgroundColor = "pink";
        bb3.style.backgroundColor = "blue";
        bb2.style.backgroundColor = "white";
        bb1.style.backgroundColor = "white";

 });