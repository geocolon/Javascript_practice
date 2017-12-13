PROGRAM /* Count of Most Frequent */
/* Takes only arrays with integers.
/* loop this array and find the count for eat number.
/* store this value of each number's count frequency.
/* return the count freqnuency for that integers that has the highest frequency */
END PROGRAM

// var array = [3,-1,-1];
//
// function mostFrequent(arr){
//   var storage = [];
//   for (i = 0; i < arr.length; i++){
//     for (j = 0; j < storage.length; j++){
//       if (arr[i] === storage[j]){
//
//       }
//     }
//   }
// }
//
// mostFrequent(array);

// Working on new idea below
var array = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];

function mostFrequent(arr){
  var storage = {};
  for (i = 0; i < arr.length; i++){
    if (storage[array[i]] === undefined){
      storage[array[i]] = 1;
    } else {
    storage[array[i]] = storage[array[i]] + 1;
  }
  }
  var arr = Object.keys( storage ).map(function ( key ) { return storage[key]; });
  // var min = Math.min.apply( null, arr );
  var max = Math.max.apply( null, arr );
  return max;
}

mostFrequent(array);
