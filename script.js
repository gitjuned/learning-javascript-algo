function confirmEnding(str, target) {
  let stringLength = str.length;
  let targetLength = target.length;
  let start = stringLength - targetLength;

  let subString = str.substring(start);

  if (subString === target) {
    return true;
  }

  return false;
}

console.log(confirmEnding("Bastian", "an"));
console.log(confirmEnding("Bastian", "and"));
