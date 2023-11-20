let box = document.querySelector('.box');
let generate = document.querySelector('#generate');
let clear = document.querySelector('#clear');
generate.addEventListener('click', ()=> {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    let number3 = Math.floor(Math.random() * 10);
    let number4 = Math.floor(Math.random() * 10);
    let number5 = Math.floor(Math.random() * 10);
    let number6 = Math.floor(Math.random() * 10);
    if(generate.style.boxShadow = true && clear.style.boxShadow === true) {
        generate.style.boxShadow = 'none';
    } else {
        generate.style.boxShadow = 'none';
    }
    return box.innerText = `${number1}${number2}${number3}-${number4}${number5}${number6}`;
})
clear.addEventListener('click', ()=> {
    if(generate.style.boxShadow = 'none') {
        generate.style.boxShadow = '2px 2px 2px black';
    }
    clear.style.boxShadow = 'none';
    return box.innerText = '';
})