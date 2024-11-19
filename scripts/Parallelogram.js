function calculateParallelogramArea(){
    // Get base input
    const baseInput = document.getElementById('calculateParallelogramBase');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    // Get height input
    const heightInput = document.getElementById('calculateParallelogramHeight');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // Calculate area
    const area = base * height;
    console.log(area);




    
    const triangleCmSpan = document.getElementById('parallelogram-cm');
    triangleCmSpan.innerText = area;
}
