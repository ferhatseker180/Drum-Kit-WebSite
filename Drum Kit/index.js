
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
      var buttonInnerHtml = this.innerHTML;
      makeSound(buttonInnerHtml);

      buttonAnimation(buttonInnerHtml);
     

    });
  
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {

    case 'w':
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case 'a':
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

            case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

            case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

            case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

            case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

    default:
        break;
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}


/* Aşağıdaki şekilde de yazılabilir.
for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

   
}


function handleClick(){
    console.log(this);
}
/*
// Function hiearchy : 
function add(num1,num2){
  return num1+num2;
}

function multiple(num1,num2){
  return num1*num2;
}

function calculate(num1,num2,operator){

    return operator(num1,num2);
}

calculate(2,3,add);

debugger;
calculate(3,2,multiple);
*/

  //  var audio = new Audio("sounds/tom-1.mp3");
 //   audio.play()


 /*
 Object oluşturma (OOP)
 var houseKeeper = {
    yearsOfExperience : 12,
    name : "Jane",
    cleaningRepertuar : ["bathroom","lobby","bedroom"]
}
Örneğin aşağıdaki gibi çıktılar alabiliriz.
 console.log(houseKeeper.cleaningRepertuar);

 Daha kolay otomatik hale getirme yolu aşağıdaki gibidir.

 function BellBoy(name,age,hasWorkPermit,languages){

    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function() {
      alert("May I take your suitcase?");
      pickUpSuitcase();
      move();
    }

 }

 var bellboy = new BellBoy("Timmy",19,true,["French","English"]);

*/