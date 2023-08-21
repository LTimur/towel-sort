module.exports = function towelSort (matrix) {
  let result = []
  for (let i in matrix){
    if(i%2===0){
      matrix[i].forEach(element => {
        result.push(element)
      });
    } else {
      matrix[i].reverse().forEach(element => {
        result.push(element)
      });
    }
  }
  return result;
}
