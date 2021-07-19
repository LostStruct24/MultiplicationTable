//Random numbers between 1 and 10

// export var randomNumber1 = Math.floor(Math.random() * 10) + 1;

// export var randomNumber2 = Math.floor(Math.random() * 10) + 1;

// export var multiply = randomNumber1 * randomNumber2;

export function randomNumber () {
    var randomNumber1 = Math.floor(Math.random() * 9) + 2;
    var randomNumber2 = Math.floor(Math.random() * 9) + 2;
    var multiply = randomNumber1 * randomNumber2;
    return [randomNumber1, randomNumber2, multiply];
}