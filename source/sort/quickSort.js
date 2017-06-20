var swap = require('../util/swap.js');

module.exports = function quickSort(array, start, end) {
  if(start < end) {
    var middle = partion(array, start, end);
    quickSort(array, start, middle-1);
    quickSort(array, middle+1, end);
  }
}

function partion(array, start, end) {
  var comparison = array[end];
  var smallGroupLast = start - 1;
  for(var present=start,temp; present<end; present++) {
    if(array[present] <= comparison) {
      smallGroupLast++;
      swap(array, smallGroupLast, present);
    }
  }
  swap(array, smallGroupLast+1, end);
  return smallGroupLast+1;
}
