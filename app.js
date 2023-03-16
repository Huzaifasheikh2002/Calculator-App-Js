var input=document.getElementById("input")
console.log(input);
function getValue(num){
    // console.log(num);
    var input=document.getElementById("input")
    input.value +=num;

}
// document.getElementById("EqualVal")

function totalValue(){
    var input=document.getElementById("input")
    // console.log (eval(input.value));
    input.value=eval(input.value);
}
function allClear(){
    var input=document.getElementById("input")

    input.value="";
    // input.value=eval(input.value);
}
function oneRemove(){
    var input =document.getElementById("input");
    var oneclear = input.value.slice(0,-1)
    input.value=oneclear
}
// if (input.value="") {
//     document.getElementById("EqualVal").classList.add("equalclass")
// }