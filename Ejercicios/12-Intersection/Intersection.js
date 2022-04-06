function intersection(arr1, arr2) {
  // Your code here:
  var joinedArr = [...arr1, ...arr2];
  var copys = [];
  for (var i = 1; i < joinedArr.length; i++) {
    if (joinedArr.slice(i).some((e) => e === joinedArr[i - 1])) {
      copys.push(joinedArr[i - 1]);
    }
  }
  return Array.from(new Set(copys));
}

module.exports = intersection;
