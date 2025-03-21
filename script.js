let input = document.getElementById('inputbox');
let buttens = documents.queryselectorAll('button');

let string = "";
arr.forEach(button => {
    button.addEventlistenear {'click', (e) => {
        if (e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            
        }
        else if (e.target.innerHTML == 'AC'){
            string ="";
        input.value = string;
        } 
        else if(e.target.innerHTML == 'DEL'){
            string =string.substring(0, string.length-1);
        }

        else{ 
            string += e.target.innerHTML;
            input.value = string;
        }

    
})
