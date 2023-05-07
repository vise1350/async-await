console.log('person 1:show ticket');
console.log('person 2:show ticket');

const promiseWifeBringingTickets=new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('ticket');
    },3000)
});

const getPopcorn=promiseWifeBringingTickets.then((t)=>{
    console.log("wife:I have tickets")
    console.log('husband:we should go in')
    console.log('wife:no i am hungry')
    return new Promise((resolve,reject) => resolve(`both go in with ${t} , popcorn`))

});

const getButter=getPopcorn.then((t) => {
    console.log("husband:I got some popcorn ")
    console.log('husband:we should go in')
    console.log('wife:I need butter on my popcorn')
    return new Promise((resolve,reject)=>resolve (`${t},butter`  ));

});
const getColdrinks=getButter.then((t) =>{
    console.log("wife: i want coldrinks")
    console.log("husband : goes to bring colddrinks ")
    return new Promise((resolve,reject)=>resolve (`${t} and coldrinks `  ));
});

getColdrinks.then((t) =>console.log(t));
console.log('person 4:show ticket');
console.log('person 5:show ticket');