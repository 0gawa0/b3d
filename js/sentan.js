//let num = 100;
let data = 2;

//const infinity = 100000000;

function buttonTest(){
    //num = num + 2;
    //console.log(num);
    data = count(data);
    console.log(data);
}

function count(countData){
    //countData = countData + 1;
    //if(countData < 10){
        //countData += 1;
    //}
    //for(let i=0; i < 10; i++){
        //countData += 3;
        //console.log(i);
    //}
    while(countData < 15){
        countData++;
        console.log(countData);
    }
    return countData;
}