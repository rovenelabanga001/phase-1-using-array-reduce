const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//Create a new variable called totalBatteries, 
//which holds the sum of all of the battery amounts in the batteryBatches array. 

const totalBatteries = batteryBatches.reduce(function(accum, item){
    return accum + item;
}, 0);