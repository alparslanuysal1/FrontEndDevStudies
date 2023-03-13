const sayilar = [12,56,14,67,89,33,33];
let enBuyuk = sayilar[0];
let enKucuk = sayilar[0];

for (let i=0; i<sayilar.length; i++){
    if (sayilar[i]>=enBuyuk) {
        enBuyuk = sayilar[i];
    }
    if (sayilar[i]<=enKucuk){
        enKucuk = sayilar[i];
    }
}
console.log(enBuyuk);
console.log(enKucuk);
console.log(enBuyuk-enKucuk);
