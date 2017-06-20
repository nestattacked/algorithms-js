module.exports = function(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
