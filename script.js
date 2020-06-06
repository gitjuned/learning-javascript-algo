function findLongestWordLength(str) {
  let array = str.split(" ");

  let longest = 0;
  array.forEach((element) => {
    if (element.length > longest) {
      longest = element.length;
    }
  });
  return longest;
}

console.log(findLongestWordLength("one two three four"));
