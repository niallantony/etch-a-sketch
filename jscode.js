const playArea = document.querySelector('.playarea');

let input = 16;



function drawRow(input) {
    for (i=0;i<input;i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        playArea.appendChild(row);
        for (j=0;j<input;j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
        console.log(i);
}

function changeColor() {

}

drawRow(input);
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => addEventListener('mouseover', (e) => {
    const currentCell = e.target
    currentCell.classList.add('hover');
}));
