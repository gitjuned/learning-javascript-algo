function largestOfFour(arr) {
  let largest = 0;
  let array;
  arr.forEach((element) => {
    element.forEach((item) => {
      if (item > largest) largest = item;
    });
  });

  arr.forEach((element) => {
    if (element.includes(largest)) {
      array = element;
    }
  });
  return array;
}

console.log(
  largestOfFour([
    [4, 5, 100, 3],
    [13, 27, 18, 26],
    [32, 35, 3752, 39],
    [1000, 2001, 857, 1],
  ])
);
