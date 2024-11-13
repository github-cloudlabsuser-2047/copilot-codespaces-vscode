const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = data.map(person => person.name);

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
const nestedData = [
    [
        { name: 'John', age: 22 },
        { name: 'Jane', age: 28 }
    ],
    [
        { name: 'Bob', age: 34 }
    ]
];

const nestedNames = nestedData.flatMap(group => group.map(person => person.name));

console.log(nestedNames); // Output: ['John', 'Jane', 'Bob']