let string = "";
let buttons = document.querySelectorAll('.fourth');
Array.from(buttons).forEach((fourth)=>{
    fourth.addEventListener('click', (e)=>{

        if (e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'Back') {
            length = string.length
            string = string.slice(0,length-1)
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})