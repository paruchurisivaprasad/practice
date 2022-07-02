/*
let WifebBringsTicket=new Promise((resolve,reject)=>{


    setTimeout(()=>{
        resolve('ticket')
    },2000)

})

let popcorn=WifebBringsTicket.then((t)=>{
    console.log(' Wife, i have the tickets  ');
    console.log(` husband: we should go in `);
    console.log(`wife : no, i'm hungry. i want pop corn`);

    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    })
})

let butter=popcorn.then((t)=>{
    console.log(` husband:got pop corn ,  we should go in `);

    console.log(`wife : no, i want butter on popcorn`);


    return new Promise((resolve,reject)=>{
        resolve(`${t} butter  `)
    })

})

let cooldrinks=butter.then((t)=>{
    console.log(`husband brings butter`);

    console.log(` husband:  we should go in `);

    return new Promise((resolve,reject)=>{
        resolve(`${t} cooldrinks `)
    })

})

cooldrinks.then((t)=>{
    console.log("husband: brings cool drinks");

    console.log(`${t}`);
})



let Movie=async ()=>{

    let wifeticket=new Promise((resolve,reject)=>{
        setTimeout(() => {

            resolve(' ticket ')
            
        }, 2000);
    })

    let pops=new Promise((resolve,reject)=>{
        resolve('popcorn')
    })

    let butterprom=new Promise((resolve,reject)=>{

        resolve('butter')

    })

    let cooldrinks=new Promise((resolve,reject)=>{
        resolve(`cooldrinks`)


    })


    let ticket=await wifeticket;

        console.log(' Wife, i have the tickets  ');
    console.log(` husband: we should go in `);
    console.log(`wife : no, i'm hungry. i want pop corn`);

let Pops=await pops;

console.log(` husband:got pop corn ,  we should go in `);

    console.log(`wife : no, i want butter on popcorn`);
let Butter=await butterprom;


    console.log(`husband brings butter`);

    console.log(` husband:  we should go in `);

    console.log("wife: i want cooldrink");

let CoolDrinks=await cooldrinks;

console.log("husband brinks cool drink");
console.log('husband : we should go in');

let [popi,butteri,cool]=await Promise.all([pops,butterprom,cooldrinks])

console.log(`${popi} ${butteri} ${cool}`);

return ticket
}

Movie().then((t)=>{ console.log(t)}).catch((e)=> console.log(e))

*/



let posts=[]


let getPosts=()=>{

        let output=''

        posts.forEach((post)=>{

            output+=`<li>${post.title}  </li>`

        })

        document.body.innerHTML=output

}


let createpost=(post )=>{

    posts.push(post)


}


let displayPosts= async ()=>{
 await   createpost({title:"post 1 ",body:"this is post 1"})
  await  createpost({title:"post 2 ",body:"this is post 2"})
    

getPosts()
}

displayPosts()


let deletePosts= async ()=>{
     
    await     posts.pop()
        
getPosts()
}



deletePosts()



// why async is better than promises


// programming chaining is bit difficult to understand . using async we can do less coding.maintainable than promosises