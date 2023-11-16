// object - OOP

// person
// id, name, age

const id = 123123123;
const name = "yishai";
const age = 34;

// object store multiple values
const person = {
    id: 123123,
    name: "yishai",
    age: 34,
    hobbies: [123, 45, false],
    child: {
        name: "bob",
        age: 4
    },
};
// key: value pairs
// console.log(person['id']);
person['id'] = 9999999;
// console.log('person', person);

// object operations
const keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
}


for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
    }
}

// access values
// objectName['keyAsAString'] - bracket notation
// objectName.keyName - dot notation

// person['name'];

// person.name;

const keyName = "age";
// console.log('bracket notation', person[keyName]); // person["age"]
// console.log('dot notation', person.keyeName); // person["keyName"]

// delete operator
delete person.id;
delete person["id"];