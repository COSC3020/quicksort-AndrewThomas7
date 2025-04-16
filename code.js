function Swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
}

function parititon(array, left, right) {
    var j = left;
    var i = -1;
    var pivot = array[right]
    while (j < array.indexOf(pivot)) {
        if (array[j] < pivot) {
            i++
            Swap(array, j, i)
        }
        j += 1;
    }
    // if (i != -1) {
        i++
        Swap(array, i, array.indexOf(pivot))
        return i
    // }
    // return 0
}

function Sorted(array) {
    sorted = false;
    if (array.length == 1) {
        return true
    }
    for (var x = 0; x < array.length - 1;) {
        if (array[x] <= array[x + 1]) {
            x++;
            sorted = true;
        }
        else {
            sorted = false;
            break;
        }
    }
    return sorted
}

function quicksort(array) {
    var left=0;
    var right=array.length-1
   function quicksort_(array, left, right){
        if (array.length <= 1) {
            return array;
        }
        var pivot = parititon(array, left,right);
        if (Sorted(array)!=true) {
            quicksort_(array, left, pivot - 1)
        }
        return array
    }
    return quicksort_(array,left,right)
}
