let months =["January","February","March","April","May"];

function monthscount(array) {
    let arr =[];
    for (let i = 0; i< array.length; i++) {
      let count = i + 1 ;
      let date = array[i] +"-"+count;
      arr.push(date)
       
    }
return arr;


}
console.log(monthscount(months));
