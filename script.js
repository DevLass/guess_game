var button_var = document.querySelector('#btn')
var button_div = document.querySelector('#btn_div')
var button_bigger = document.querySelector('#btn_bigger')
var button_lesser = document.querySelector('#btn_lesser')

//var op_number = document.querySelector('#op_number')

var op_count = 0; 

var number = [Math.floor(Math.random() * 100)]
console.log(number)

var lang = 0 //0 to English, 1 to Portuguese
var button_lang = document.querySelector('#btn_lang')
var congrats = document.querySelector('#congrats')
var title_text_1 = document.querySelector('#first_title_text')
var title_text_2 = document.querySelector('#second_title_text')
var rules_text = document.querySelector('#rules_text')

var rule_popout_title = document.querySelector('#rule_popout_title')
var rules_1 = document.querySelector('#rules_1')
var rules_2 = document.querySelector('#rules_2')
var rules_3 = document.querySelector('#rules_3')
var rules_4 = document.querySelector('#rules_4')


button_lang.addEventListener('click', function(e){
    lang = lang+1
    if(lang % 2){
        rules_text.innerText = 'Regras';
        congrats.innerText = 'Estou pensando em um número de 1 a 100...';
        title_text_1.innerText = 'Faça algumas operações!';
        button_div.innerText = 'Divisível por';
        button_bigger.innerText = 'Maior que';
        button_lesser.innerText = 'Menor que';
        title_text_2.innerText = 'E tente advinhar!';
        button_var.innerText = 'Enviar';
        rule_popout_title.innerText = 'Regras';
        rules_1.innerText = '-Você tem que advinhar um número (1-100)';
        rules_2.innerText = '-Você pode usar cada operação 2 vezes';
        rules_3.innerText = '-Verde significa verdadeiro, vermelho falso';
        rules_4.innerText = 'Boa sorte!!';
    }else{
        rules_text.innerText = 'Rules';
        congrats.innerText = 'Im thinking of a number from 1 to 100...';
        title_text_1.innerText = 'Do some operations!';
        button_div.innerText = 'Divisible by';
        button_bigger.innerText = 'Bigger then';
        button_lesser.innerText = 'Lesser then';
        title_text_2.innerText = 'And try to guess!';
        button_var.innerText = 'Send';
        rule_popout_title.innerText = 'Rules';
        rules_1.innerText = '-You have to guess the number (1-100)';
        rules_2.innerText = '-You can use each operation only twice';
        rules_3.innerText = '-Green means true, red false';
        rules_4.innerText = 'Good Lucky!!';
    }

})
var button_div_count = 0;
button_div.addEventListener('click', function(e){
    e.preventDefault();

   // op_count = op_count + 1
   // op_number.innerText = op_count + ' Operations performed';
    
    var input_div = document.querySelector('#input_div');
    var input_value_div = Number(input_div.value);
    var result = Number(number)%input_value_div
    if(result == 0){
        input_div.classList.remove('red_input');
        input_div.classList.add('green_input');
    }else{
        input_div.classList.remove('green_input');
        input_div.classList.add('red_input');
    }

    button_div_count = button_div_count + 1;
    if(button_div_count == 2){
        button_div.classList.remove('simple_button');
        button_div.classList.add('button_disabled');
        button_div.classList.add('grey_input');
        button_div.disabled = true
        button_div.style.cursor = 'no-drop';
    }

})


var button_bigger_count = 0;
button_bigger.addEventListener('click', function(e){
    e.preventDefault();

   // op_count = op_count + 1
   // op_number.innerText = op_count + ' Operations performed';

    var input_bigger = document.querySelector('#input_bigger');
    var input_value_bigger = Number(input_bigger.value);
    if(input_value_bigger < Number(number)){
        input_bigger.classList.remove('red_input');
        input_bigger.classList.add('green_input');
    }else{
        input_bigger.classList.remove('green_input');
        input_bigger.classList.add('red_input');
    }

    button_bigger_count = button_bigger_count + 1;
    if(button_bigger_count == 2){
        button_bigger.classList.remove('simple_button');
        button_bigger.classList.add('button_disabled');
        button_bigger.classList.add('grey_input');
        button_bigger.disabled = true
        button_bigger.style.cursor = 'no-drop';
        
    }
})

var button_lesser_count = 0;
button_lesser.addEventListener('click', function(e){
    e.preventDefault();

   // op_count = op_count + 1
   // op_number.innerText = op_count + ' Operations performed';

    var input_lesser = document.querySelector('#input_lesser');
    var input_value_lesser = Number(input_lesser.value);
    if(input_value_lesser > Number(number)){
        input_lesser.classList.remove('red_input');
        input_lesser.classList.add('green_input');
    }else{
        input_lesser.classList.remove('green_input');
        input_lesser.classList.add('red_input');
    }

    button_lesser_count = button_lesser_count + 1;
    if(button_lesser_count == 2){
        button_lesser.classList.remove('simple_button');
        button_lesser.classList.add('button_disabled');
        button_lesser.classList.add('grey_input');
        button_lesser.disabled = true;
        button_lesser.style.cursor = 'no-drop';
       // button_lesser.classList.add('shake-horizontal');
    }
})

button_var.addEventListener('click', function(e){
    e.preventDefault();

    var input = document.querySelector('#userinput');
    var input_value = Number(input.value);
    if(lang % 2){
        if(input_value == Number(number)){
            congrats.innerText = 'MEU DEUS! VOCÊ ACERTOU!!!';
            congrats.classList.remove('red_input');
            congrats.classList.add('green_input');
        }else{
            congrats.innerText = 'Desculpe, você errou...';
            congrats.classList.remove('green_input');
            congrats.classList.add('red_input');
        }    
    }else{
        if(input_value == Number(number)){
            congrats.innerText = 'Wooow, you got it right!!';
            congrats.classList.remove('red_input');
            congrats.classList.add('green_input');
        }else{
            congrats.innerText = 'Sorry, you were wrong...';
            congrats.classList.remove('green_input');
            congrats.classList.add('red_input');
        }
        
    }
})

// Make a lucky test someday 

const popup = document.querySelector('.popup-wrapper')
const close_button = document.querySelector('.popup-close')

function active_popup(){
    popup.style.display = 'block'
}

function close_popup(){
    popup.style.display = 'none'
}

