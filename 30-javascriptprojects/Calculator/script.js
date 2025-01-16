const inputArea = document.querySelector('#inputarea');
const buttons = document.querySelectorAll('.Buttons');

const equal = document.querySelector('.equal')

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.value || e.target.textContent;

     
        
        // Clear the input if "AC" button is clicked
        if (buttonValue === 'AC') {
            inputArea.value = '';
        } 
        

        else if (buttonValue === '=') {
         try {
             inputArea.value = eval(inputArea.value); // Use with caution
         } catch (error) {
             inputArea.value = 'Error';
         }
     } 

else{
   inputArea.value += buttonValue
}
        
    });
});
