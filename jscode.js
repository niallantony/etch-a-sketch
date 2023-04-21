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
            cell.setAttribute('style',`width:${dimension}px;height:${dimension}px`)
            row.appendChild(cell);
        }
    }
}

function changeColor(e) {
    const currentCell = e.target
    currentCell.classList.add('hover');
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
button.addEventListener('click',updateInput)
