const score = 400
// console.log (score)
// const balance = new Number (100)

// console.log (balance)

// console.log(balance.toFixed(2));

const otherNumber = 30.32435

// console.log (otherNumber.toPrecision(4))


const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN'))

//****************maths**************//

// console.log(Math)

// console.log(Math.abs(-3))

// console.log(Math.round(4.5))

// console.log(Math.ceil(4.2))

// console.log(Math.floor(6.9))

// console.log(Math.min(3,4,6,2))

// console.log(Math.max(33,4,62,32))

// console.log(Math.random())

// console.log((Math.random()*10) + 1)

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min )


let ludo = Math.floor(Math.random() * 10) + 1;  // it will give number 0-1, to get number 0-9 multiple it with 10
// now to remove the decimal points use Math.floor and it will start giving number in integer value.
//now we want number to come between 1 to 10 and not 0to9 just add 1 to it.
console.log (ludo)


function getRandom(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min
    return x
}

 

 console.log (getRandom(5, 10))

