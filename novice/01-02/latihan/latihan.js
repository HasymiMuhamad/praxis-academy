//Block Statements
function latihan(){
  var x = 4; 
  {
      var x = 7;
  }

  console.log(x);
}

latihan();

//Conditional Statements
function latihan3(){
    let z = 3;
    let y = 4;
    if (y === z){
        console.log('sama');
    } else {
        console.log('tidak sama');
    }
}

latihan3();


function latihan4(){
    let z = 5;
    let y = 6;
    let a = 1;
    let d = 2;
    if (((y === z)&&(a === d))){
        console.log('sama');
    } else {
        console.log('tidak sama');
    }
}

latihan4();

let item = 'belajar';
function latihan5(){
    if (item.length == 8){
        return true;
    } else {
        console.log('Maximum 8 karakter, dan karakter yang kamu isikan adalah'+ '  ' + item.length)
        return false;
    }
}

latihan5();


function latihan6(){
    switch (new Date().getDay()) {
        case 6:
          console.log("Hari Sabtu");
          break;
        case 0:
          console.log("Hari Minggu");
          break;

        default:
          console.log("Bukan Hari Weekend");
      }
}

latihan6();


function errorHandling(){
    try {
        try {
          throw new Error('Error ya ? Kenapa hayo...');
        }
        finally {
          console.log('Ini Finally');
        }
      }
      catch (ex) {
        console.error('Ini Catch', ex.message);
      }
}

errorHandling();



function cobaTry() {
    try {
      console.log(0);
      throw 'try running';
    } catch(e) {
      console.log(1);
      return true; 
                   
      console.log(2); 
    } finally {
      console.log(3);
      return false; 
      console.log(4); 
    }
      
    console.log(5); 
  }
  console.log(cobaTry()); 