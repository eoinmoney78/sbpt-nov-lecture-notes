let marvelHero = {
    fullName: 'Peter Parker',
    codeName: 'SpiderMan',
    age: 25,
    active: true
}

/* 
   Object Literal
  when our values are written within our keys. "hard Coded"   


  Structure 

       -Keyword ObjectName = {
        key: value,

       }

        ref: 
        let ourObj = {
            firstKey: 'string'
        }
    
    Are dictionaries
   */

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpson Roasting on an Open Fire',
                aired: '1989-12-17',
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01',
            },
        ],
        'season two': [/* .... */],
        "season three": [/* .... */]
    },
    currently_running: true,
}


//* Dot notation & square Brackets
console.log(theSimpsons.genre);

console.log(theSimpsons['est']);
console.log(theSimpsons.seasons["season three"]); //must use square brackets for multi word keys.

theSimpsons.characters = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];
console.log(theSimpsons);

// How add another characters.


theSimpsons.characters.push('Ned');
console.log(theSimpsons);


theSimpsons.seasons["season one"][1].aired = "1990-01-14";
console.log(theSimpsons.seasons["season one"][1]);
console.log(theSimpsons.seasons["season one"][2][1])

