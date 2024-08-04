// function calculatercartprice(...num1){
    // return num1
// }

// console.log(calculatercartprice(200,400,500))

// const user = {
//     username: "kajal",
//     price: 999

// }
// function handleobject(anyobjact){
//     console.log('userrname is ${anyobject.username} and price is ${anyobject.price}')
// }
// hendleobject(user)

// function one() {
//     const username = "Kajal"
//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }

    // console.log(website);
//     two()
// }
// one()

// if(true) {
//     const surname = "kaajal"
//     if(surname === "kaajal") {
//         const website = "  youtube"
//         console.log(surname + website);
//     }
//     // console.log(website);
// }
// // console.log(surname);

// function addone(num) {
//     return num + 1
// }

// console.log(addone(5))

// const addtwo = function(num){
//     return num + 2
// }

// addtwo(5)

// const user = {
//     username: "kaajal",

//     price: 999,

//     welcomemassage: function() {
//         console.log('${this.username} ,welcome to website');
//         console.log(this);
    // }
// }
// user.welcomemassage()
// user.username = "kaju"
// user.welcomemassage()

for (let i = 0; i <= 10; i++) {
    console.log('outer loop value: ${i}');
    for (let j = 0; j <= 10; j++) {
        // console.log('inner loop value: ${j} and inner loop: ${i}');
        console.log(i + '*' + j + ' = ' + i*j);
    }
    
}