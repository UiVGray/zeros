module.exports = function getZerosCount(number) {
  let fact = Math.floor(number / 5);
  let result = 0;
  
  while(fact !== 0) {
      result = result + fact;
      fact = Math.floor(fact / 5);
    }
  return result;
}