function Swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
}

function parititon(array,left,right) {
    var j = 0;
    var i = -1;
    var pivot = array[right]
    while (j < array.indexOf(pivot)) {
        if (array[j] < pivot) {
            i++
            Swap(array, j, i)
        }
        j += 1;
    }
    i++
    Swap(array, i, array.indexOf(pivot))
    return i
}


function quicksort(array, left, right) {
    if (array.length <= 1) {
        return array;
    }
    var pivot = parititon(array, left, right);
    if (left < right-1) {
        quicksort(array, 0, pivot - 1)
        quicksort(array, pivot + 1, right)
    }
    return array
}
