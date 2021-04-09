const person = {
  firstName: 'Nikki',
  lastName: 'Allen',
  age: 28,
  address: {
    city: 'Boca Raton',
    state: 'Florida',
    zip: '33496',
  },
  pets: ['🐶', '🐱', '🦊'],
}

person.family = ['Skylar', 'Precious', 'Odin']
person.pets.push('🐡')

console.log(person)

const { address, age, firstName, lastName } = person


function getBirthYear (myAge){
    const thisYear = 2021
    const birthYear = thisYear - myAge
    // console.log (birthYear)
    return birthYear
}

const myYear = getBirthYear(age)
 
// console.log('my year here after the function', myYear)

const allKeys = Object.keys (person)
const allValues = Object.values (person)

// console.log('this is my name', allKeys[0])
// console.log(`this should be my first name ${person[allKeys[0]]}`)
// console.log('this is all the values', allValues)

person.pets.push('🐡')
