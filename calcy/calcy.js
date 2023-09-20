let count =0;
function into(a){
    document.myform.txt.value += a;
}

function result(){
    document.myform.txt.value = eval(document.getElementById('display').value);
}

clr=()=>{
    document.myform.txt.value = '';
}

delt=()=>{
    text = document.getElementById('display').value;
    // document.myform.txt.value = text.substr(0, text.length - 1);
    document.myform.txt.value = text.slice(0,-1);
}

// function sign(){
sign=()=>{
    let text = document.getElementById('display').value;
    let firstLetter = text.substr(0,1);
    let sig="-";
    if(firstLetter != '-'){
        text = sig.concat(text);
            document.myform.txt.value = text;
    }
    else{
        document.myform.txt.value = text.substr(1, text.length);
    }
}

sqRoot = () =>{
    num = (document.getElementById('display').value);
    document.myform.txt.value = Math.sqrt(num);
}

prct=()=>{
    num = eval(document.getElementById('display').value);
    document.myform.txt.value = num/100;
}