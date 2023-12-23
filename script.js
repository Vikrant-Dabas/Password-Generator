let len = $('#len');
let upper = $('#upper');
let lower = $('#lower');
let no = $('#no');
let symbol = $('#symbol');
let display = $('.display');
let generate = $('.generate');
let copy = $('.copy');

let password = "";
let choices = [];
if(symbol.is(':checked')) choices.push('S');
if(no.is(':checked')) choices.push('N');
if(upper.is(':checked')) choices.push('U');
if(lower.is(':checked')) choices.push('L');

upper.click(()=>{
    let checked = upper.is(':checked');
    if(!checked){
        choices = $.grep(choices,function(value){
            return value != 'U';
        })
    }
    else{
        choices.push('U');
    }
})
lower.click(()=>{
    let checked = lower.is(':checked');
    if(!checked){
        choices = $.grep(choices,function(value){
            return value != 'L';
        })
    }
    else{
        choices .push('L');
    }
})
no.click(()=>{
    let checked = no.is(':checked');
    if(!checked){
        choices = $.grep(choices,function(value){
            return value != 'N';
        })
    }
    else{
        choices.push('N');
    }
})
symbol.click(()=>{
    let checked = symbol.is(':checked');
    if(!checked){
        choices = $.grep(choices,function(value){
            return value != 'S';
        })
    }
    else{
        choices.push('S');
    }
})

generate.click(()=>{
    console.log(choices);
    password = "";
    for(let i = 0;i<len.val();i++){
        let rand = Math.floor(Math.random()*choices.length);
        if(choices[rand] == 'U'){
            let randLetter = Math.floor(Math.random()*26);
            let char = String.fromCharCode(65 + randLetter);
            password += char;
        }
        if(choices[rand] == 'L'){
            let randLetter = Math.floor(Math.random()*26);
            let char = String.fromCharCode(97 + randLetter);
            password += char;
        }
        if(choices[rand] == 'N'){
            let randLetter = Math.floor(Math.random()*10);
            let char = String.fromCharCode(48 + randLetter);
            password += char;
        }
        if(choices[rand] == 'S'){
            let randLetter = Math.floor(Math.random()*15);
            let char = String.fromCharCode(33 + randLetter);
            password += char;
        }
    }
    display.text(password);
    console.log(password)
})