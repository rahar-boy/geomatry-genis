function calculateTringleArea(){
    const tringleBaseInput = document.getElementById('triangle-base');
    const trianglebaseText = tringleBaseInput.value;
    const base = parseFloat(trianglebaseText);
    console.log(base);


    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText =triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);


    const area = 0.5 * base * height;
    console.log(area);





    const triangleCmSpan = document.getElementById('triangle-cm');
    triangleCmSpan.innerText = area;
}