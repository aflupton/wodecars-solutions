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
