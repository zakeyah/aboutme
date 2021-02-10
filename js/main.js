'use strict';
 let score = 0


 let userName = prompt('what\'s your name ?');

console.log(userName)

function qOne() {
  let age = prompt('Do you think that i\'m 90 years old ?');
  if(age.toLowerCase() === 'yes'|| age.toLowerCase() === 'y'){
    alert('how could you!!!!');
  }else if(age.toLowerCase() === 'no' || age.toLowerCase() === 'n'){
    alert('yep i am not');
    score += 1
    console.log('right answer');
  };
}
qOne();


function qTwo() {
  let myGirls = prompt('My tow girls name is rama and rema ?');
  if(myGirls.toLowerCase() ==='yes' || myGirls.toLowerCase() ==='y'){
     alert('nooo, they are gazl and laten');
    }else if(myGirls.toLocaleLowerCase() ==='no'|| myGirls.toLowerCase() ==='n'){
      alert('they are gazl and laten');
      score += 1
      console.log('right answer');
    };
}
qTwo();

function qThree() {
  let favColor = prompt('My favorite color is black  ?');
  if(favColor.toLowerCase() ==='yes' || favColor.toLowerCase() ==='y'){
   alert('what can i say it\'s just a beautiful color');
   score += 1
   console.log('right answer');
  }else if(favColor.toLowerCase() ==='no' || favColor.toLowerCase() ==='n'){
    alert('wrong answer , it will always be black');
  }
}
qThree();

function qFour() {
  let traveled = prompt('Did i traveled 10 times in my life  ?');
if (traveled.toLowerCase() === 'yes' || traveled.toLowerCase() === 'y'){
   alert('I wish');
  }else if(traveled.toLowerCase() ==='no'|| traveled.toLowerCase() === 'n'){
    alert('No,but i hope i will travel more than 10 times in the future');
    score += 1
    console.log('right answer');
  };
}
qFour();

function qFive() {
  let Season = prompt('Do yo think i love winter ?')
  if(Season.toLowerCase() ==='yes'|| Season.toLowerCase() ==='y'){
    alert('No ,winter is the worst');
  }else if(Season.toLowerCase() ==='no'|| Season.toLowerCase() ==='n'){
    alert('yes i hate winter');
    score += 1
    console.log('right answer');
    };
}
qFive();

function qSix() {
  let attempts = 4;
  let userInput = prompt('Can you guess how many months i worked in SOS ?');
  
  while (attempts) {
    
    if (userInput === "9") {
      alert('correct');
      score += 1;
      break;  
    }else if(userInput < "9"){
      alert('too low.');
    }else if(userInput > "9"){
      alert('too high.');
    
      
    }
  if(attempts===1){
    alert('9 is the correct answer');
    break;
  }
    attempts -= 1;
    userInput = prompt('please try again you have : ' + attempts + ' remaining!');
  }
}
qSix();

function qSeven() {
  let placesVisit=['italy','france','rome','greece','egypt','turkey','spain','ukraine','morocco','dubai'];
  
  let chancess=6;
  let userGuess=prompt('guess one of the places i want to visit ');
  while(chancess){
   let correct=false;
    for (let i= 0;i<placesVisit.length;i++){
  
      if (userGuess.toLowerCase() === placesVisit[i]){
        alert('correct answer!');
        score += 1;
         correct=true;
        break;
      }
  
    }
    if(correct===true){
      break;
    }
    chancess-=1;
    userGuess=prompt('please try again you have : '+chancess+' remaining!');
  
  
  
    if (chancess === 1){
      alert('the correct answer one of this italy,france,rome,greece,egypt,turkey,spain,ukraine,morocco,dubai');
      break;
    }
  
  }
}
qSeven();

alert('welcom '+userName)
alert('your score is '+score)
//console.log(userName,age,myGirls,favColor,traveled,Season)