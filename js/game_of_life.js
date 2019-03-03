// create new init matrix, all cells are dead
let createNewMatrix = (r, c) => {
    let matrix = [];
    for (i=0; i<r; i++){
        col = Array(c).fill(false);
        matrix.push(col);
    }
    return matrix;
};

// return neigborhood area for cell
let neighborhoodArea = (i, maximum) => {
    if (i - 1 < 0) {
        from = 0;
    } else {
        from = i - 1;
    }
    if (i + 1 > maximum) {
        to = maximum;
    } else {
        to = i + 1;
    }
    return {from, to};
};

// transforms one matrix into another
let transformation = (oldMatrix) => {
    const countRow = oldMatrix.length;
    const countColumn = oldMatrix[0].length;
    let nextGenMatrix = createNewMatrix(countRow, countColumn);
    oldMatrix.forEach(function(row, i){
        row.forEach(function(el, j){
            let liveNeighbors = 0;
            row = neighborhoodArea(i, countRow - 1);
            col = neighborhoodArea(j, countColumn - 1);
            for (r = row.from; r <= row.to; r++) {
                for (c = col.from; c <= col.to; c++) {
                    if ((r != i || c != j) && oldMatrix[r][c]) {
                        liveNeighbors += 1;
                    }
                }
            }
            if (((liveNeighbors == 2 || liveNeighbors == 3) && oldMatrix[i][j] == true) || (liveNeighbors == 3 && oldMatrix[i][j] == false)) {
                nextGenMatrix[i][j] = true;
            }
        });
    });
    return nextGenMatrix;
};

let inputIsNumber = (...arg) => {
    return arg.every(function (value) {
        if (isNaN(value)) {
            return false;
        } else {
            return true;
        }
    });
};

// creates and writes matrices for all generations
let main = (numberOfGen, inputMatrix) => {
    if (inputIsNumber(numberOfGen) && (inputMatrix.length && inputMatrix[0].length)) {
        let matrix = inputMatrix;
        console.log('Generation: 0');
        console.log(matrix);
        console.log('------------------------------');
        for (generation = 1; generation <= numberOfGen; generation++) {
            matrix = transformation(matrix);
            console.log(`Generation: ${generation}`);
            console.log(matrix);
            console.log('------------------------------');
        }
    } else {
        console.log('%c Input value must be number and matrix.', 'color: red');
    }
};

// create new random matrix for zero generation (setRandomLiveCell-random_matrix.js)
let createRandomMatrix = (numRowMatrix = 10, numColMatrix = 10, precentLiveCellZeroGen = 0.5) => {
    if (inputIsNumber(numRowMatrix, numColMatrix, precentLiveCellZeroGen) && (precentLiveCellZeroGen <= 1 && precentLiveCellZeroGen >= 0)) {
        return setRandomLiveCell(createNewMatrix(numRowMatrix, numColMatrix), precentLiveCellZeroGen);
    } else {
        console.log('%c Input values must be number and last argument must be number from 0 to 1.', 'color: red');
    }
};






