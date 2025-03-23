// async function hi(){
//     try{
//         const data =await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const res = await data.json();
//         // console.log(data);
//         console.log(res);
//     }catch(error){
//         console.log(error);
//     }
// }
// hi();


const hi = async ()=>{
    try{
        const data =await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const res = await data.json();
        // console.log(data);
        console.log(res);
    }catch(error){
        console.log(error);
    }
}
hi();