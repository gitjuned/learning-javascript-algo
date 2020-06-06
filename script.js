function repeatStringNumTimes(str, num) {
  let currentStr = str;

  if (num === 1) {
    return currentStr;
  } else if (num > 1) {
    for (let i = 1; i < num; i++) {
      currentStr += str;
    }
    return currentStr;
  }
  return "";
}

console.log(repeatStringNumTimes("abc", 2));
