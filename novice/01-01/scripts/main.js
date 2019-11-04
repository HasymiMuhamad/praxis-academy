//learning "document.querySelector()"

let el = document.querySelector(".myclass .line");
el.textContent = "test";
el.textContent = "bob";

let coba = document.querySelector(".myclass .line-1");
coba.textContent = "coba1";
coba.textContent = "coba2";

let bilangan = document.querySelector(".myclass .line-2");
bilangan.textContent = 1;

let bolean = document.querySelector(".myclass .line-3");
bolean.textContent = true;

let array1 = document.querySelector(".myclass .line-3");
array1.textContent = [1,'kata',[1,2,3]];

let contohArray = [1,2,3,'nama',[4,5,6]];

let array2 = document.querySelector(".myclass .line-4");
array2.textContent = contohArray[0];

//learning "Comments"

//comments 1 baris

/*
 comments lebih dari 2 baris
*/


//learning "Operator"
let angka1 = 1;
let angka2 = 2;

let angka3 = angka1+angka2;

let penjumlahan = document.querySelector(".myclass .line-hasil-penjumlahan")
penjumlahan.textContent = angka3;

let Pengurangan = angka1-angka2;
let hasilPengurangan = document.querySelector(".myclass .line-hasil-pengurangan");
hasilPengurangan.textContent = Pengurangan;

let perkalian = angka1*angka2;
let hasilPerkalian = document.querySelector(".myclass .line-hasil-perkalian")
hasilPerkalian.textContent = perkalian;

let pembagian = angka1/angka2;
let hasilPembagian = document.querySelector(".myclass .line-hasil-pembagian")
hasilPembagian.textContent = pembagian;