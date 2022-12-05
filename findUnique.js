// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// Solution:
function findUniq(arr) {
    const map = {}
    arr.forEach(n => map[n] ? map[n]++ : map[n] = 1)
    for(const n in map){
      if(map[n] == 1) return Number(n)
    }
}