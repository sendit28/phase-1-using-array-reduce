const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// reduce is an iterator

// const callback = (acc, element) => {
//   return prevValue + price

// }

const callback = function(prev, element){
  return prev + element
}

const initialValue = 0;



const totalBatteries = batteryBatches.reduce(callback, initialValue); 


















// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = batteryBatches.reduce(function(total, batches) {
//     return batches + total
//     }
// )

// Code your solution here
// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10




