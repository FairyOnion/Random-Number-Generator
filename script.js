const generateBtn = document.getElementById('generate-btn');
const resultMsg = document.getElementById('results-container');
const decimalsCheckbox = document.getElementById('decimals-btn');

let areFloatsAllowed = false;
decimalsCheckbox.addEventListener('change', (event) => {
    if (event.target.checked){
        areFloatsAllowed = true;
    } else {
        areFloatsAllowed = false;
    }
})

function generateRandomNumber(min, max){
    if(min > max){
        [min, max] = [max, min]
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumberFloats(min, max){
    if(min > max){
        [min, max] = [max, min]
    }
    const rawRandom = Math.random() * (max - min) + min;
    return Math.round(rawRandom * 100) / 100;
}

generateBtn.addEventListener('click', () => {
    const minNum = Number(document.getElementById('min-num').value);
    const maxNum = Number(document.getElementById('max-num').value);
    resultMsg.textContent = areFloatsAllowed ? 
    generateRandomNumberFloats(minNum, maxNum) :
    generateRandomNumber(minNum, maxNum)
})