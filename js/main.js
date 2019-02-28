// create random matrix
// attr(rows, colums, probability_of_live_cell)
const randomMatrix = createRandomMatrix(10,10,0.5);

// special type of matrix (Oscillators)
const  oscillatorsMatrix = [[false, false, true, false], [true, false, false, true], [true, false, false, true], [false, true, false, false]];

console.log('%c Oscillators matrix ', 'color: green');
// start program
// attr (number_of_generations, zero_matrix)
main(4, oscillatorsMatrix);

console.log('*********************');
console.log('%c Random matrix ', 'color: green');
main(5, randomMatrix);




