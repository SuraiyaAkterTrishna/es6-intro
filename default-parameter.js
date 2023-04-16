function sum(first, second = 10){
    return first + second;
}
const total = sum(10, 1);
console.log(total);

function fullName(firstName, lastName = 'Hassan'){
    return firstName + ' ' + lastName;
}
const myName = fullName('Rukaiyah', 'Islam');
console.log(myName);