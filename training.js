// In this project I made Training Days more maintainable and less error-prone by fixing variable scopes.

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};
// declared days before the if statement
const getTrainingDays = (event) => {
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

// The scope of `name` was too tight, added name as the first parameter for each function, moved the name variable to global scope
name = "Nala";
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// testing functions for competitior
const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

// testing functions for competitor #2
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Warren";

logEvent(name2, event2);
logTime(name2, days2);
