const container = document.querySelector('.container');
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'add grid';
body.insertBefore(button, container);


function changeColor(div){
    div.style.backgroundColor = 'blue';
}

// ask the user for the number of squares.
function getNumberOfSquares(){
    let numberOfSquares = prompt("Enter the number of squares");
    if (numberOfSquares <=100){
        return parseInt(numberOfSquares);
    }else{
        alert("You can't go beyond that number");
    }
}

// delete grid
function removeGrid(){
    container.innerHTML = '';
}

// generate  a grid
function generateGrid(numberOfSquares){
    for (let i = 1; i <= numberOfSquares * numberOfSquares; i++){
        const div = document.createElement('div');
        let squareSize = 960 / numberOfSquares + 1;
        div.style.width = (squareSize - 1) + 'px';
        div.style.height = (squareSize - 1) + 'px'
        div.textContent = i;
        div.addEventListener('mouseover', () => {
            changeColor(div);
        });
        container.appendChild(div);
    }
}

// add Event listener to the button.
button.addEventListener('click', () => {
    let numberOfSquares = getNumberOfSquares();
    removeGrid();
    generateGrid(numberOfSquares);
});

generateGrid(16);