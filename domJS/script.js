
// primitive Data
var name2 = "flogert";
var age = 25;
var isBored = false;
var rate = 0.8
name2 = 1;
// non-primitve Data
// arrays
//               0    1  2    3
var allUser = ["test",1,true,0.2]
var favNumber= [23,7,98,100]

// console.log(allUser[1])
//                    index < 4 
// for (let index = 0; index < favNumber.length; index++) {
//         //          favNumber[0]
//     const element = favNumber[index];
//     console.log(element);
//     // 23,7,98,100
// }
        //       item = 0.2
favNumber.forEach(item => {
    item = item +100
    // console.log(item)
    
});

// objects
const user = {
    "name": "flogert",
    "Age": 25,
    "isBored": false

}

// functions
// created the function
function HelloWorld() {

    console.log("Hello World")   
}
// callig the function



// created the function
function HelloUser(nameExample) {
    console.log("Hello user : " + nameExample)
    
}



function getSum(a,b) {
        return a+b
}
// console.log(9) 

// console.log(getSum(3,6)) 
// // console.log(3))
// console.log(getSum(1,2)) 

// getSum(9,3)
var finaSum= getSum(getSum(3,6),getSum(1,2))
console.log(finaSum)

function SayHello() {
    alert("Hello User")
}

function ChangeH2() {
// <h2 id="myH2" onclick=""> Change Me </h2>
    document.getElementById("myH2").innerHTML = "You changed Me"
}

function ChangeH2s(elId) {
    // <h2 id="myH2" onclick=""> Change Me </h2>
        document.getElementById(elId).innerHTML = "You changed Me by function  ChangeH2s"
    }

function ChangeEveryH2(elClass) {
    console.log("we called ChangeEveryH2 ")
   var h2s= document.getElementsByClassName(elClass);
   console.log(h2s)
   for (let index = 0; index < h2s.length; index++) {
    const element = h2s[index];
    element.innerHTML = " we changed at the same time"
    
   }
    
}

function ChangeButon(el) {
    console.log(el)
    el.innerHTML= "you changed me too"
    
}