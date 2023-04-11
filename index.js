// Calculator


const numOne = document.getElementById("numberOne")
const numTwo = document.getElementById("numberTwo")
const sumEl = document.getElementById("sum-el")


document.addEventListener('click',function (e) {
    if (e.target.id === 'add') {
        add();
    } else if (e.target.id === 'subtract') {
        subtract();
    } else if (e.target.id === 'divide') {
        divide();
    } else if (e.target.id === 'multiply') {
        multipy();
    } 
})

function add() {
   const result = parseInt(numOne.value) + parseInt(numTwo.value)
   sumEl.innerHTML = result
}

function subtract() {
    const result = parseInt(numOne.value) - parseInt(numTwo.value)
    sumEl.innerHTML = result
}


function divide() {
    const result = parseInt(numOne.value) / parseInt(numTwo.value)
    sumEl.innerHTML = result
}

function multipy(multiplyId) {
    const result = parseInt(numOne.value) * parseInt(numTwo.value)
    sumEl.innerHTML = result
}


