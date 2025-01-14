const API = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

const Input = document.querySelector('#Input')
const generator= document.querySelector('#generator')
const container= document.querySelector('.container')
const QRCODE = document.querySelector('.QRCODE')

generator.addEventListener("click" , ()=>{
      GetQr()
})


 function GetQr() {
 const inputvalue = Input.value.trim()


 QRCODE.innerHTML = ''

    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}` , {
        method : 'GET' , 
     
    } ).then(response=> response.blob() )
    .then(data => {
     const Qrcode = document.createElement('div')
     const image = document.createElement('img')
     image.src = URL.createObjectURL(data)
     Qrcode.classList.add('QRCODE')

     Qrcode.appendChild(image)

     QRCODE.appendChild(Qrcode)

    })
    .catch(error => console.error(error));
    Input.value = ''
    
 }