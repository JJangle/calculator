var inputLabel = document.getElementById('display');


function pushBtn(obj) {
    var pushed = obj.innerHTML
    var decPush = 0;
    var oper = 0;

    var ops = ["+", "-", "*", "/"]
    var last = inputLabel.innerHTML.length - 1;
    var bLastC = inputLabel.innerHTML.length - 2;
    if(ops.includes(last) && ops.includes(bLastC) && ops.includes(pushed)){
        inputLabel.innerHTML.slice(0, bLastC);
        inputLabel.innerHTML += pushed;
    }
    
//deal with multiple operators
    if(pushed == '*' || pushed == '-' || pushed == '+' || pushed == '/'){
        oper++
    }
    if(oper === 1){
        document.getElementById('multiply').disabled = true;
        document.getElementById('divide').disabled = true;
        document.getElementById('add').disabled = true;
    }
    if(pushed == '*' || pushed == '+' || pushed == '/'){
        document.getElementById('decimal').disabled = false;
    }
    if(pushed == '1' || pushed == '2' || pushed == '3' || pushed == '4' || pushed == '5' || pushed == '6' || pushed == '7' || pushed == '8' || pushed == '9'  || pushed == '0'){
        opOn()
    }
    if(pushed == '-'){
        opOn()
    }
 
// deal with mult decimals   
    if(pushed == '.'){
        decPush++
    }
    if(decPush === 1){
        document.getElementById('decimal').disabled = true;
    }
    if(pushed == '*' || pushed == '-' || pushed == '+' || pushed == '/'){
        document.getElementById('decimal').disabled = false;
    }
    var last = inputLabel.innerHTML.charAt(inputLabel.innerHTML.length - 1);
    var secLast = inputLabel.innerHTML.charAt(inputLabel.innerHTML.length - 2);
    if(last == '*'|| last == '-' || last == '+' || last == '/' && secLast == '-'){
        inputLabel.innerHTML.replace(/\-/g, '')
    }
    
//    CALCULATOR
    if (pushed == '='){
        opOn()
        inputLabel.innerHTML = eval(checkE(inputLabel.innerHTML))
    } else if (pushed == 'AC') {
        opOn()
        inputLabel.innerHTML = '0';
        document.getElementById('decimal').disabled = false;
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;
        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}



//turning operators back on
function opOn(){
    document.getElementById('multiply').disabled = false;
    document.getElementById('divide').disabled = false;
    document.getElementById('add').disabled = false;
}

function checkE(e){
  switch(true){
      case /[*+/]\-[*+/]/g.test(e):
        let r = (e.match(/[*+/]\-[*+/]/g)).toString();
        let lC = r.charAt(r.length - 1);
        let rep = e.replace(r, lC);
        return rep;
        break;
      case /\-{3,}/g.test(e):
        let replac = (e.match(/\-{3,}/g)).toString();
        let lastC = replac.charAt(replac.length - 1);
        let repw = e.replace(replac, lastC);
        return repw;
        break;
      case /\-[*+/]/g.test(e):
        let ac = (e.match(/\-[*+/]/g)).toString();
        let pC = ac.charAt(ac.length - 1);
        let repo = e.replace(ac, pC);
        return repo;
        break;
      default:
        return e;
  }
}

    


