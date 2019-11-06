//function

function fungsi1 (inputanPertama, inputanKedua){
    console.log(`${inputanPertama} dan ${inputanKedua}`);
}

fungsi1(3,4);

//Arrow Function
let tampilkan = (inputan1,inputan2)=>{
    console.log(`${inputan1} dan ${inputan2}`)
}

tampilkan(5,7);


let fungsiReturn = function (total){
    let hasil = total/5;
    return console.log(hasil);
    
}

let coba = fungsiReturn (20);