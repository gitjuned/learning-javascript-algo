function bouncer(arr) {
  let temp = [];
  arr.forEach((element) => {
    if (element) {
      temp.push(element);
    }
  });
  return temp;
}

console.log(bouncer([7, "ate", "", false, 9]));
