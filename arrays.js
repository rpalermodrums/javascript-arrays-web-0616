var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, el){
  var newArr = arr
  newArr.unshift(el)
  return newArr
}

function descructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el)
  return arr
}

function addElementToEndOfArray(arr, el){
  var newArr = arr
  newArr.push(el)
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, el){
  arr.push(el)
  return arr
}

function accessElementInArray(arr, el){
  return arr[el]
}

function removeElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromEndOfArray(arr){
  arr.pop()
  return arr
}
