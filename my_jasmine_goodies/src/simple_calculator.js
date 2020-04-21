/*function add(string_number){
    let numbers = string_number.split(",")
    let sum = 0
    for(var i = 0; i < numbers.length; i++){
        sum += parseInt(numbers[i])
    }
    return sum
}

function multiply(string_of_numbers){
    let nums = string_of_numbers.split(",")
    let sum = 1
    for(var i = 0; i < nums.length; i++){
        sum *= parseInt(nums[i])
    }
    return sum
}*/

function add(...args){
    return args.reduce((previousValue, currentValue) => previousValue + currentValue)
}

function multiply(...args){
    return args.reduce((previousValue, currentValue) => previousValue * currentValue)
}
module.exports = {add,multiply}