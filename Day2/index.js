// const age = 22;

// console.log("current age is",age);

// age = 23;
// console.log("new age is",age);

// var a = 5
// var a = 6
// console.log(a);

//  console.log(a+b);
//  console.log(a-b);
//  console.log(a*b);
//  console.log(a/b);

// Task 1
// const  a = 10;
// const  b = 20;
//  sum =(a+b);
//  console.log(sum);

//  //task 2
//  const DiffOne = 20;
//  const DiffTwo = 10;
//  diff =(DiffOne-DiffTwo);
//  console.log(diff);

//  //task3
//  const productOne= 10;
//  const productTwo =20;
//  product =(productOne*productTwo);
//  console.log(product);

//  //task 4
//  const quotientOne =10;
//  const quotientTwo =20;
//  quotient =(quotientOne/quotientTwo);
//  console.log(quotient);

//if and else

// const num1 = 3;
// const num2 = 4;
// // if(num1>=num2){
// //     console.log(num1,"is greater")
// // }
// // else{
// //     console.log(num2,"is greater")
// // }

// console.log(num1>=num2? "is greater" : "is not greater");

// const student=[
//     {
//         FullName:"Sweta Niroula",
//         Age:11,
//     },
//     {
//         FullName:"Deepa Ghimire",
//         Age:12,
//     },
//     {
//         FullName:"Siwani Dahal",
//         Age:13,
//     },
//     {
//         FullName:"Ashim Chhetri",
//         Age:14,
//     },
// ]

// const newStudent={
//     FullName:"jdjf",
//     Age:22,
// }

//   student.push(newStudent)
// student.reverse(newStudent)
// // student.unshift(newStudent)
// console.log(student)



const list =[
      {
        Fullname:"Sweta Niroula",
        Address :"Dharan-18",
        Email:"swetaniroula1122@gmail.com",
      },
      {
        Fullname:"Deepa Ghimire",
        Address :"Dharan-18",
        Email:"deepaghimire50@gmail.com",
      },
      {
        Fullname:"Siwani Dahal",
        Address :"Dharan-13",
        Email:"swetaniroula1122@gmail.com",
      },
      {
        Fullname:"Dipsika",
        Address :"Dharan-2",
        Email:"dipsika123@gmail.com",
      },
      {
        Fullname:"Ashim Chhetri",
        Address :"Dharan-13",
        Email:"ashim123@gmail.com",
      },
    ]
    
const stu = list.filter(list=>list.Address!=="Dharan-18")
console.log(stu.filter(Boolean))




