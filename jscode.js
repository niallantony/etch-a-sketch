const playArea = document.querySelector('.playarea');
const inputBox = document.querySelector('#input');

const button = document.querySelector('button');
let initial = 16;
let newValue = 0;



function drawRow(input) {
    for (i=0;i<input;i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        playArea.appendChild(row);
        for (j=0;j<input;j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            const dimension = 640/input;
            cell.setAttribute('style',`width:${dimension}px;height:${dimension}px;background-color:rgb(237,247,242);`)
            row.appendChild(cell);
        }
    }
}

function changeColor(e) {
    const currentCell = e.target
    const colour = currentCell.style.backgroundColor;
    let rgbValue = colour.replace(/[^0-9,]/g,'');
    console.log(rgbValue);
    const rgbValues = rgbValue.split(",");
    const newValues = rgbValues.map((a) => a-20);
    rgbValue = newValues.toString();
    console.log(rgbValue);
    currentCell.style.backgroundColor = `rgb(${rgbValue})`;
}
function updateInput() {
    let valueInput = document.querySelector('#input').value;
    const inputValue = valueInput > 100 ?  100 : valueInput;
    console.log(inputValue);
    playArea.textContent = '';
    drawEtcha(inputValue);
}

function drawEtcha(rows) {
    drawRow(rows);
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => addEventListener('mouseover', changeColor));
}

drawEtcha(initial);
button.addEventListener('click',updateInput);
