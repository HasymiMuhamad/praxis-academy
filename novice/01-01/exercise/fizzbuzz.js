function fizzbuzz(){
    let data = "", a, b, c;
    for (a=1; a<=100; a++){
        b = a%3 ==0;
        c = a%5 ==0;

        if (b){
            data+="Fizz"
        }

        if (c){
            data+="Buzz"
        }

        if (!(b||c)){
            data+=a;
        }

        data+="\n"
    }
    console.log(data);
}

fizzbuzz();