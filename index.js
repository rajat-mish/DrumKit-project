

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
animation(this.innerHTML);
makesound(this.innerHTML);

});


}

document.addEventListener("keydown",function(event){
    makesound(event.key);
     animation(event.key);
})


function makesound(key){
 
   

    
if(key==="w"){
    var audio = new Audio('tom-1.mp3');
    audio.play();
    document.querySelector(".w")
  

}
else if(key==="a"){
    var audio = new Audio('tom-2.mp3');
    audio.play();
}

else if(key==="s"){
    var audio = new Audio('tom-3.mp3');
    audio.play();
}

else if(key==="d"){
    var audio = new Audio('tom-4.mp3');
    audio.play();
}

else if(key==="j"){
    var audio = new Audio('crash.mp3');
    audio.play();
}


else if(key==="k"){
    var audio = new Audio('kick-bass.mp3');
    audio.play();
}

else if(key==="l"){
    var audio = new Audio('snare.mp3');
    audio.play();
}
}


function animation(currentKey){
  var activebutton=document.querySelector("."+currentKey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },1000);

  if(currentKey==="w"){
    document.body.style.backgroundColor="pink";
    document.getElementsByTagName("h1")[0].style.color="black";
    document.getElementsByTagName("footer")[0].style.color="black";
 
    setTimeout(function(){
        document.body.style.backgroundColor="#283149";
        document.getElementsByTagName("h1")[0].style.color="#DBEDF3";
        document.getElementsByTagName("footer")[0].style.color="#DBEDF3";
        
    },1000);
  }
  if(currentKey==="a"){
    document.body.style.backgroundColor="green";
    document.getElementsByTagName("h1")[0].style.color="white";
    document.getElementsByTagName("footer")[0].style.color="white";
    setTimeout(function(){
        document.body.style.backgroundColor="#283149";
        document.getElementsByTagName("h1")[0].style.color="#DBEDF3";
        document.getElementsByTagName("footer")[0].style.color="#DBEDF3";
    },1000);
  }


  if(currentKey==="s"){
    document.body.style.backgroundColor="yellow";
    document.getElementsByTagName("h1")[0].style.color="Blue";
    document.getElementsByTagName("footer")[0].style.color="red";
    setTimeout(function(){
        document.body.style.backgroundColor="#283149";
        document.getElementsByTagName("h1")[0].style.color="#DBEDF3";
        document.getElementsByTagName("footer")[0].style.color="#DBEDF3";
    },1000);
  }

  if(currentKey==="d"){
    document.body.style.backgroundColor="white";
    document.getElementsByTagName("h1")[0].style.color="orange";
    document.getElementsByTagName("footer")[0].style.color="black";
    setTimeout(function(){
        document.body.style.backgroundColor="#283149";
        document.getElementsByTagName("h1")[0].style.color="#DBEDF3";
        document.getElementsByTagName("footer")[0].style.color="#DBEDF3";
    },1000);
  }

  if(currentKey==="j"){
    document.body.style.backgroundColor="red";
    document.getElementsByTagName("h1")[0].style.color="yellow";
    document.getElementsByTagName("footer")[0].style.color="purple";
    setTimeout(function(){
        document.body.style.backgroundColor="#283149";
        document.getElementsByTagName("h1")[0].style.color="#DBEDF3";
        document.getElementsByTagName("footer")[0].style.color="#DBEDF3";
    },1000);
  }

  if(currentKey==="k"){
    document.body.style.backgroundColor="orange";
    document.getElementsByTagName("h1")[0].style.color="purple";
    document.getElementsByTagName("footer")[0].style.color="yellow";
    setTimeout(function(){
        document.body.style.backgroundColor="#283149";
        document.getElementsByTagName("h1")[0].style.color="#DBEDF3";
        document.getElementsByTagName("footer")[0].style.color="#DBEDF3";
    },1000);
  }

  if(currentKey==="l"){
    document.body.style.backgroundColor="blue";
    setTimeout(function(){
        document.body.style.backgroundColor="#283149";
        document.getElementsByTagName("h1")[0].style.color="#DBEDF3";
        document.getElementsByTagName("footer")[0].style.color="#DBEDF3";
    },1000);
  }
}


// function fun2(currentKey){
//     var ab=document.querySelector("."+currentKey);
//     if(ab==="w"){
//         ab.
//     }
// }
