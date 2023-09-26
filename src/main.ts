//Int array
const myIntArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(myIntArray)
//Function
let doubling = myIntArray.map(element => element * 2);
//Short output
console.log(myIntArray.map(element => element * 2))
//Testing join
console.log(myIntArray.map(element => element * 2).join())
console.log("--------------------------")
//String array
const myStringArray: string[] = ["Horst", "Bärbel", "Bernd", "Luise", "Chantal", "Frederik"]
console.log(myStringArray)
let fiveLetters: string[] = myStringArray.filter(element => element.length === 5)
console.log(myStringArray.filter(element => element.length === 5))
console.log("Sum = " +myIntArray.reduce((sum, element) => sum + element,0))
console.log(myIntArray.some(element => element > 10))

