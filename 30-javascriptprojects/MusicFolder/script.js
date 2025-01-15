const pauseimg = document.querySelector('#pauseimgid')

let  toogle  = true ; 
console.log("start")
pauseimg.addEventListener("click" , ()=>{

  

    if(toogle === true ){
         
        pauseimg.src = "https://icons.iconarchive.com/icons/hopstarter/button/128/Button-Pause-icon.png" 
        toogle = false ;

    }    
    else{
        pauseimg.src = 'https://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/128/Start-icon.png' 
        toogle = true ; 
    }

       
})