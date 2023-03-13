const sayilar = [12,56,14,67,89,33,22];
let enBuyuk = sayilar[0];

for (let i=0; i<sayilar.length; i++){
    
    if (sayilar[i]>=enBuyuk){
        enBuyuk = sayilar[i];
    }
}
console.log("En Buyuk Sayi: "+enBuyuk);