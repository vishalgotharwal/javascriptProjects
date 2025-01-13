const passwordButton = document.querySelector("#passwordButton")

const passwordshow = document.querySelector('#passwordshow')
const copyButton = document.querySelector('#copyButton')


const number = '0123456789' 
    const specialCharacter = '!@#$%^&*()'
 const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


passwordButton.addEventListener("click" , function(){
     generate() ; 
})
function generate(lenght = 10){
let passwordValue = number + specialCharacter + alphabet ; 
let password = " " ; 


     for(let i = 0 ; i<lenght ; i++){
         
        const randomIndex  =  Math.floor(Math.random() * passwordValue.length) ; 
        password += passwordValue[randomIndex] ; 
     
     }
     passwordshow.value = password ; 
   
 }


 copyButton.addEventListener("click" , () =>{
     passwordshow.select() ;
     document.execCommand("copy")
     alert("password copied")
 })
