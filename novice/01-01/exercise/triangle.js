function setengahSegitiga (Tingginya) {

    for (let a = 1; a <= Tingginya; a++) {
      let tampilkan = '';
  
      for (let b = 1; b <= a; b++) {
        tampilkan += '#';
      }
  
      console.log(tampilkan);
    }
  }
  
  setengahSegitiga(7);


  //Output

  //#
  //##
  //###
  //####
  //#####
  //######
  //#######