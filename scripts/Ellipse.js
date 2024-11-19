function calculateEllipseArea(){
    const aInput = document.getElementById('ellipse-a');
    const atext = aInput.value;
    const a = parseFloat(atext);
    console.log(a);


    const bInput = document.getElementById('ellipse-b');
    const bText = bInput.value;
    const b = parseFloat(bText);
    console.log(b);


    const Area = 3.1416 * a * b;
    console. log(Area);



    
    const triangleCmSpan = document.getElementById('Else-cm');
    triangleCmSpan.innerText = Area;
}