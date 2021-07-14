
/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock,
 determine how many pairs of socks with matching colors there are.
input: n (number of socks), arr (array of sock colors)
Ex: n=7, ar =[1,2,1,2,1,3,2] --> 2
*/


function sockMerchant(arr ) {
    let sorted = arr.sort();
    let pairs = 0;

    for (let i = 0; i <sorted.length; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs+=1;
         }
         i +=1;//** Must skip the next element if matched */
    }
   return pairs;
}
console.log (sockMerchant([7,1,2,1,2,1,3,2])); //2