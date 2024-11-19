function calcilateRectingularAtea(){
    const rectingleWidthInput = document.getElementById('rectangle-width');
    const rectingleWidthText = rectingleWidthInput.value;
    const width = parseFloat( rectingleWidthText);

    console.log(width);


    const rectanglelenghtInput = document.getElementById('rectringular-leanght');
    const rectangleLeanghtText = rectanglelenghtInput.value;
    const lenght = parseFloat(rectangleLeanghtText);
    console.log(lenght);


    const Area = width * lenght;
    console. log(Area);



    const triangleCmSpan = document.getElementById('rectangle-cm');
    triangleCmSpan.innerText = Area;
}