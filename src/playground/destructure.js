//ES6 desructuring
// new es6 syntax for object destructuring
// pull out properties in own variables

//
// Example 1
//
const person = {
    name: 'Gerald',
    age: 40,
    location: {
        city: 'Vienna',
        temp: 600
    }
};

// old syntax
// too much duplicate vars
if (person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}.`);  
}

// const name = person.name;
// const age = person.age;
// fallback to anonymous

// simpilfied
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp } = person.location;

if (city && temp) {
    console.log(`It's ${temp} in ${city}.`);  
}

//
// Example 2
//
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log({publisherName});  // Penguin, SelfPublished

//
// Example 3
//
const item = ['Coffee (iced)', '$ 3.00', '$ 3.50', '$ 3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);