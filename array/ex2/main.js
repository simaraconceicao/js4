const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Pri Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

let form = document.getElementById('form-do-role')
let input= document.getElementById('nome')
let btn = document.getElementById('btn')
let status = document.getElementById('status')


btn.addEventListener("click", function(event){
    event.preventDefault()   
    let arrayProcura = nomesNoRole.filter((nome)=> nome === input.value)
    console.log(arrayProcura)
    
    if(arrayProcura.length>0){
        let yes = document.createElement('p')
        yes.textContent = "está no rolê!"
        status.appendChild(yes)
    } else{
        let no = document.createElement('p')
        no.textContent = "Não está no rolê!"
        status.appendChild(no)
    }

})