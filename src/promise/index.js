const promise = new Promise(function(resolve,reject){
    resolve("hey");
})

//jugando con las promesas

const cows = 15;

const countCows = new Promise(function(resolve,reject){
    if(cows>10){
        resolve("tenemos el minimo de vacas necesario");
    }else{
        reject("no contamos con esas vacas");
    }
});

countCows.then((result) =>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("finally"))