// Dizideki sayilarin toplami:
const sayilar = [12,56,14,67,89,33,33];
let toplam=0
for (let i=0; i<sayilar.length; i++){
    console.log(i +  ':'+ sayilar[i]);
    toplam=toplam+sayilar[i];
}
console.log("toplam: "+toplam);