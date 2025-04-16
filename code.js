function Swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
}

function partition(array,left,right){
    var j=left;
    var i=left-1;
    var pivot=array[right]
    while(j<array.indexOf(pivot)){
        if(array[j]<pivot){
            i++
            Swap(array,j,i)
        }
        j++;
    }
    i++
    Swap(array,i,array.indexOf(pivot))
    return i
}

function quicksort(array) {
    function quicksort_(left,right){
    if(array.length<=1){
        return array
    }
    if(left< right){
        var pivot=partition(left,right)
        quicksort_(0,pivot-1)
        quicksort_(pivot+1,right)
    }

    return array
    }

    function partition(left,right){
        var j=left;
        var i=left-1;
        var pivot=array[right]
        while(j<array.indexOf(pivot)){
            if(array[j]<pivot){
                i++
                Swap(array,j,i)
            }
            j++;
        }
        i++
        Swap(array,i,array.indexOf(pivot))
        return i
    }
    return quicksort_(0,array.length-1)
}
