const x=prompt("Lütfen Öğrenci Notunu Giriniz");

function harfNotufCevirici(x) {
let harfNotu=0
    if (x>89 && x<=100) {
     harfNotu="A ile gectiniz"
    }
    else if (x>79 && x<90){
        harfNotu="B ile gectiniz"
    }
    else if (x>69 && x<80){
        harfNotu="C ile gectiniz"
    }
    else if (x>49 && x<70){
        harfNotu= "D ile gectiniz"
    }
    else if (x>0 && x<50) {
        harfNotu="F ile kaldiniz"
    }
    else { 
       harfNotu ="0-100 Arasi Bir Not Giriniz"
    }
return harfNotu;
}

alert(harfNotufCevirici(x));