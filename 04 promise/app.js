
// async function myLogic(){
//     await new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//         console.log('Hello From Function');
//         resolve()
//         }, 1000)
//     })
// }

// console.log('One');
// await myLogic();
// console.log('Two');




async function myLogic(){

    await new Promise((resolve) =>{
        setTimeout(() => {
        console.log("Three");
        resolve()
    }, 1000)
    })
}

console.log("One");
await myLogic()
console.log("Two");

