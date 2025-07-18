// Actual Code:

var i = document.getElementById('inp')
let userSeletion;
let computerSelection;
function Userchoice(choice) {
    userSeletion = choice
    i.value = choice
}

let c = ['rock', 'paper', 'scissors']
function StartGame() {
    let r = Math.floor(Math.random() * 3)
    computerSelection = c[r]
    console.log("usr slcg==",userSeletion)
    console.log("com slcg==",computerSelection)

    if (userSeletion == 'rock') {
        if (computerSelection == 'rock') {
            console.log("Tie")
        }
        else if (computerSelection == 'paper') {
            console.log("Computer Won")
        }
        else {
            console.log("You Won")
        }
    }
    
    else if (userSeletion == 'paper') { }
    
    else if (userSeletion == 'scissors') { }
    
}










// Concepts:




// let c = ['rock', 'paper', 'scissors']
// console.log(c[2])
// let r = Math.floor(Math.random()*3)
// console.log(r)
// let computerSelection = c[r]
// console.log("computerSelection==",computerSelection)


// var a = 10 
// var a = 20 
// var a = 30
// console.log(a)

// var b = 30
// b = 40
// b += 4
// console.log(b)


// let m = 10 
// // let m = 20 
// // console.log(m)
// m = 20;
// m += 5
// console.log(m)

// const x = 50 
// // const x = 60 
// // x = 10 
// console.log(x)




// var a = 10  /// global variable 
// function myfn1() {
//     var a = 50  // local variables
//     console.log("inside fn a==",a)
// }

// myfn1()
// console.log("outside fn a==", a)

// let n = 100
// function myfn2() {
//     n = 150;
//     console.log("inside fn n ==",n)
// }
// myfn2()
// console.log("outside fn n ==", n)




// let m = 10;
// let n = 30;

// if (m == 10) {
//     if (n >= 15) {
//         console.log("hello")
//     }
// }

// if (m == 10) {
//     if (n >= 15) {
//         console.log("hello")
//     }
//     else {
//         console.log("Hey")
//     }
// }
// else {
//     console.log("Exit")
// }
