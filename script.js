let first_num = '';
let second_num = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

const out = document.querySelector('.result p');
function clearAll () {
    first_num = '';
    second_num = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

const ac = document.querySelector('.ac');
ac.addEventListener('click', () => {
    clearAll()
})

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) => {
        if(!event.target.classList.contains('btn')) return;
        if(event.target.classList.contains('ac')) return;
    
        out.textContent = '';
        const key = event.target.textContent;
    
        //if press any of numbers
        if(digit.includes(key)){
            if(second_num === '' && sign === ''){
                first_num += key;

                out.textContent = first_num;
            } 
            else if(first_num !== '' && second_num !== '' && finish){
                second_num = key;
                finish = false;
                out.textContent = second_num;
            } 
            else {
                second_num += key;
                out.textContent = second_num;
            }
            return;
        }

        //if press button + - / *
        if(action.includes(key)){
            sign = key;
            out.textContent = sign;
            return;
        }

        //if press =
        if(key === '='){
            if(second_num === '') second_num = first_num;
            switch(sign){
                case'+':
                    first_num = (+first_num) + (+second_num);
                    break;
                case'-':
                    first_num = first_num - second_num;
                    break;
                case'x':
                    first_num = first_num * second_num;
                    break;
                case'/':
                    if(second_num === '0') {
                        out.textContent = 'Error';
                        first_num = '';
                        second_num = '';
                        sign = '';
                        return;
                    }
                    first_num = first_num / second_num;
                    break;
            }
            finish = true;
            out.textContent = first_num;
        }
})

