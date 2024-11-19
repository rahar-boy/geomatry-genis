function calcutlatePantagoanArea(){
    const calculitePantagaon = document.getElementById('pantagoan-p');
    const calculatepantagaontext = calculitePantagaon.value;
    const p = parseFloat(calculatepantagaontext);
    console.log(p);



    const inputbase = document.getElementById('input-base');
    const basetext = inputbase.value;
    const b = parseFloat(basetext);
    console.log(b);

    area = 0.5 * p * b ;
    console.log(area);




    
    const triangleCmSpan = document.getElementById('pantgaon-cm');
    triangleCmSpan.innerText = area;
}