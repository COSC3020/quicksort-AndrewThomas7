# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas


Sources

#1-https://www.youtube.com/watch?v=WprjBK0p6rw- This is a video on a quicksort partiiton algorithm. I used this method for my parititon function but did not take any code as the video only shows the process in animation form.

#2-https://www.youtube.com/watch?v=Vtckgz38QHs&t=675s_ Learned about quicksort algorithm here and used this methods to build the recurrsive version of the algorithm to practice. 

#3- Got help from my roomate with some ideas for how to write the algorithm iterativly, specically he suggested using the zero array to check if my list was sorted, which I implemented in my final code. No code was given to me we only walked through psudo code and represenations on white boards.


## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

# Answer

My Implementation for Iterative Quick-Sort starts off by creating a zero array the size of the array we are sorting. This has a complexity of $O(n)$ The array is created a referene array so we can figure out what parts of the array have already been sorted as we loop. 

Next there are two for-loops running the length of the array. The inner loop sets the left and right variables for the partition function, and since this runs the length of the array there  also has a compelxity of $O(n)$. Note we can drop the operations perfomed by the if statements also inside the inner because they are neglagible when it comes to overall time complexity. The outer loop then takes these set variables and runs the partition function which sorts the array and surpingly also has a time complexity of $O(n)$, we then append the return of the pivot to the refrence array so we know what part of the list is sorted, which also runs n times.

All together we then have $$n+(n\cdot (2n))+n=2n+2n^2=n^2\implies \in \theta(n^2)$$


```Javascript
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
```
