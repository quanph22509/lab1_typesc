// // Generics
// function showStringData(a: string): string {
//     return a
// }

// function showNumberData(a: number): number {
//     return a
// }

// function showData<T>(a: T): T {
//     return a
// }

// showData<string>("string")

// const arrNum = [1,2,3,5,8,13] //Fibonacci
// const arrStr = ["Quang","Quy","Hau","Duc"] //Fibonacci

// // function we17304_map(arr: number[], callback: (item: number) => number): number[] {
// //     let temp = []
// //     for(let i = 0; i < arr.length; i++) {
// //         const newItem = callback(arr[i])
// //         temp.push(newItem)
// //     }
// //     return temp
// // }

// function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }

// const result = we17304_map(arrStr, (item) => {
//     return item + " - we17304"
// })

// console.log(result);

const arrNumber =[1,4,11,8,10]

 function seclectionsort<u>(arr: u[],callback:(a:u,b:u) => boolean ){
     
    for(let i=0 ;i<arr.length;i++){
        for(let j=0; j<arr.length-1;j++){
            if(callback(arr[i],arr[j])){
                let temp= arr[i]
                arr[i]=arr[j]
                arr[j]=temp
               
            }
        }
    } 
 }
 seclectionsort<number>(arrNumber,(a,b)=>{
    return a<b
 })
 console.log(arrNumber)
