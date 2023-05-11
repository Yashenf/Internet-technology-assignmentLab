/*
* Created by : @yash
*              5/11/2023 , Thursday
*              06:57 PM
* Project : Assignments lab
* Contact me : contact.yashen@gmail.com 
*/

let firstNumber;
let operator;
const func1= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+1;
}

const func2= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+2;
}

const func3= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+3;
}

const func4= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+4;
}

const func5= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+5;
}

const func6= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+6;
}

const func7= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+7;
}

const func8= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+8;
}

const func9= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+9;
}

const func0= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+0;
}

const func_dot= ()=>{
    const pre= document.getElementById('display').innerText;
    document.getElementById('display').innerText=pre+'.';
}

const func_e= ()=>{
    const pre= document.getElementById('display').innerText;
    const curr= pre.slice(0,-1);
    document.getElementById('display').innerText=curr;
}

const func_sum= ()=>{
    firstNumber= Number(document.getElementById('display').innerText);
    document.getElementById('display').innerText='';
    operator='+';
}

const func_sub= ()=>{
    firstNumber= Number(document.getElementById('display').innerText);
    document.getElementById('display').innerText='';
    operator='-';
}

const func_mul= ()=>{
    firstNumber= Number(document.getElementById('display').innerText);
    document.getElementById('display').innerText='';
    operator='*';
}

const func_dev= ()=>{
    firstNumber= Number(document.getElementById('display').innerText);
    document.getElementById('display').innerText='';
    operator='/';
}

const equals= ()=>{
    const secondNumber= Number(document.getElementById('display').innerText);
    let result;
    switch (operator) {
        case '+':{
            result=firstNumber+secondNumber;
            break;
        }case '-':{
            result=firstNumber-secondNumber;
            break;
        }case '*':{
            result=firstNumber*secondNumber;
            break;
        }case '/':{
            result=firstNumber/secondNumber;
            break;
        }default:{
            result='invalied';
        }
    }
    document.getElementById('display').innerText=result;
}

const ac= ()=>{
    document.getElementById('display').innerText='';
}

