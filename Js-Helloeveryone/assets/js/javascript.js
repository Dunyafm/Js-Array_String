let str = "Salam olsun hamiya";


function salam(str) {
    let arr = str.split(" ");
    let result= arr.map(m=>(m.lenght));
    return result;

}    
console.log(salam(str));