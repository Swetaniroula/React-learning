//node file ko name
//node --watch ./file ko name lekhana 

// let a = 3;

// console.log(a%2==0?"is even":"is odd");

//  let arr = [1,2,3,4,5];

//  const doubleNum = arr.map((arr=> arr*arr));

//  console.log(doubleNum);

//  const filterNum = doubleNum.filter(n => n<=10);
//  console.log(filterNum);

// function sayHello(){
//     return "Hello world"
// }
// console.log(sayHello());

// function add(a,b){
//     return a+b;
// }
// console.log(add(20,5));

// function user(name="sweta"){
//     return `hello ${name}`;
// }
// console.log(user());


//arrow Function
// const addd = ({num1,num2}) => num1/num2;  //destructuring
//  console.log(addd({num1:25 ,num2:1}));

// const add = (a,b)=> a/b;
// console.log(add(20,1));

// const User = (name="guest") => `Hello ${name}`
// console.log(User());

// let i =3;
//  while(i <=5){
//     console.log(i);
//     i++;
//  }

// let j=3;
// do{
//     console.log(j);
//     j++;
// } while(j <=5)

// let num =1;
// for(num=1;num<=10;num++){
//     console.log(num);
// }

// console.log("....")

// let num2 = 10;
//  while(num2>=1){
//     console.log(num2);
//     num2--;
// }

// console.log("....")

// let a = 1;
// do{
//     console.log(a);
//     a++;
// }while(a<=5);

//  console.log("....")

// let Colors=["Red","Blue","Green"];
// Colors.forEach((n) => {
//     console.log(n);
// });


// console.log("....")

// function sum({b,a}){ //destructuring method of adding a number
//     return a-b
// }
// console.log (sum({a:3,b:4}));


//task for day3
//1
function sum(a,b){
    return a +b ;
}
console.log("Sum of Two Number is :",sum(4,3));

console.log("--------------------------------------")

//2
const multiply = (a,b)=> a*b;
console.log("Product of Two Number is :",multiply(2,5));

console.log("--------------------------------------")

//3

const user = (name ="Guest") =>{
    return `Welcome ${name}`;
}
console.log(user());


//4

console.log("For--------------------------------------")

//for

for(i=1;i<=5;i++){
    console.log(i)
}

console.log("While--------------------------------------")
//while

 let j=1;
 while(j<=5){
     console.log(j);
        j++;
}


console.log("DO while--------------------------------------")

//do while
let k = 1;
do{
    console.log(k);
    k++;
}while(k<=5);

console.log(" For each--------------------------------------")

//foreach

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log(num);
});

//5
console.log("Spread Operator--------------------------------------")

const Number1 = [1,2,3,4,5];
// console.log(Number1);

const Number2 = [...Number1,6,7,8];
console.log(Number2);

//6
console.log("Array Operation--------------------------------------")

const C =[1,2,3,4,5];
C.push(9);
console.log("Array After Push:",C);
C.unshift(0);
console.log("Array After Unshift:",C);
 C.shift();
console.log("Array After Shift:",C);