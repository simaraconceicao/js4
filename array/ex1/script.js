// ;
// let btn = document.getElementById("btn")
// let input = document.getElementById("input")

// console.log(btn)

// btn.addEventListener(submit, function(){
//     let arrayProcura = frutas.filter((fruta)=> fruta === input.value)
//     console.log(arrayProcura)
// })

let frutas = ["banana", "morango", "bacurí", "laranja"]

let input = document.getElementById('input')
console.log(input)
let btn = document.getElementById("btn")
console.log(btn)

btn.addEventListener("click", function(){
    
    let arrayProcura = frutas.filter((fruta)=> fruta === input.value)
    console.log(arrayProcura)
    
    if(arrayProcura.length>0){
        console.log("temos essa fruta!")
    } else{
        console.log("não temos essa fruta")
    }
})
