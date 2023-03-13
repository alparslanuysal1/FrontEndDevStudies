/* 1*100 arasında rastgele tutulan sayıyı tahmin etme oyunu yazınız. */
/* Math.random */
// (Math.random() *(max-min) + min)
// (Math.random() *(100-1) + 1)
// Math.floor kusurati silen kod
const rastgeleSayi = Math.floor(Math.random() * 99 + 1);
console.log(rastgeleSayi)
let sayi;
do { 
    sayi = Number(prompt("Tahmininini Giriniz"));
    if(sayi>rastgeleSayi){
        alert("Daha Kucuk Bir Sayi giriniz")    
    }

    else if (sayi<rastgeleSayi){ 
        alert("Daha Buyuk Bir Sayi Giriniz")
    }
    else {
        alert("Bingoooooo!");
    }
}
while (rastgeleSayi !== sayi)