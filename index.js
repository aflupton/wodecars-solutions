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

// count the number of people on a bus after a variable number of stops
var number = function(busStops) {
  let cache = 0;
  return busStops.map((busStops) => (cache - busStops[1] + busStops[0])).reduce((a, b) => (a+b));
}
// single line refactor
var number = busStops => busStops.map((busStops) => (cache - busStops[1] + busStops[0])).reduce((a, b) => (a + b));

// and a solution from codewars, which removes the need for .map, by wrapping that functionality into .reduce
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// highest scoring word (via alphabet position) from a string
function high(x) {
  function wordScore(word) {
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
    let score = 0;
    word.split('').map(function(letter) {
      score += alphabet.indexOf(letter) + 1;
    });
    return score;
  }
  let highestScoringWord = '';
  let highestScore = 0;
  x.split(' ').map(function(word) {
    let score = wordScore(word);
    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
  });
  return highestScoringWord;
}

// refactored highest scoring word function, using some fancy es6 syntax
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}