// const A =
// [
//    [ 1, 2, 3 ],
//    [ 4, 5, 6 ],
//    [ 7, 8, 9 ]
// ]

// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

//Output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
//1, 2, 3, 7, 11,10, 9, 5, 6

let m = A.length; // row
let n = A.length && A[0].length; // col
let row_poiter_max = m - 1;
let col_poiter_max = n - 1;
let row_poiter_min = 0;
let col_poiter_min = 0;
let cur_col_poiter = 0;
let cur_row_poiter = 0;

let traverse = ["right", "down", "left", "up"];
let traverse_index = 0;
let output = [];

let condition = false;

if (m * n === 0){
   console.log("Blank array");
   return;
}

for (let k = 0; k < m * n + 6; k++) {
  if (traverse_index == traverse.length) {
    traverse_index = 0;
  }

  let _traverse = traverse[traverse_index];

  if (_traverse === "right") {
    !condition && (cur_col_poiter = col_poiter_min);
    cur_row_poiter = row_poiter_min;

    condition = col_poiter_max >= cur_col_poiter ? true : false;

    console.log({
      k,
      traverse_index,
      _traverse,
      condition,
      row_poiter_min,
      col_poiter_min,
      cur_row_poiter,
      cur_col_poiter,
    });

    if (condition) {
      output.push(A[cur_row_poiter][cur_col_poiter]);
      console.log(A[cur_row_poiter][cur_col_poiter]);
      cur_col_poiter++;
    } else {
      row_poiter_min++;
      traverse_index++;
    }
  }
  if (_traverse == "down") {
    cur_col_poiter = col_poiter_max;
    !condition ? (cur_row_poiter = row_poiter_min) : "";
    condition = row_poiter_max >= cur_row_poiter ? true : false;
    console.log({
      k,
      traverse_index,
      _traverse,
      condition,
      row_poiter_min,
      col_poiter_min,
      cur_row_poiter,
      cur_col_poiter,
    });

    if (condition) {
      console.log(A[cur_row_poiter][cur_col_poiter]);
      output.push(A[cur_row_poiter][cur_col_poiter]);
      cur_row_poiter++;
    } else {
      col_poiter_max--;
      traverse_index++;
    }
  }
  if (_traverse == "left") {
    !condition ? (cur_col_poiter = col_poiter_max) : "";
    cur_row_poiter = row_poiter_max;
    condition = cur_col_poiter >= col_poiter_min ? true : false;
    console.log({
      k,
      traverse_index,
      _traverse,
      condition,
      row_poiter_min,
      col_poiter_min,
      cur_row_poiter,
      cur_col_poiter,
    });

    if (condition) {
      output.push(A[cur_row_poiter][cur_col_poiter]);
      console.log(A[cur_row_poiter][cur_col_poiter]);
      cur_col_poiter--;
    } else {
      row_poiter_max--;
      traverse_index++;
    }
  }

  if (_traverse == "up") {
    !condition ? (cur_row_poiter = row_poiter_max) : "";
    cur_col_poiter = col_poiter_min;
    condition = cur_row_poiter >= row_poiter_min ? true : false;
    console.log({
      k,
      traverse_index,
      _traverse,
      condition,
      row_poiter_min,
      col_poiter_min,
      cur_row_poiter,
      cur_col_poiter,
    });

    if (condition) {
      output.push(A[cur_row_poiter][cur_col_poiter]);
      console.log(A[cur_row_poiter][cur_col_poiter]);
      cur_row_poiter--;
    } else {
      col_poiter_min++;
      traverse_index++;
    }
  }
}
console.log(output);
