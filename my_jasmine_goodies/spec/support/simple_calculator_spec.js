const {add,multiply} = require("/home/syanda/Desktop/my_jasmine_goodies/src/simple_calculator")

describe(add, function(){
    it("should add two numbers",function(){
        expect(add(1,2)).toEqual(3)
    })
    it("should add more than two numbers",function(){
        expect(add(1,2,3,5)).toEqual(11)
    })
})

describe(multiply,function(){
    it("should multiply two numbers",function(){
        expect(multiply(2,3)).toEqual(6)
    })
    it("should multiply more than two numbers",function(){
        expect(multiply(2,3,2)).toEqual(12)
    })
})