'use strict';
let userName = prompt('what\'s your name ?');

console.log(userName)

let age = prompt('Do you think that i\'m 90 years old ?');
if(age.toLowerCase() === 'yes'){
  alert('how could you!!!!');
}else if(age.toLowerCase() === 'no'){
  alert('yep i am not');
  console.log('right answer');
};



let myGirls = prompt('My tow girls name is rama and rema ?');
if(myGirls.toLowerCase() ==='yes'){
   alert('nooo, they are gazl and laten');
  }else if(myGirls.toLocaleLowerCase() ==='no'){
    alert('they are gazl and laten');
    console.log('right answer');
  };

  let favColor = prompt('My favorite color is black  ?');
if(favColor.toLowerCase() ==='yes'){
   alert('what can i say it\'s just a beautiful color');
   console.log('right answer');
  }else if(favColor.toLowerCase() ==='no'){
    alert('wrong answer , it will always be black');
  };

  let traveled = prompt('Did i traveled 10 times in my life  ?');
if (traveled.toLowerCase() === 'yes'){
   alert('I wish');
  }else if(traveled.toLowerCase() ==='no'){
    alert('No,but i hope i will travel more than 10 times in the future');
    console.log('right answer');
  };
  
let Season = prompt('Do yo think i love winter ?')
if(Season.toLowerCase() ==='yes'){
  alert('No ,winter is the worst');
}else if(Season.toLowerCase() ==='no'){
  alert('yes i hate winter');
  console.log('right answer');
  };


alert('welcom '+userName)
console.log(userName,age,myGirls,favColor,traveled,Season)