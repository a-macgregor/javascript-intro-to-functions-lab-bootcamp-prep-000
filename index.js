function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(`${string}`.toUpperCase());
}

function logWhisper(string) {
  console.log(`${string}`.toLowerCase());
}

//set function
function sayHiToGrandma(string) {
  var uppercase = `${string}`.toUpperCase
  var lowercase = `${string}`.toLowerCase
  
  if(`${string}` === uppercase) {
    return "I can't hear you!"
  } else if(`${string}` === lowercase) {
    return "YES INDEED!"
  } else
    return "I love you, too."
      
    }
  }
}