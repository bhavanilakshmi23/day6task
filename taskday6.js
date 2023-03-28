var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "numsArr";
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}
console.log(new_string);

const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i <= arr.length; i++);{
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

var arr1= [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr1.length; i++) {
 if (arr1[i] % 2 === 0) {
 console.log(arr1[i]);
 }}
})();

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c)  {
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);


