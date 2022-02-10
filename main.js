// Color game:

color1= document.getElementById("color1");
rgb=document.getElementById("rgb");
reset= document.getElementById("reset");
message=document.getElementById("message");
easybtn=document.getElementById("easybtn");
hardbtn=document.getElementById("hardbtn");
square=document.getElementsByClassName("square");
function randomcolor(){
     let r=Math.floor(Math.random()*256);
     let g=Math.floor(Math.random()*256);
     let b=Math.floor(Math.random()*256);
     return "rgb("+r+", "+g+", "+b+")";
     // `rgb(${r}, ${g}, ${b})`
}
function generaterandomcolors(num){
     let arr=[];
     for(let i=0;i<num;i++){
       arr.push(randomcolor());
     }
     return arr;
}
function pickcolor(colors){
  let l=colors.length;
  let index=Math.floor(Math.random()*l);
  return colors[index];
}
function changecolor(color){
  for(let i=0;i<square.length;i++){
    square[i].style.background=color;
  }
}
let numsquares=3;
let colors=generaterandomcolors(numsquares);
let pickedcolor=pickcolor(colors);
rgb.innerText=pickedcolor;
for(let i=0;i<square.length;i++){
  if(colors[i]){
    square[i].style.background=colors[i];
  }
  else{
    square[i].style.display="none";
  }
  square[i].addEventListener("click",function(){
    // console.log("abc");
    let clickedcolor=this.style.background;
    if(clickedcolor===pickedcolor){
      // console.log('fgh');
      changecolor(pickedcolor);
      color1.style.background=pickedcolor;
      reset.innerText="Play again?";
      message.innerText="Correct!!";
    }
    else{
      square[i].style.background="white";
      message.innerText="Try again...";
    }
  })
}
reset.addEventListener('click', function(){
   colors=generaterandomcolors(numsquares);
   pickedcolor=pickcolor(colors);
   rgb.innerText=pickedcolor;
   for(let i=0;i<square.length;i++){
     square[i].style.background=colors[i];
   }
   reset.innerText="Reset";
   message.innerText="";
   color1.style.background="rgb(14, 3, 41)";
})
easybtn.addEventListener('click', function(){
  easybtn.classList.add("selected");
  hardbtn.classList.remove("selected");
  numsquares=3;
  colors=generaterandomcolors(numsquares);
  pickedcolor=pickcolor(colors);
  rgb.innerText=pickedcolor;
  for(let i=0;i<square.length;i++){
    if(colors[i]){
      square[i].style.background=colors[i];
    }
    else{
      square[i].style.display="none";
    }
  }
  reset.innerText="Reset";
  message.innerText="";
  color1.style.background="rgb(14, 3, 41)";
})
hardbtn.addEventListener("click",function(){
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
  numsquares=6;
  colors=generaterandomcolors(numsquares);
  pickedcolor=pickcolor(colors);
  rgb.innerText=pickedcolor;
  for(let i=0;i<square.length;i++){
      square[i].style.background=colors[i];
      square[i].style.display="block";
  }
  reset.innerText="Reset";
  message.innerText="";
  color1.style.background="rgb(14, 3, 41)";
})
