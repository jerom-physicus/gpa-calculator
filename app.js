function run(){
    const sint = parseInt( document.getElementById('sinput').value);
    const num1 = parseInt( document.getElementById('input1').value);
    const num2 = parseInt( document.getElementById('input2').value);
    const num3 = parseInt( document.getElementById('input3').value);
    const num4 = parseInt( document.getElementById('input4').value);
    const num5 = parseInt( document.getElementById('input5').value);
    const num6 = parseInt( document.getElementById('input6').value);
    const num7 = parseInt( document.getElementById('input7').value);
    sum1 = num1 + num2 + num3 +num4 +num5 + num6 +num7;
    sum2 = sum1 / sint;
    sum = sum2 /10;
    
    out.innerHTML = sum;
    console.log(sum);
   
}

