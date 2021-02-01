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
question2FRF.addEventListener('click', function(){returningFunction(5)})

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
  
question3D.addEventListener('click', function(){
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
}
question4E.addEventListener('click', explain4)


let explain5 = () => {
}
question5E.addEventListener('click', explain5)


let explain6 = () => {
}
question6E.addEventListener('click', explain6)


let explain7 = () => {
}
question7E.addEventListener('click', explain7)



let demo4 = () => {
}
question4E.addEventListener('click', demo4)


let demo5 = () => {
}
question5E.addEventListener('click', demo5)


let demo6 = () => {
}
question6E.addEventListener('click', demo6)


let demo7 = () => {
}
question7E.addEventListener('click', demo7)
