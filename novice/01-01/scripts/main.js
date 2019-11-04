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


let warnaMobil = 'biru';
if (warnaMobil === 'biru'){
        alert ('Betul, Warnanya biru');
    } else {
        alert ('Salah, Warnanya bukan biru');
    }

let hasilWarna = document.querySelector(".myclass .line-hasil-warna");
hasilWarna.textContent = alert;



const tombol = document.querySelector('.button-1');

  tombol.onclick = function coba (){
      alert('Hasil Klik Tombol')
};


let gambarLogo = document.querySelector('.img-1');

gambarLogo.onclick = function() {
    let sumber = gambarLogo.getAttribute('src');
    if(sumber === 'images/firefox_png2.png') {
      gambarLogo.setAttribute ('src','images/firefox_png1.png');
    } else {
      gambarLogo.setAttribute ('src','images/firefox_png2.png');
    }
}


let tombol2 = document.querySelector('.button-2');
let heading2 = document.querySelector('.heading-2');

function namaKamu(){
    let tulisNama = prompt('Tulis nama kamu ya ...!!');
    if(!tulisNama || tulisNama === null){
        namaKamu();
    } else {
        localStorage.setItem('nama', tulisNama);
        heading2.textContent = 'Selamat Datang' + tulisNama;
    }
    // localStorage.setItem('nama', tulisNama);
    // heading2.textContent = 'Selamat Datang' + tulisNama;
}

if(!localStorage.getItem('nama')){
    namaKamu();
} else {
    let simpanNama = localStorage.getItem('nama');
    heading2.textContent = 'Selamat Datang' + simpanNama;
}

tombol2.onclick = function(){
    namaKamu();
}