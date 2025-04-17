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

## Explaining the process
- The point of creating this reference array is essentially to mimic the recursive process we would normally get from quicksort. The inner loop first finds a left and right 'pointer', the left is initally set to be the first instance of a zero in the refference array and the right is set as the index at the first instance of a 1 or the end of the list. For the first full iteration of the inner loop this gives you a left of 0 and a right equal to the length of the array-1. This mimics our first call of a recursive implementation. Then when partition is done running we return the pivot index value and change the value of the reference array at the index who matches the return value. This value is set to 1. This lets us know which part of the array is sorted. Then we can run the code again and again until the entire reference array is full of ones, then we know the original array is sorted and we return it.

For example Imagine our array was $array=[1,3,7,11,9,8]$

Then the reference array looks like $reffarr=[0,0,0,0,0,0]$

The first instance of a zero in the $reffarr$ is index zero so $left=0$ and because there are no ones we set right equal to the end of the list: $right=reffarray.length-1$. 

Now we call partition with these values: $Parition(left,right)$. Note we also pick the pivot to always be the last value in the list. This sorts the array so we now have $array=[1,3,7,8,9,11]$ and our return value would be i=3 because thats the pivot position. We then append a one to the refference array at the index cooresponding to the return i value. In this case that would be the third index and we end up with $[0,0,0,1,0,0]$. Now we run the program again on the sub sections of the list, specically on $[0,0,0,1]$ and $[1,0,0]$. Then we repeat this process until we are finished.


## Returning to the time complexity management:


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
