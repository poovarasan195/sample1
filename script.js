

// var a = 10;
// const b = 10;

// if( a = 20){
//     console.log("the value is"+ a + " "+ b );
// }else{
//     console.log(" not correct ");
// }

// //whene ever use const single = is can not check the value only use === 
// // other wise use var and let use single  =  is check.

// var poi = 20;
// var poi2 = 30;

// if(poi == 20){
//     console.log("the a is an greater then of b" + poi);
// }else if( poi == 30){
//     console.log("the b is an greater the of b" + poi2)
// }else{
//     console.log(" the value is equal or not assained");
// }

// // the else if

// var name = 'lion';

// switch(name){
//     case 'tiger': console.log("the tiger");
//                  break;
//     case 'lion': console.log("the lion ");
//                  break;
//     case 'animal': console.log(" the animales are in forrest");
//                  break;
//      default: console.log(" the is not set");
//             break;                                   
// }

// // swetch case is ok 

// //jem statment are break, continue
// // iteratin statement or loop statment 

// var num = [1,3,2,4,5,2,7,8,10] ; 

// for (let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// //while

// var array = [2,3,4,5,6,7,1,2,3,4,52,6,7,0,8];

// for (let i=0; i<array.length;i++){
//     if(array[i] % 2 !==  0){
//         console.log(array[i]);
//     }
// }

//lep years 

//  var array = [2001,2002,2004,2010,2014,2016,2020,2024];

//  for (i=0; i<array.length;i++){
//     if(array[i]%4 === 0 && array[i]% 100 !== 0 || array[i] %400 === 0){
//         console.log(array[i]);
//     }
//  }

// var array = [2,3,4,5,6,7,8,9,0,2];

// for (let i=array.length -1;i>= 0;i--){
//     console.log((array[i]));
// }

//do while
// var name = "poovi";
// var pass = 0;

// do {
//  console.log(name[pass]);
//  pass++;
// } while (pass <= name.length-1)


// var array = [2,3,4,5,"poovi"];
// var array1 = [2,4,6,8,"sr"];

// var value = array.(array1);

// console.log(value);

// function a( num1,num2,num3){
//     var num4 = num1 +num2 *num3;
//     return num4;
// }

// let value = a(10,2,13);
// console.log(value);


// fectroial using recusion  example code is using 
// function name (num){
//     if(num == 10){
//         return 1;
//     }
//     console.log("poovi", num +1);
//     return num * name(num + 1);
// }

// let number = 5;
// var res = name(number);
// console.log(res);


// call back function 

// function a(valu){
//     console.log(valu);
// }

// var b =()=>{ return "podasunni" + 2};

// a(b());


// PROMISES  consumer part

// const api = "https://api.github.com/users/poovarasan195";

// fetch(api).then((res)=>{return res.json()}).then((data)=> console.log(data.id, data.login)).catch((erre)=>console.log(erre));
// is just use how to attach in call back promises .

// creat the promises


// const pro = new Promise((res,rej)=>{
   
//     var user = "sr";
//     if(user){
//         res(user);
//     }else{
//         rej(new Error("the value is not define"));
//     }

// });

// function values(name){
//      const promises = new Promise((a,b)=>{

//         var userid = [{usid:1, name:"poovi"},
//         {usid:2, name:"sr"},
//         {usid:3, name:"kr"}];

//        var stat = userid.find((res)=> res.name === name);

//        if(stat){
//         a(stat);
//        }else{
//         b("not null");
//        }
//      })

//      return promises;
// }
//  //consuming space 
// pro.then((result)=>{
//     values(result).then((value)=>{console.log(value)})
// }).catch((err)=>{console.log(err)})

// oops 

//class and object
// class poovi{
//     ent(a,b,c){
//         this.a =a;
//         this.b=b;
//         this.c=c;
//     }
//     output(){
//         this.d = this.c + this.b + this.a;
//         console.log(this.d);
//     }
// }


// value1 = new poovi();
// value1.ent(400,20,20);
// value1.output();
// class is an collection of object and collection of information
// object is an run time instance of an class or real entity of an class

// inharitance
// class vallet{
//     keys(money,coines,card){
//       this.m=money;
//       this.c=coines;
//       this.card = card;
//     }

//     display(){
//         console.log(`i have the money${this.m} and also coines  ${this.c}even card also ${this.card} in my vallet`);

//     }
// }

// class total extends vallet{
//    displa1(){
//     console.log(`i have the money${this.m} and also coines  ${this.c}even card also ${this.card} in my vallet the total items in is`+this.m+this.c+this.card);

//    }
// }

// class three extends vallet{
//     displa2(){
//         console.log(`in my vallet the total items in is`+this.m+this.c+this.card);
    
//        } 
// }

// var obj = new total();
//     obj.displa1();

// s1 = new three();
// s1.keys(10,20,30);
// s1.displa2();

 // the value inhert the parrent class to child class 
 // using constator using is auto create the object even we can not create the object only display write the out put will come true
//  constructor( ){
//     this.m=10;
//     this.c=30;
//     this.card = 40;
//   }
 
//polimorpesam

// class poolu{
//     fun(){
//       console.log(`the pol is usedd to modifey the parrent class function `);
//     }
// }

// class poolu1 extends poolu{
//    fun(){
//     console.log(`same entity with different functionolity `);
//    }
// }

