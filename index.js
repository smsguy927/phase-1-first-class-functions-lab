// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  return arr.slice(0,2)
}

function returnLastTwoDrivers(arr) {
  return arr.slice(arr.length - 2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(fare) {
    return fare * num
  }
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arr, func) {
  return func(arr);
}