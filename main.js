let raceNumber = Math.floor(Math.random() * 1000);//1000
let registeredEarly = true;
let runnersAge = Math.floor(Math.random() * 100);

if (runnersAge > 18 && registeredEarly === true){
    raceNumber += 1000;
} 

if (runnersAge > 18 && registeredEarly === true){
  console.log('You will race at 9:30am ' + raceNumber)
} else if (runnersAge > 18 && registeredEarly !== true){
  console.log('Late adults run at 11:00 am' + raceNumber)
}else if (runnersAge < 18){
  console.log('Youth registrants run at 12:30 pm (regardless of registration)' + raceNumber)
} else {
  console.log('Go see the registration desk.');
}


console.log(registeredEarly);
console.log(runnersAge);
console.log(raceNumber);
