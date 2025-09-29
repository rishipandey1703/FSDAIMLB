// console.log("hello world");
// var a=20;
// console.log(a);

// console.log(a);
// let a=20;
// let a=30;
// if(a>20){
//     let a=50;
//     console.log("a inside value ="+a);
// }
// else{
//     console.log("Inside else statement")
// }console.log("a outside value ="+a);

// const data=function (msg){
//     return"Hiiiiiiiiii "+ msg;
// }
// const msg1=data("Good Morning");
// console.log(msg1);


// const data=(msg)=>{ //arrow function ka syntax
//     // console.log("hiii.Hello "+msg);
//     return "hiii.Hello "+msg;
//     return "Heeeeee";
// }
// const data1=data("Good Morning");
// console.log(data1);

// const data=msg=>msg;
// const data1=data("hellooooo");
// console.log(data1);


//IIFE
// (()=>{
//     console.log("Hiii...hello");
// })();

// setTimeout(()=>{console.log("helloooo")},1000);
// setInterval(()=>{console.log("helloooo")},1000);

// function greetings(msg="Hiii"){
// console.log("Hello "+msg);
// }
// greetings("Welcome to ABES");


function selectLanguage(lang){
let data;
if(lang=='java'){
    function javaCompiler(){
        return "Hey, Java compiler calling...";
    }
    data=javaCompiler();
}else if(lang=='c'){
    function cCompiler(){
return "Hey,cCompiler calling";
    }
    data=cCompiler();
}else{
    data="No compiler available"
}
return data;
}

console.log(selectLanguage("java"));
console.log(selectLanguage("c"));
console.log(selectLanguage("python"));