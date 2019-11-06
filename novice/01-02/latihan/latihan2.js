// for....statement

function latihan1(){
    for (let i = 0; i < 10 ; i++){
        console.log(`Nomor ${i}`)
    }
}

latihan1();

//do...while statements
function doWhile (){
    let a = 0;
do {
    a+=1;
    console.log(a);
} while (a < 10)
}

doWhile();

//while statements
function learnWhile(){
    let b = 0;
    let c = 0;
    while ( b < 10){
        b++;
        c += b;
    }
    console.log(b);
    console.log(c);
}

learnWhile();