// s1= new poolu1();
// s1.fun();

// same entity with diffrent funcnolityes, 
// exp the parrent class function any modify is used an child class its polimorpsam .


//data abstraction extract only relevent information  - definition of data abstraction
// class amp{
//     constructor(){
//         this.storage ={}
//     }
//     add(key,value){
//      return this.storage[key]=value;
//     }
//     remove(key){
//        delete this.storage[key];
//       }
//     res(key){
//         console.log(this.storage[key]);
//     }
// }

// s1 = new amp()
// s1.add("name", "poovi");
// s1.res("name");
// s1.remove("name");
// s1.res("name")

//extraction only relevent information it means many statment will hear the class 

//block scope
// {
//     var a = 10;
//     let b = 20;
//     const c =30;
//     console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);// is hthe block scope only access the separate block
// console.log(c);// const also block scope

// shadowing
// var a = 100;
// {
//     var a =10; this is the shadowinfg of a variable
//     console.log(a);
// }
// console.log(a);// same 10 output will be return because the 301line a varibale shadow od line no 297

// reduce

// const user = [
//     { firstname: "Mohammad", lastname: "Noushad", age: 22 },
//     { firstname: "Aniket", lastname: "Bhalla", age: 45 },
//     { firstname: "Bidhi", lastname: "Chand", age: 21 },
//     { firstname: "Saif", lastname: "Siddiqi", age: 67 },
//   ];

//   const output = user.reduce((acc,cur)=>{
//     if(cur.age > 30){
//     acc.push(cur.firstname);
//     }
//     return acc;
//   },[])  // push method only work for the array 

//   console.log(output);

  // its work reduce reduce is takes two parametter a accumalater and current 
  //the accumaleter is an enisail value the current its  takes an the array or obj value .

  // polifile for bind 

//   const user = [
//       { firstname: "Mohammad", lastname: "Noushad", age: 22 },
//         { firstname: "Aniket", lastname: "Bhalla", age: 45 },
//         { firstname: "Bidhi", lastname: "Chand", age: 21 },
//         { firstname: "Saif", lastname: "Siddiqi", age: 67 },
//       ];

//       let printname = function(){
//           console.log(this.firstname + " "+ this.lastname);
//       };

// Function.prototype.mybind = function (...arg){
//       let obj = this; // it represnt to the obj it mean it search the printname
//        let params = arg.slice(1);
//     return function(...erg1){
//       obj.apply(arg[0],[...params,...erg1]);
//     }
// }

// for(i=0;i<user.length;i++){
//      value = printname.mybind(user[i]);
//      value();
// }
// def: 
//  own implementation of bynd method to resolve browser fall back that it....

// DEBOUNCING

// var debounce = function(fn, time){

//     let timeoutID;
//     return function(...arg){
//         if(timeoutID){
//             clearTimeout (timeoutID)
//         }
       
//     timeoutID =  setTimeout(()=>{
//       fn(...arg);
//      },time);
//     }
// }

// document.getElementById('click').addEventListener('click',debounce(e=>{
//    console.log('hai their');
// },2000));

//polifill revision ok
// const user = [    
//         { firstname: "Mohammad", lastname: "Noushad", age: 22 },
//           { firstname: "Aniket", lastname: "Bhalla", age: 45 },
//           { firstname: "Bidhi", lastname: "Chand", age: 21 },
//           { firstname: "Saif", lastname: "Siddiqi", age: 67 },
//         ];
  
//         let printname = function(){
//             console.log(this.firstname + " "+ this.lastname);
//         };

// Function.prototype.mybind = function (...argum){
//     let object_catch = this;
//     let paramettrs_handel = argum.splice(1);
//   return function(...argum1){
//     object_catch.apply(argum[0],[...paramettrs_handel,...argum1]);
//   }
// }

// for(i=0;i<user.length;i++){
//   var value = printname.mybind(user[i]);
//   value();
// }
// debouncing revision ok 

// var debounce = function(fn,time){

//   let timer;
//   return function (...arg){
//     if(timer){
//       clearTimeout(timer);
//     }
//    timer = setTimeout(()=>{
//     fn(...arg);
//     },time);
//   }
// }

// document.getElementById('click').addEventListener('click', debounce(e=>{
//    console.log("correct way to work the debouncing");
// },2000))

//event bubbling and capturing 
// document.getElementById('grandparet').addEventListener('click',(e)=>{
//   console.log("grandparent will here");
// },false);//bubbling

// document.getElementById('parent').addEventListener('click',(e)=>{
//   console.log("parent will here");
// },true);// capturing

// document.getElementById('child').addEventListener('click',(e)=>{
//   console.log("child will here");
//   e.stopPropagation(); // event will as the only event will run bubbling and caputring will not cross 
// },false);

// bubbling use bubbling up mean you click the child print child,parent,grand parent
// the bubbling traget from the target to the root and capture traget from  the root to the target

//event delication 

// document.querySelector('#container').addEventListener('click',(e)=>{
//   console.log(e.target.innerText);
//   if(e.target.tagName == "LI"){
//     window.location.href = "./" + e.target.id;
//   }
// }); first examplwe of event delication

  // second example of delication

  document.querySelector('#from').addEventListener('keyup', (e)=>{
    console.log(e)
     if(e.target.dataset.uppercase != undefined){
         e.target.value = e.target.value.toUpperCase();
     }
  });