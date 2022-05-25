let statement;
let count = 0;
let storedValue = 0;
let addValue = 0;
let subValue = 0;
let multiValue = 0;
let divValue = 0;

function btn0() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=0;
    } else {
        return document.getElementById('calcScreen').textContent = count +='0';
    }
}
function btn1() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=1;
    } else {
        return document.getElementById('calcScreen').textContent = count +='1';
    }
}
function btn2() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=2;
    } else {
        return document.getElementById('calcScreen').textContent = count +='2';
    }
}
function btn3() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=3;
    } else {
        return document.getElementById('calcScreen').textContent = count +='3';
    }
}
function btn4() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=4;
    } else {
        return document.getElementById('calcScreen').textContent = count +='4';
    }
}
function btn5() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=5;
    } else {
        return document.getElementById('calcScreen').textContent = count +='5';
    }
}
function btn6() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=6;
    } else {
        return document.getElementById('calcScreen').textContent = count +='6';
    }
}
function btn7() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=7;
    } else {
        return document.getElementById('calcScreen').textContent = count +='7';
    }
}
function btn8() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=8;
    } else {
        return document.getElementById('calcScreen').textContent = count +='8';
    }
}
function btn9() {
    if (count === 0) {
        return document.getElementById('calcScreen').textContent = count +=9;
    } else {
        return document.getElementById('calcScreen').textContent = count +='9';
    }
}
function btnAdd() {
    document.getElementById('btnAdd');
    addValue = count;
    count = 0;
    statement = 'addition'
}
function btnSub() {
    document.getElementById('btnSub');
    subValue = count;
    count = 0;
    statement = 'subtract'
}
function btnMulti() {
    document.getElementById('btnMulti');
    multiValue = count;
    count = 0;
    statement = 'multiply'
}
function btnDiv() {
    document.getElementById('btnDiv');
    divValue = count;
    count = 0;
    statement = 'divide'
}
function btnReset() {
    count = 0;
    document.getElementById('calcScreen').textContent = count;
}
function btnDeci() {
    document.getElementById('calcScreen').textContent = count += '.';
}
function btnDel() {
    let removeDigit = count.substring(0, count.length - 1);
    document.getElementById('calcScreen').textContent = removeDigit;
    count = removeDigit;
}
function btnEqual() {
    document.getElementById('btnEqual');
    let finalAddValue = parseFloat(addValue);
    let finalSubValue = parseFloat(subValue);
    let finalMultiValue = parseFloat(multiValue);
    let finalDivValue = parseFloat(divValue);
    let finalValue = parseFloat(count);
    if (statement === 'subtract') {
        document.getElementById('calcScreen').textContent = finalSubValue - finalValue;
    } else if (statement === 'addition') {
        document.getElementById('calcScreen').textContent = finalAddValue + finalValue;
    } else if (statement === 'multiply') {
        document.getElementById('calcScreen').textContent = finalMultiValue * finalValue;
    } else if (statement === 'divide') {
        document.getElementById('calcScreen').textContent = finalDivValue / finalValue;
    }
    count = 0;
}
