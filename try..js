// High Order Function Part 1---Map()
 function addTwo(num1){
     return function(num2){
        return num1+num2;
     }
 }
 const addingTwo=addTwo(100)
 let Arry=[10,20,30,40,50]

 let result=Arry.map(addingTwo)
 console.log(result)