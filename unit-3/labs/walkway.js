class Location {
  // your code here
  constructor(name, description) {
    this.name = name
    this.description = description
  }

}

let home = new Location('home', 'you are at your house');
let sidewalk = new Location('sidewalk', 'you are on the sidewalk');
let store = new Location('store', 'you are at the store');

let locationCurrent = "home";

let locationLookUp = {
  home: home,
  sidewalk: sidewalk,
  store: store
};

let locationStates = {
  home: ['sidewalk'],
  sidewalk: ['home', 'store'],
  store: ['sidewalk']
};

console.log("You are at your " + locationCurrent)

function moveLocation(newLocation) {
  if (locationStates[locationCurrent].includes(newLocation)) {
    locationCurrent = newLocation
    console.log("You are at the " + locationLookUp[locationCurrent].name)
  } else {
    console.log("You cannot go to the " + newLocation + " from the " + locationCurrent)
  }
}

moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("store");
// Prints 'You are in the store.'
moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("home");
// Prints 'You are at your house.'

moveLocation("park");
  // Prints 'You cannot go from sidewalk to park.'
