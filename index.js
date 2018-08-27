// Codewars Solutions

// Given an array of strings, find the longest two and concatenate them together.

const longestConsec = (strarr, k) => {
  const arrLen = strarr.length
  if (arrLen === 0 || k > arrLen || k <= 0) {
    return ""
  }
  const consecStrings = getConsecStrs(strarr, k, arrLen)
  return getFirstLongestString(consecStrings)
}

const getConsecStrings = (strArr, numStr, arrLen) => {
  const numConsecStr = arrLen - numStr
  const result = []
  let consecStr
  for (let i = 0; i <= numConsecStr; i++) {
    consecStr = ""
    for (let s = i; s < i + numStr; s++) {
      consecStr += strArr[s]
    }
    result.push(consecStr)
  }
  return result
}

const getFirstLongestString = strArr => {
  let firstlongestString = ""
  let longestLength = 0
  for (let str of strArr) {
    strLen = str.length
    if (strLen > longestLength) {
      firstlongestString = str
      longestLength = strLen
    }
  }
  return firstlongestString
}

//returns sum of series of fractions
function SeriesSum(n, s = 0) {
  return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}

// given odd length array of ints, return the 'stray' or unlike int from the array
function stray(numbers) {
  return numbers.reduce((a, b) => {
    return (a ^ b);
  });
}


// return a filtered array that deletes elements occurring more than n times
function deleteNth(arr,n){
  const occurrences = {};
  return arr.filter((num) => {
    occurrences[num] = (occurrences[num] || 0) + 1;
    return (occurrences[num] <= n);
  })
}
// this is a refactored version of the above
function deleteNth(arr, n){
  const occurrences = {};
  return arr.filter((num) => (occurrences[num]) = ~~(occurrences[num] || 0) + 1);
}