const button = document.querySelector("#Button")
const Input = document.querySelector('.Input');
const div = document.querySelector('.Todocreation')


button.addEventListener("click" , function(){
    //  const UserInput = Input.value ; 
        
    //  const IMGCIRCLE = ` <img src="https://img.icons8.com/?size=100&id=78597&format=png&color=000000" alt=""></img>`
      
    //  const text = `${UserInput}`

    //  const cross =     `<button ><img src="https://img.icons8.com/?size=100&id=6483&format=png&color=000000" alt=""></button>`


  addTODO(  ) ; 

    //  const newDiv = document.createElement('div')
    //  newDiv.appendChild("hi")

})

function addTODO(){
    console.log(Input.value)
    
    if(Input.value.trim() === '') {

    alert("please enter a task")
    return 
    }

        
             let li = document.createElement('li') 
         
            
             li.textContent = Input.value 
             let button = document.createElement('button')
             button.innerHTML = `<img src="https://img.icons8.com/?size=100&id=6483&format=png&color=000000" alt="">`
             button.className = "crossButton"
             li.appendChild(button)
             div.appendChild(li)
            
             Input.value = " "

        }






// crossButton.addEventListener("click" , (e) =>{
//      crossButton.forEach(function(index){
//      crossButton.addEventListener("click" , () => {
//          li.remove()
//      })
// })
// })

div.addEventListener("click" , function(e){
     if(e.target.closest('.crossButton')){
         e.target.closest('li').remove()
     }
})
