const marvel_heros = ["thor", "irommam", "spidermam"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3])

//  const allheros= marvel_heros.concat(dc_heros)
// console.log(allheros)


// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


console.log (Array.isArray("jatin"))
console.log (Array.from("jatin"))
console.log(Array.from({name: "jatin"})) //interesting

let score1 = 200
let score2 = 300
let score3 = 300

console.log(Array.of(score1,  score2,  score3))
