import y from './exportDemo.js'
let question1TL = document.getElementById("check1TL")
let question1TT = document.getElementById("check1TT")
let answer1TT = document.getElementById("answer1")

let question2PFA = document.getElementById("check2PFA")
let question2FRF = document.getElementById("check2FRF")
let question2FCF = document.getElementById("check2FCF")
let answer2FCF = document.getElementById("answer2")

let answer3 = document.getElementById('answer3')
let question3E = document.getElementById("check3E")
let question3D = document.getElementById("check3D")

let answer4 = document.getElementById('answer4')
let question4E = document.getElementById("check4E")
let question4D = document.getElementById("check4D")

let answer5 = document.getElementById('answer5')
let question5E = document.getElementById("check5E")
let question5D = document.getElementById("check5D")

let answer6 = document.getElementById('answer6')
let question6E = document.getElementById("check6E")
let question6D = document.getElementById("check6D")

let answer7 = document.getElementById('answer7')
let question7E = document.getElementById("check7E")
let question7D = document.getElementById("check7D")

let templateLiterals = _e => {
    let answer = prompt("What comes after hello?")
    let res = `Answer: ${!answer ? 'you didn\'t enter' :
        `hello-${answer === "world" ? 'worlder' : 'wrong answer'}`}`;
    alert(res)
}
function highlight(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        str += `<h6> ${string} &nbsp; <h5> ${values[i] || ''}  &nbsp; 
        </h5> </h6>`
    });
    return str;
}

let taggedTemplate = _e => {
    const name = prompt("Enter your name:");
    const age = prompt("Enter your age: ");
    const sentence = highlight`Your name is ${name} and you are ${age} years old`;
    answer1TT.innerHTML = (sentence)
}

question1TL.addEventListener('click', templateLiterals)
question1TT.addEventListener('click', taggedTemplate)

let explain2 = () => {
    let answer = `First-class functions => when functions in that language are treated like any other variable. \n
                    For example let somefunction = () => {do sth}
                    We can pass somefunction as a parameter or it maybe returned from a function`
    answer2FCF.innerHTML = `<h6> ${answer} </h6>`
}

let getName = () => prompt("Enter your name:");

let passingArgument = (name, greeting = "Hello!!!") => {
    alert(`${greeting} ${name()}`)
}

let doWork = () => {
    return function calculate(y) { return y + 1; };
}
let returningFunction = (parameter) => {
    let func = doWork();
    let x = func(parameter);
    alert(x);
}

question2FCF.addEventListener('click', explain2)
question2PFA.addEventListener('click', function () {
    passingArgument(getName)
}
)
question2FRF.addEventListener('click', function () { returningFunction(5) })

let explain3 = () => {
    let answer = `<h6>Functions can access global variables, but local (blocked) variables cannot be accessed in a function.
                    Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.<h6>`
    answer3.innerHTML = answer
}
let LetCounter = 0
var VarCounter = 0
let closures = () => {
    VarCounter += 54
    let LetCounter = 7
    LetCounter++
    console.log(LetCounter)
}
function add() {
    var counter = 0;
    counter += 1;
    return counter;
}

question3D.addEventListener('click', function () {
    let answer = `<h6>Refer to console<h6>`
    answer3.innerHTML = answer

    console.log(LetCounter)
    console.log(VarCounter)
    closures()
    console.log(LetCounter)
    console.log(VarCounter)
    add()
    console.log(add())
})
question3E.addEventListener('click', explain3)


let explain4 = () => {
    let answer = `<h6>Reflection is the ability of a program to manipulate variables, properties, and methods of objects at runtime.
    Reflect is similar to the Math and JSON objects. All the methods of the Reflect object are static.<h6>`
    answer4.innerHTML = answer

}
question4E.addEventListener('click', explain4)


let explain5 = () => {
    let answer = `<h6>We can only have one default export per module.
    Default export can be imported with any name<h6>`
    answer5.innerHTML = answer
}
question5E.addEventListener('click', explain5)


let explain6 = () => {
    let answer = `<h6>Iterator is an object which defines a sequence and potentially a return value upon its termination.
    Once created, an iterator object can be iterated explicitly by repeatedly calling next().
    <br>
    When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.
    <h6>`
    answer6.innerHTML = answer
}
question6E.addEventListener('click', explain6)


let explain7 = () => {
    let answer = `<h6><h6>`
    answer7.innerHTML = answer
}
question7E.addEventListener('click', explain7)


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

let demo4 = () => {
    let firstName = prompt("First name: ")
    let lastName = prompt("Last name: ")
    let args = [firstName, lastName];

    let user = Reflect.construct(
        Person,
        args
    );
    alert("Refer to console")
    console.log("user instanceof Person", user instanceof Person);
    console.log("user.fullName", user.fullName);
}
question4D.addEventListener('click', demo4)


let demo5 = () => {
    alert(y)
}
question5D.addEventListener('click', demo5)

function iterators() {
    console.log("iterators")
    const numbers = [1, 3, 4];
    
    console.log(numbers)

    const iterator = numbers[Symbol.iterator]();

    console.log(iterator.next()); // => { value: 1, done: false }
    console.log(iterator.next()); // => { value: 2, done: false }
    console.log(iterator.next()); // => { value: 3, done: false }
    console.log(iterator.next()); // => { value: undefined, done: true }
}
function* yieldingGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
function generators() {
    console.log("Generators")
    const gen = yieldingGenerator()
    console.log(gen)

    console.log(gen.next()); // => { value: 1, done: false }
    console.log(gen.next()); // => { value: 2, done: false }
    console.log(gen.next()); // => { value: 3, done: false }
    console.log(gen.next()); // => { value: undefined, done: true }
}
let demo6 = () => {
    alert("Refer to console")
    iterators()
    generators()
}
question6D.addEventListener('click', demo6)


let demo7 = () => {
}
question7E.addEventListener('click', demo7)
