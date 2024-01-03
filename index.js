// Code your solutions in this file
function writeCards (array,motion){
    const newArr=[];
    for (let i =0 ; i<array.length; i++){
        newArr.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return newArr;
}
 
function countDown (number){
    while(number>=0){ 
        console.log(number)
        number--;
    }
    return countDown
}