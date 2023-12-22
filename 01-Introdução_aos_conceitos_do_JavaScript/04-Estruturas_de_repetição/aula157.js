// for..in

let person = {
    name:"Robert",
    age: 30,
    weight: 77.6,
}

for(let property in person) {
    console.log(property)
}

for(let property in person) {
    console.log(person[property])
}