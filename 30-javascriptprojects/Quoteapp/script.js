const Quote = [
 
    {Quote :  "how are you 1" ,
        author : "vishal" , 
    } , 

    {Quote :  "how are you 2" ,
        author : "Rahul" , 
    } , 
    {Quote :  "how are you 3" ,
        author : "neeru" , 
    } , 

    {Quote :  "how are you 4" ,
        author : "jassi" , 
    } , 

    {Quote :  "how are you 5" ,
        author : "tilak" , 
    } , 



];

const Quotebutton = document.querySelector('.QuoteButton') ; 
const Container = document.querySelector('.Container'); 


function StartQuote(){
     Quotebutton.addEventListener("click" , () => {
    
        Quotebutton.textContent = "nextQuote"

        showQuote() ; 
         
     })
}


let index = 0  ; 
function showQuote(){
    const existingQuote = document.querySelector('.message');
    if (existingQuote) {
        existingQuote.remove();
    }


    const message = document.createElement('div')
    message.classList.add('message')
    const pQuote = document.createElement('p')
    const pauthor = document.createElement('p') ; 
     
   
    pQuote.innerText = `${Quote[index].Quote}` ; 
    pauthor.innerText = `${Quote[index].author} `; 

    
    message.appendChild(pQuote) ; 
    
    message.appendChild(pauthor)
    Container.appendChild(message)

    index = (index + 1) % Quote.length

}

function tweet(){
     window.open("https://twitter.com/intent/tweet?text=Hello%20world" )
}

const TweetButton = document.querySelector('.TweetButton') ; 

TweetButton.addEventListener("click" , function(){
     tweet()
})

StartQuote()