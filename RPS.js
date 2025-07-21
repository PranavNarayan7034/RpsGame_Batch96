// Actual Code:

var i = document.getElementById('inp')
let userSeletion;
let computerSelection;
let x = document.getElementById('result')
let us = document.getElementById('us')
let cs = document.getElementById('cs')

function Userchoice(choice) {
    userSeletion = choice
    i.value = choice
}

let c = ['rock', 'paper', 'scissors']
let comp_score = 0
let user_score = 0
function StartGame() {
    let r = Math.floor(Math.random() * 3)
    computerSelection = c[r]
    us.textContent = `User Selection: ${userSeletion}`
    cs.textContent = `Computer Selection: ${computerSelection}`

    if (userSeletion == 'rock') {
        if (computerSelection == 'rock') {
            x.textContent = 'Tie'
        }
        else if (computerSelection == 'paper') {
            x.textContent = 'Computer Won'
            comp_score += 1
        }
        else {
            x.textContent = 'You Won'
            user_score += 1
        }
    }
    
    else if (userSeletion == 'paper') {
        if (computerSelection == 'rock') {
            x.textContent = 'You won'
            user_score += 1
        }
        else if (computerSelection == 'paper') {
            x.textContent = 'Tie'
        }
        else {
            x.textContent = 'Computer Won'
            comp_score += 1
        }
    }
    
    else if (userSeletion == 'scissors') {
        if (computerSelection == 'rock') { 
            x.textContent = 'Computer Won'
            comp_score += 1
        }
        else if (computerSelection == 'paper') {
            x.textContent = 'You won'
            user_score += 1
        }
        else {
            x.textContent = 'Tie'
        }
    }
    console.log("com.score=", comp_score)
    console.log('user score=',user_score)
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





// let count = 15 
// function myfn() {
//     count += 1;
//     console.log(count)
// }
// myfn()
// myfn()
// myfn()
// myfn()


// function myfn1() {
//     let count = 20;
//     count += 1
//     console.log(count)
// }

// myfn1()
// myfn1()


// let mark = 10
// function myfn2() {
//     let mark = 20 
//     mark += 5 
//     console.log(mark)
// }
// console.log(mark)
// myfn2()
