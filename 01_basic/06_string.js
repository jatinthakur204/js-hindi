const name = "jatin"
const repocount = 40

console.log(name + repocount + "name")

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String ('jatin-thakur')

console.log(gamename [3])

//how ot access prototype in string

console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt("4"))
console.log(gamename.indexOf("a"))
console.log(gamename.indexOf("n"))

const newvariablename = gamename.substring(0,3)

console.log(newvariablename)


// const anotherString = gamename.slice (-8, 4)
// console.log (anotherString)

const anotherString = gamename.slice(-8); // Last 8 characters
console.log(anotherString);


const newstringone = "   jatin.    "

console.log(newstringone)
console.log(newstringone.trim())

const url = "https://jatin.com/jatin%20hakur"

console.log(url.replace('%20', '-'))