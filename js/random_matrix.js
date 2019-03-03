// return matrix with random live cell
// input argumernt procetLive must be from 0 to 1 - probability that a cell will live
let setRandomLiveCell = (matrix, precentLive) => {
    matrix.forEach(function (row, i, matrix) {
        row.forEach(function (el, j) {
            if (Math.random() < precentLive) {
                matrix[i][j] = true;
            }
        })
    });
    return matrix;
}
