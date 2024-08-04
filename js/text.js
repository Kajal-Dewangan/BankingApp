// console.log("Hello World");

// let name = "Kaajal Dewangan"
 

// console.log("My Name Is " + name) 


// console.log(2+5)


// console.log("2+5")


// let num1 = 55
// let num2 = 66

// console.log(num1 + num2)

// console.log("num1 + num2")

// let num  = 33

// console.log = (typeof num);


// 


//  let gamecounter = 100

//  ++gamecounter;

//  console.log(gamecounter)

//  const id = Symbol('123')


//  const anotherid = Symbol('123')


//  console.log(id === anotherid)
//  let myyoutubename = "kajaldewangan"
 
 
//  let myanothername = myyoutubename

//  anothername = "chaiandcode"

//  console.log(myyoutubename);

//  console.log(myanothername);


// let MyYouTubeName = "hiteshdotcom"

// let anothername = MyYouTubeName

// anothername = "chaiaurcode"
// console.log(MyYouTubeName)
// console.log(anothername)


// let userOne = {
//     emailid : "user@google.com",

//     upi: "user@ybl"
// }

// let usertwo = userOne
// usertwo.emailid = "kkajal@gmail.com"

// console.log(userOne.emailid);
// console.log(usertwo.emailid);

// const name = "Kajal"

// const Repocount = 50

// console.log(name + Repocount + "Velue")

// console.log('Hello My Name Is ${name} and my repo cound is $ {Repocount}')

// const gameName = new String('hitesh')

// console.log(gameName[0]);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2))

// // console.log(gameNameof('t'));

// const newstring = gameName.substring(0,4)

// console.log(newstring);

// const otherstring = gameName.slice(-8,4)

// const newstring = "  hitesh  "

// console.log(newstring)

// console.log(newstring.trim());


// const score = 400 

// console.log(score);

// const blance = new Number(100)

// console.log(blance);

// console.log(blance.toString().length)

// console.log(blance.toFixed(2));
// +++++++++++++ Math +++++++++++++
// const Math = 
// console.log(Math);

// console.log(Math.abs(-4));

// console.log(Math.round(3.7));

// console.log(Math.ceil(1.2));

// let myDate = new Date ()

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate)

// let myCreatedDate = new Date (1997, 5, 7)
// console.log(myCreatedDate.toDateString());

// const marvel_heros = ["thor", "iornman", "spiderman"]

// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][1])

// const allheros = marvel_heros.concat(dc_heros)

// console.log(allheros);

// console.log(Array.isArray("Kajal"))

// console.log(Array.from("Kajal"))

// console.log(Array.from({name: "Kajal"}))

// literal object

// const jsUser = {
//     name: "Kajal",
//     age:"18",
//     location: "raipur",
//     email: "kkajaldewamgan@gamail.com",
//     isLoggedIn: false,
//     lastlogindays: ["monday","saturday"]   
// }

// console.log(jsUser.email)

// console.log(jsUser["email"])
// console.log(jsUser["email"])

// const regularUser = {
    email: "some@gmail.com",
    fullname: {
                userfullname:{
                    fristname:"kajal",
                    lastname: "Dewangan",
                }
    }
// }
// console.log(regularUser.fullname.userfullname.fristname)


// const obj1 = {1: "a",2: "b"}
// const obj2 = {4: "a",6: "b"}

// const obj3 = Object.assign( {}, obj1, obj2)

// console.log(obj3)

// const course = {
//     coursename: "js tutorial",
//     price: "999", 
//     courseinstructor: "hitesh",
// }

// const{courseinstructor} = course

// console.log(courseinstructor);
function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
} 

const result = addTwoNumbers(2, 6)

console.log("result:", result)