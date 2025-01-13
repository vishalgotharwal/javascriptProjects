const createNotes = document.querySelector('#createNotes') 
const inputcontainer = document.querySelector('.inputbox') 


let notes = document.querySelectorAll('.Input-box-p')


function shownotes() {
     inputcontainer.innerHTML = localStorage.getItem('notes')
}
shownotes()

createNotes.addEventListener("click" , ()=>{
   
     const inputbox = document.createElement('p') 
    const img = document.createElement('img')

    inputbox.className = 'Input-box-p'
    inputbox.setAttribute("contenteditable" , "true")
    img.src = "https://img.icons8.com/?size=100&id=67884&format=png&color=000000"

    inputcontainer.appendChild(inputbox)
    inputbox.appendChild(img)
   
   
})

inputcontainer.addEventListener("click" , (e) =>{
     if(e.target.tagName === 'IMG'){
         e.target.parentElement.remove()
         updateStorage()
     }
     else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll(".Input-box-p") ; 
        notes.forEach(nt => {
            nt.onkeyup = function(){
                 updateStorage()
            }
        })
     }
})

function updateStorage(){
     localStorage.setItem('notes' , inputcontainer.innerHTML) ; 
}



