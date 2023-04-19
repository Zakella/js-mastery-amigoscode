
const person  = {
    firstName : "Slava",
    age : 36,
    isMale: true,
    balance:10000,
    dob: new Date(2000, 1, 28).toJSON(),
    address:{
        city: 'Chisinau',
        postcode: 2048
    }

};

console.log(person.firstName);
console.log(person.address)
console.log(Object.values(person));

const {firstName
    , age
    ,isMale:gender,
    address : { city : town}
} = person;

console.log(firstName, age)
console.log(gender)
console.log(town);

console.log();


const person2  = {
    firstName : "Maria",
    age : 28,
    isMale: false,
    balance:10000,
    dob: new Date(2000, 1, 28).toJSON(),

};

const address =  {
    addres: {
        city: 'Chisinau',
        postcode: 2048
    }

};

const maria = {
    ...person2,
    ...address
}

console.log(maria);