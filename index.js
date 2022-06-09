const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const initialValue = 0
const totalBatteries = batteryBatches.reduce(
    (firstValue, nextValue) => firstValue + nextValue, initialValue
);
console.log(totalBatteries);


  
// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = batteryBatches.reduce(function(total, batches){
//   return batches + total
//   }
// )