console.log('My first code');
//variables
a=5; //without declaration
var a=5;
console.log(a);
let b=56;
{
    var a=32;
    console.log(a);  
    let b=90;
    console.log(b);                               //Block 2
}
console.log(typeof(b));
var firstName='Nila';
console.log(typeof(firstName));
let bool=true;
console.log(typeof(bool));
var g;
console.log(typeof(g));
var g='';
console.log(typeof(g));
//ARRAYS
var arr1=['Pines','Acacia','Bamboo',10];
console.log(arr1);
console.log(arr1[1]);
console.log(arr1.length);
arr1.push('Teak');
console.log(arr1);
arr1.pop();
console.log(arr1);
//Objects

let person={
    fname:'Nila',
    age:21,
    loc:'TVM'
}
console.log(person);
console.log(person.age);

//Functions
function display(fname) {
    console.log('Welcome '+fname+' to functions');
}
display('Nila');    //Function call
//Function to add 2 no.s
function add(a,b) {
    var sum=a+b;
    //console.log(sum);
    return sum;
}
var result=add(10,20);
console.log('The sum is '+result);
//Function to multiply
function multiply(a,b) {
    var pdt=a*b;
    return pdt;
}
var res=multiply(2,3);
console.log('The pdt is'+res);

var ab=7;
var abc=ab++;//post increment
console.log(ab);
console.log(abc);

var abc=++ab;//pre increment
console.log(ab);
console.log(abc);
var exp=(4*7)-8**2+9; //28-64+9
console.log(exp)

var tt=56;
var tm='56';
//conditional statements
if (tt>tm && tt==tm) {
    console.log('Value is greater or equal');
} 
else {
    console.log('Value is less');
}
var result1=exp>-30?'value is greater than zero':'value is less than zero';
console.log(result1);

//looping statements
//print no.s 1-10

for (let i = 1; i <=10; i++) {
    console.log(i);
    
}
var array=[1,45,34,56,78]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
var obj={fname:'Heera',age:34,place:'tvm'}
//for in loop
for (const i in obj) {
   console.log(obj[i]);
    }
//for of loop
for (const i of array) {
    console.log(i)
}
//while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}
 let r=1;
 do {
    console.log(r)
    r++;
 } while (r<=10);