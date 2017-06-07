function bubbleSort(array) {
  var bubbleTo, present, temp;
  for (bubbleTo = array.length - 1; bubbleTo > 0; bubbleTo--) {
    for (present = 0; present < bubbleTo; present++) {
      if (array[present] > array[present+1]) {
        temp = array[present];
        array[present] = array[present+1];
        array[present+1] = temp;
      }
    }
  }
}
