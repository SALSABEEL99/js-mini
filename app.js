//Mini assignment

let myArr = [[2, 3, 4, 4, 4, 4], [5, 5], [5], [9, 8, 7]];

for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
}

//

//Input matrix aaray 
//Output in square values

let matrix1 = [
    [5, 2, 3],
    [7, 2, 3],
    [1, 0, 5],
];
let matrix2 = [
    [5, 2, 3],
    [7, 6, 3],
    [7, 9, 8],
];

// result = [
//   [10, 4, 6],
//   [14, 8, 6],
//   [8, 9, 13],
// ];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(matrix1[i][j] * matrix2[i][j]);
    }
}
//