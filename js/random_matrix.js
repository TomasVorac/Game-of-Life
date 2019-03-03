// return matrix with random live cell
// input argumernt procetLive must be from 0 to 1 - probability that a cell will live
let setRandomLiveCell = (matrix, precentLive) => {
    const countRow = matrix.length;
    const countColumn = matrix[0].length;
    for (i = 0; i < countRow; i++) {
        for (j = 0; j < countColumn; j++) {
            if (Math.random() > precentLive) {
                matrix[i][j] = true
            }
        }
    }
    return matrix
}
