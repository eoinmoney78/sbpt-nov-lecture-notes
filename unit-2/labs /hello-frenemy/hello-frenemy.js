function greeter(name) {
    if (name == 'Darth Vader')
        console.log('Go away ' + name + '. Noooooooooo Thats Impossible!');
    else if (name == 'Lex Luthor') {
        console.log('No ' + name + ' ,Take off you hoser.');
    } else if (name === 'Luke Skywalker') {
        console.log('Hello ' + name + ', you are my hero.');
    } else {
        console.log('Y0 ho  ho , ' + name + ', You are not recognized brahhhh!');
    }

}


greeter('Darth Vader');
greeter('Lex Luthor');
greeter('Luke Skywalker');
greeter('Jim jones');
greeter('Tony soprano');