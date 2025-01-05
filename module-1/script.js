let string = "";
let buttons = document.querySelectorAll('.button');
const inputDisplay = document.querySelector('input');

inputDisplay.value = '0';

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
    
        if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }
    
        else if(e.target.innerHTML == 'C'){
        string = ''
        document.querySelector('input').value = string;
    }
    
        else if(e.target.innerHTML == 'Del'){
        string=string.slice(0,-1);
        document.querySelector('input').value = string;
    }
    
        else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
        }
    })
})
// make sure only 1 operator csn be put if another operator is used make it to replace it.
//add the function of .
// and remove its error such as double . error
// test out the correct order of C Del =  