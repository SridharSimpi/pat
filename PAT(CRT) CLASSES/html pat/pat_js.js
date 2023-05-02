// var arr=[1,2,3,4,5,6,7,8,9,10]
// for (var i=0;i<arr.length;i++){
    
//     if (arr[i]%2 == 0) {
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//         arr[0]+=1
//     }
// }

//method 2

var arr=[1,2,3,4,5,6,,7,8,9,10]
var ans =arr.filter(function(value){
    return value%2==0
})
console.log(ans);