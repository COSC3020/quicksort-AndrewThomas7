function Swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
}

function quicksort(array){
    var refereneArr=new Array(array.length).fill(0)
        for(var m=0;m<refereneArr.length;m++){
            var left=-5;
            var right=-5;
            for(var k=0;k<refereneArr.length;k++){
               if(refereneArr[k]==0&& left==-5){
                    left=k;
               }
               if(k==refereneArr.length-1&& refereneArr[k]!=1){
                    right=k;
                    break;
               }
               else if(refereneArr[k]==1&&left!=-5){
                    right=k-1;
                    break;
               }
            }
            var pivot= partition(left,right)
            refereneArr[pivot]=1;
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
        return array
    }
