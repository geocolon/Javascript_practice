PROGRAM /* Count of Most Frequent */
/* Takes only arrays with integers.
/* loop this array and find the count for eat number.
/* store this value of each number's count frequency.
/* return the count freqnuency for that integers that has the highest frequency */
END PROGRAM

var array = [3,-1,-1];

function mostFrequent(arr){
  var storage = [];
  for (i = 0; i < arr.length; i++){
    for (j = 0; j < storage.length; j++){
      if (arr[i] === storage[j]){

      }
    }
  }
}

mostFrequent(array);

// Working on new idea below
var array = [3,-1,-1];

function mostFrequent(arr){
  var storage = {};
  for (i = 0; i < arr.length; i++){
    // console.log(storage[arr[i]] = 1);
    for (var key in storage){
       if (key === arr[i]){
         storage = storage[key] + 1;
       }
     }
    }
     console.log(storage);
}
mostFrequent(array);
