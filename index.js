var lengthofdrum = document.querySelectorAll(".drum").length;

//detecting button press


function handleClick(){
  var buttonInnerHtml= this.innerHTML;
  buttonAnnimation(buttonInnerHtml);

  switch (buttonInnerHtml) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log("Wrong Choice");
      break;

  }



}


for(var i=0;i<lengthofdrum;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}


//detecting key press

document.addEventListener("keypress",function(event){
  console.log(event.key);
  buttonInnerHtml2=event.key;
  makeSound(buttonInnerHtml2);
  buttonAnnimation(buttonInnerHtml2);
});

function makeSound(key){

  switch (key) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log("Wrong Choice");
      break;

  }
}

function buttonAnnimation(keytap){
  var activeButton= document.querySelector("."+keytap);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },90);
}
