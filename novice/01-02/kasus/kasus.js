var num1, num2;
num1 = window.prompt("Masukkan Bilangan Pertama", "0");
num2 = window.prompt("Masukkan Bilangan Kedua", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  let hasil1 = document.querySelector('.myclass .line-1');
  hasil1.textContent = `Yang Terbesar adalah nomor ${num1}`
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  let hasil2 = document.querySelector('.myclass .line-2');
  hasil2.textContent = `Yang Terbesar adalah nomor ${num2}`
  }                  
else
  {
  let hasil3 = document.querySelector('.myclass .line-3');
  hasil3.textContent = `Nilai Semua Bilangan Sama Besar`
  }
  