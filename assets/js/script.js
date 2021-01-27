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

let explain = () => {
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

question2FCF.addEventListener('click', explain)
question2PFA.addEventListener('click', function () {
    passingArgument(getName)
}
)
question2FRF.addEventListener('click', function(){returningFunction(5)})

question3D.addEventListener('click', )
question3E.addEventListener('click', )