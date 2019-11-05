function papanCatur(){
    let caturPapan= '', ukuran=8, a;
    

for(let b = 0 ; b < ukuran ; b++) {
  a= b%2 ? '# ' : ' #';
  for(let c = 0 ; c < ukuran/2 ; c++) {
    caturPapan+= a;
  }
  caturPapan+= '\n';
}

console.log(caturPapan);
}

papanCatur();

/* Output

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
