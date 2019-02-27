// create random matrix
// attr(rows, colums, probability_of_live_cell)
let random_matrix = createRandomMatrix(10,10,0.5);

// special type of matrix (Oscillators)
let  oscillators_matrix = [[false, false, true, false], [true, false, false, true], [true, false, false, true], [false, true, false, false]];

console.log('%c Oscillators matrix ', 'color: green');
// start program
// attr (number_of_generations, zero_matrix)
main(4, oscillators_matrix);

console.log('*********************');
console.log('%c Random matrix ', 'color: green');
main(5, random_matrix);




