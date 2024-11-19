function calculateRombosArea(){
    const rombosbaseInput = document.getElementById('rombosbase');
    const rombosbaseText =  rombosbaseInput.value;
    const b = parseFloat(rombosbaseText);
    console.log(b);


    const rombosdaseInput = document.getElementById('rombosdase');
    const rombosdaseText = rombosdaseInput.value;
    const d = parseFloat(rombosdaseText);
    console.log(d);


    area = 0.5 * b * d ;
    console. log(area);




    
    const triangleCmSpan = document.getElementById('rombose-cm');
    triangleCmSpan.innerText = area;
 }