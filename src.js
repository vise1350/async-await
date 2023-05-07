console.log('person 1:show ticket');
console.log('person 2:show ticket');
const preMovie= async () => {
    const promiseWifeBringingTickets=new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('ticket');
        },3000)
    });

const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`))

const getButter = new Promise((resolve,reject) => resolve(`butter`))
const getColdrinks = new Promise((resolve,reject) => resolve(`colddrinks`))


let ticket=await promiseWifeBringingTickets

console.log("wife:I have tickets")
console.log('husband:we should go in')
console.log('wife:no i am hungry')

let popcorn =await getPopcorn;

console.log(`husband:I got some ${popcorn} `)
console.log('husband:we should go in')
console.log('wife:I need butter on my popcorn')

let butter = await getButter;

console.log(`husband:I got some ${butter} `)
console.log("husband: Anything else Draling ??")
console.log("Wife: YES. Bring me a colddrink")

let colddrinks = await getColdrinks;

console.log(`husband:Hey babe !I got some ${colddrinks} `)
console.log("husband: Anything else Draling ??")
console.log("Wife: No lets go . We are getitng late ")

return ticket;
}

preMovie().then((m) => console.log(`person 3 : shows ${m}`))





console.log('person 4:show ticket');
console.log('person 5:show ticket');