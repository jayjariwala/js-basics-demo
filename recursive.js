function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    console.log("Yes!!!");
    return 0;
  } else {
   return sum(arr , n - 1) + arr[ n - 1];
  }
  // Only change code above this line
}


const ans = sum([2, 3, 4, 5], 3);
console.log(ans);


// arr [2,3,4,5] n = 3 -> funCL + 4 ;
                           // -> [2,3,4,5] n = 2 -> FnCl + 3 + 4
                                                     // => 0 + 2 + 3 + 4