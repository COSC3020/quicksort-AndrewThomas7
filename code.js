function Swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
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
        var i=left-1;
        var pivot=array[right]
        for(var x=left;x<=right;x++){
            if(array[x]<=pivot){
                i++
                if(x>i){
                    Swap(array,i,x)
                }
            }
        }
        return i;
    }

    return quicksort_(0,array.length-1)
}
